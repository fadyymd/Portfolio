import { useEffect, useRef } from 'react'

export default function CursorSpotlight() {
  const ref = useRef()
  useEffect(() => {
    const fn = e => {
      if (ref.current) {
        ref.current.style.left = e.clientX + 'px'
        ref.current.style.top  = e.clientY + 'px'
      }
    }
    document.addEventListener('mousemove', fn, { passive: true })
    return () => document.removeEventListener('mousemove', fn)
  }, [])
  return (
    <div
      ref={ref}
      style={{
        position: 'fixed',
        width: 600,
        height: 600,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(21,96,242,.06) 0%, transparent 65%)',
        transform: 'translate(-50%,-50%)',
        pointerEvents: 'none',
        zIndex: 0,
        transition: 'left .12s ease, top .12s ease',
        filter: 'blur(8px)',
      }}
    />
  )
}
