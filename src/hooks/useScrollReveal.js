import { useEffect, useRef } from 'react'

let sharedObserver = null
const observedElements = new Set()

function getSharedObserver() {
  if (sharedObserver) {
    return sharedObserver
  }

  if (!('IntersectionObserver' in window)) {
    return null
  }

  sharedObserver = new IntersectionObserver(
    (entries) => {
      const observer = sharedObserver

      for (const entry of entries) {
        if (!entry.isIntersecting) {
          continue
        }

        entry.target.classList.add('scroll-reveal--entered')
        observer?.unobserve(entry.target)
        observedElements.delete(entry.target)
      }

      if (observedElements.size === 0 && observer) {
        observer.disconnect()
        if (sharedObserver === observer) {
          sharedObserver = null
        }
      }
    },
    { rootMargin: '0px 0px -32px 0px', threshold: 0.1 },
  )

  return sharedObserver
}

function useScrollReveal() {
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    const prefersReducedMotion = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (!element || prefersReducedMotion) {
      return undefined
    }

    const observer = getSharedObserver()
    if (!observer) {
      return undefined
    }

    observedElements.add(element)
    observer.observe(element)

    return () => {
      observedElements.delete(element)
      observer.unobserve(element)

      if (observedElements.size === 0) {
        observer.disconnect()
        if (sharedObserver === observer) {
          sharedObserver = null
        }
      }
    }
  }, [])

  return elementRef
}

export default useScrollReveal