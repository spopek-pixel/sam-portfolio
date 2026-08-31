// Runs after `vite build`. Generates a static dist/work/<slug>/index.html per project,
// each with its own Open Graph/Twitter meta tags, so link-preview bots (which don't run
// JS) see the right title/description/image instead of the homepage's for every project URL.
import { readFile, writeFile, copyFile, mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.dirname(fileURLToPath(import.meta.url)) + '/..'
const distDir = path.join(root, 'dist')

const mimeTypes = {
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
}

function escapeHtml(value) {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

async function main() {
  const templatePath = path.join(distDir, 'index.html')
  if (!existsSync(templatePath)) {
    console.error('generate-og-pages: dist/index.html not found, run `vite build` first.')
    process.exit(1)
  }

  const template = await readFile(templatePath, 'utf-8')
  const meta = JSON.parse(await readFile(path.join(root, 'scripts/og-meta.json'), 'utf-8'))

  const ogDir = path.join(distDir, 'og')
  await mkdir(ogDir, { recursive: true })

  for (const page of meta.pages) {
    const ext = path.extname(page.image)
    const mime = mimeTypes[ext.toLowerCase()] ?? 'image/png'
    const imageFileName = `${page.slug}${ext}`

    await copyFile(path.join(root, page.image), path.join(ogDir, imageFileName))

    const imageUrl = `${meta.siteUrl}/og/${imageFileName}`
    const pageUrl = `${meta.siteUrl}/work/${page.slug}`
    const title = escapeHtml(page.title)
    const description = escapeHtml(page.description)

    let html = template
    html = html.replace(/<title>.*?<\/title>/s, `<title>${title}</title>`)
    html = html.replace(/(<meta name="description" content=")[^"]*(")/, `$1${description}$2`)
    html = html.replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${pageUrl}$2`)
    html = html.replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${title}$2`)
    html = html.replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${description}$2`)
    html = html.replace(/(<meta property="og:image" content=")[^"]*(")/, `$1${imageUrl}$2`)
    html = html.replace(/(<meta property="og:image:secure_url" content=")[^"]*(")/, `$1${imageUrl}$2`)
    html = html.replace(/(<meta property="og:image:type" content=")[^"]*(")/, `$1${mime}$2`)
    html = html.replace(/\s*<meta property="og:image:width"[^>]*>\n/, '\n')
    html = html.replace(/\s*<meta property="og:image:height"[^>]*>\n/, '\n')
    html = html.replace(/(<meta property="og:image:alt" content=")[^"]*(")/, `$1${title}$2`)
    html = html.replace(/(<meta name="twitter:url" content=")[^"]*(")/, `$1${pageUrl}$2`)
    html = html.replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${title}$2`)
    html = html.replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${description}$2`)
    html = html.replace(/(<meta name="twitter:image" content=")[^"]*(")/, `$1${imageUrl}$2`)

    const outDir = path.join(distDir, 'work', page.slug)
    await mkdir(outDir, { recursive: true })
    await writeFile(path.join(outDir, 'index.html'), html, 'utf-8')
    console.log(`generate-og-pages: wrote dist/work/${page.slug}/index.html`)
  }
}

main()
