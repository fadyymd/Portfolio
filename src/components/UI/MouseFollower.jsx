import { useEffect, useRef, useState } from 'react'
import './MouseFollower.css'

export default function MouseFollower() {
  const dotRef  = useRef()
  const ringRef = useRef()
  const [clicking, setClicking] = useState(false)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    if (window.innerWidth <= 768) return
    let rx=0,ry=0,tx=0,ty=0,id

    const onMove = e => { tx=e.clientX; ty=e.clientY }
    const tick = () => {
      rx += (tx-rx) * .14
      ry += (ty-ry) * .14
      if (dotRef.current)  { dotRef.current.style.left=tx+'px';  dotRef.current.style.top=ty+'px' }
      if (ringRef.current) { ringRef.current.style.left=rx+'px'; ringRef.current.style.top=ry+'px' }
      id = requestAnimationFrame(tick)
    }

    const onDown  = () => setClicking(true)
    const onUp    = () => setClicking(false)

    const checkHover = e => {
      const el = e.target
      setHovering(!!(el.closest('a,button,.proj-card,.sk-tab,.exp-item,.ab-fact,.ab-chip')))
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mousemove', checkHover)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('mouseup',   onUp)
    id = requestAnimationFrame(tick)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mousemove', checkHover)
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('mouseup',   onUp)
      cancelAnimationFrame(id)
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className={`mf-dot${clicking?' clicking':''}`} />
      <div ref={ringRef} className={`mf-ring${hovering?' hovering':''}`} />
    </>
  )
}
