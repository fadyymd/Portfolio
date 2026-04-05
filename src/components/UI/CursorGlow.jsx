import { useEffect } from 'react'
export default function CursorGlow() {
  useEffect(() => {
    const el = document.getElementById('cglow')
    if (!el || window.innerWidth <= 768) { if(el) el.remove(); return }
    let rx=0,ry=0,tx=0,ty=0,id
    const mv = e => { tx=e.clientX; ty=e.clientY }
    const tick = () => { rx+=(tx-rx)*.09; ry+=(ty-ry)*.09; el.style.left=rx+'px'; el.style.top=ry+'px'; id=requestAnimationFrame(tick) }
    document.addEventListener('mousemove',mv); id=requestAnimationFrame(tick)
    // Scale up on interactive elements
    const over = () => el.style.transform='translate(-50%,-50%) scale(1.8)'
    const out  = () => el.style.transform='translate(-50%,-50%) scale(1)'
    el.style.transition='transform .4s cubic-bezier(.34,1.56,.64,1)'
    document.querySelectorAll('a,button,.proj-card,.sk-cat,.tl-card').forEach(el2=>{
      el2.addEventListener('mouseenter',over); el2.addEventListener('mouseleave',out)
    })
    return () => { document.removeEventListener('mousemove',mv); cancelAnimationFrame(id) }
  },[])
  return <div id="cglow"/>
}
