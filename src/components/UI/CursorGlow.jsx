import { useEffect } from 'react'

export default function CursorGlow() {
  useEffect(() => {
    const el = document.getElementById('cglow')
    if (!el || window.innerWidth <= 768) {
      if (el) el.remove()
      return
    }
    let rx = 0, ry = 0, tx = 0, ty = 0, rafId

    const onMove = (e) => { tx = e.clientX; ty = e.clientY }
    const tick = () => {
      rx += (tx - rx) * 0.1
      ry += (ty - ry) * 0.1
      el.style.left = rx + 'px'
      el.style.top  = ry + 'px'
      rafId = requestAnimationFrame(tick)
    }

    document.addEventListener('mousemove', onMove)
    rafId = requestAnimationFrame(tick)
    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return <div id="cglow" />
}
