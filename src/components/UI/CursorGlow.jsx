import { useEffect } from 'react'
export default function CursorGlow() {
  useEffect(() => {
    const el = document.getElementById('cglow')
    if (!el || window.innerWidth <= 768) { if(el) el.remove(); return }
    let rx=0,ry=0,tx=0,ty=0,id
    const mv = e => { tx=e.clientX; ty=e.clientY }
    const tick = () => { rx+=(tx-rx)*.1; ry+=(ty-ry)*.1; el.style.left=rx+'px'; el.style.top=ry+'px'; id=requestAnimationFrame(tick) }
    document.addEventListener('mousemove',mv); id=requestAnimationFrame(tick)
    return () => { document.removeEventListener('mousemove',mv); cancelAnimationFrame(id) }
  },[])
  return <div id="cglow" />
}
