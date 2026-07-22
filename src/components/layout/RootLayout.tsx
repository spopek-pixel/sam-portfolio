import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { PageTransition } from './PageTransition'
import { SmoothScrollProvider } from './SmoothScrollProvider'
import { CursorDot } from '@/components/ui/CursorDot'

export function RootLayout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [location.pathname])

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
      <AnimatePresence mode="wait">
        <PageTransition key={location.pathname}>
          <main id="main-content">
            <Outlet />
          </main>
        </PageTransition>
      </AnimatePresence>
      <Footer />
    </SmoothScrollProvider>
  )
}
