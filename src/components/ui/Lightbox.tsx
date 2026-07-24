import { useEffect, useState, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'
import { cn } from '@/lib/utils'

interface LightboxProps {
  src: string
  alt: string
  children: ReactNode
  className?: string
  triggerClassName?: string
}

export function Lightbox({ src, alt, children, className, triggerClassName }: LightboxProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Expand image: ${alt}`}
        className={cn('group relative block w-full cursor-zoom-in text-left', triggerClassName)}
      >
        <div className={className}>{children}</div>
        <span className="pointer-events-none absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-line bg-ink/70 text-fg opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
          <ZoomIn size={16} />
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[300] flex items-center justify-center bg-ink/90 p-6 backdrop-blur-md"
            onClick={() => setOpen(false)}
          >
            <motion.img
              src={src}
              alt={alt}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="max-h-[90vh] max-w-[92vw] rounded-lg object-contain shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
              onClick={(event) => event.stopPropagation()}
            />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface/80 text-fg transition-colors hover:border-violet-tint"
            >
              <X size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
