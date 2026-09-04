import { Suspense, useEffect } from 'react'
import { Outlet, useLocation, useParams } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { SmoothScrollProvider } from './SmoothScrollProvider'
import { RouteErrorBoundary } from './RouteErrorBoundary'
import { CursorDot } from '@/components/ui/CursorDot'
import { getProject } from '@/data/projects'

const SITE_TITLE = 'Samantha Popek: UX & Product Designer'

const staticTitles: Record<string, string> = {
  '/work': 'Work | Samantha Popek',
  '/about': 'About | Samantha Popek',
  '/contact': 'Contact | Samantha Popek',
}

export function RootLayout() {
  const location = useLocation()
  const { slug } = useParams()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [location.pathname])

  useEffect(() => {
    if (location.pathname === '/') {
      document.title = SITE_TITLE
      return
    }
    if (slug) {
      const project = getProject(slug)
      document.title = project ? `${project.title} | Samantha Popek` : SITE_TITLE
      return
    }
    document.title = staticTitles[location.pathname] ?? SITE_TITLE
  }, [location.pathname, slug])

  return (
    <SmoothScrollProvider>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-acid focus:px-5 focus:py-3 focus:text-ink"
      >
        Skip to content
      </a>
      <CursorDot />
      <Navbar />
      <main id="main-content">
        <RouteErrorBoundary key={location.pathname}>
          <Suspense fallback={<div className="min-h-screen" />}>
            <Outlet />
          </Suspense>
        </RouteErrorBoundary>
      </main>
      <Footer />
    </SmoothScrollProvider>
  )
}
