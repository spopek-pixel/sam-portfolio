import { useEffect, useRef, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePrefersReducedMotion } from '@/hooks/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const reducedMotion = usePrefersReducedMotion()
  const lenisRef = useRef<Lenis | null>(null)
  const location = useLocation()

  useEffect(() => {
    if (reducedMotion) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    })
    lenisRef.current = lenis

    lenis.on('scroll', ScrollTrigger.update)

    const raf = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      lenisRef.current = null
      gsap.ticker.remove(raf)
    }
  }, [reducedMotion])

  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true })
  }, [location.pathname])

  return <>{children}</>
}
