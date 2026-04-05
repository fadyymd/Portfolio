import { useEffect } from 'react'
export function useScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('on'); obs.unobserve(e.target) } })
    }, { threshold: 0.06, rootMargin: '0px 0px -25px 0px' })
    const t = setTimeout(() => document.querySelectorAll('.rv,.rv-left,.rv-right,.rv-scale').forEach(el => obs.observe(el)), 80)
    return () => { clearTimeout(t); obs.disconnect() }
  })
}
