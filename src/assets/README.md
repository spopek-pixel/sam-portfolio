# Assets

Drop new files into the matching folder — everything here is imported directly by components, so Vite will optimize/hash them automatically.

- `images/projects/<slug>/` — case study mockups, screens, hero shots. Slugs: `housingkind`, `dragonfly-yoga`, `iusafe`, `teklo`, `outfront-media-graphics`.
  - `images/projects/outfront-media-graphics/<client>/` — per-client mockups for that gallery page. Client folders: `ting`, `jack-brackney`, `its-no-yoke`, `pike-nurseries`. Drop up to 2 images per folder; they'll replace the placeholder tiles automatically.
- `images/about/` — headshots, personal photos (currently placeholders).
- `images/logos/` — wordmark / logomark files.
- `illustrations/` — SVG illustrations.
- `videos/` — project preview clips (optional).

Files that need a stable public URL instead of an import (e.g. things referenced by absolute path) go in `/public` at the project root — that's where `resume.pdf`, the favicon, and the social share image live.
