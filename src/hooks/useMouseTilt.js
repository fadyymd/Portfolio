import { useState, useRef, useCallback } from 'react'

export function useMouseTilt(strength = 8) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const ref = useRef()

  const onMove = useCallback(e => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    const x = (e.clientX - r.left - r.width  / 2) / r.width
    const y = (e.clientY - r.top  - r.height / 2) / r.height
    setTilt({ x, y })
  }, [])

  const onLeave = useCallback(() => setTilt({ x: 0, y: 0 }), [])

  const style = {
    transform: `perspective(900px) rotateY(${tilt.x * -strength}deg) rotateX(${tilt.y * strength}deg)`,
    transition: tilt.x === 0 && tilt.y === 0 ? 'transform .6s cubic-bezier(.22,1,.36,1)' : 'transform .1s linear',
  }

  return { ref, style, onMouseMove: onMove, onMouseLeave: onLeave, tilt }
}
