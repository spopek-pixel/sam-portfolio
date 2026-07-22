import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const location = useLocation()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 24)
  })

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          'mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full border border-transparent px-5 py-3 transition-all duration-500',
          scrolled && 'border-line bg-ink/70 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.35)]',
        )}
      >
        <NavLink to="/" className="group flex items-center gap-2 font-display text-lg font-semibold">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-violet text-sm text-ink transition-transform duration-300 group-hover:rotate-12">
            SP
          </span>
          <span className="hidden sm:inline">Samantha Popek</span>
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  'relative font-mono text-sm uppercase tracking-wider text-fg-muted transition-colors hover:text-fg',
                  isActive && 'text-fg',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 rounded-full border border-line px-4 py-2 text-sm text-fg transition-colors hover:border-violet-tint"
          >
            Resume <ArrowUpRight size={14} />
          </a>
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line md:hidden"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mx-4 mt-3 flex flex-col gap-1 rounded-3xl border border-line bg-ink-soft/95 p-4 backdrop-blur-xl md:hidden"
          >
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="rounded-2xl px-4 py-3 font-mono text-sm uppercase tracking-wider text-fg-muted hover:bg-surface hover:text-fg"
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-1 flex items-center justify-between rounded-2xl bg-violet px-4 py-3 text-sm text-fg"
            >
              Resume <ArrowUpRight size={14} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
