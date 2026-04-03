import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('on')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    )

    const timeout = setTimeout(() => {
      document.querySelectorAll('.rv').forEach((el) => observer.observe(el))
    }, 100)

    return () => {
      clearTimeout(timeout)
      observer.disconnect()
    }
  })
}
