import { lazy, type ComponentType } from 'react'

const RELOADED_KEY = 'lazy-chunk-reloaded'

export function lazyWithRetry<T extends ComponentType<unknown>>(factory: () => Promise<{ default: T }>) {
  return lazy(async () => {
    try {
      const module = await factory()
      sessionStorage.removeItem(RELOADED_KEY)
      return module
    } catch (error) {
      if (!sessionStorage.getItem(RELOADED_KEY)) {
        sessionStorage.setItem(RELOADED_KEY, '1')
        window.location.reload()
        return new Promise<{ default: T }>(() => {})
      }
      throw error
    }
  })
}
