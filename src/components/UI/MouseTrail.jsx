import { useEffect, useRef } from 'react'

export default function MouseTrail() {
  const canvasRef = useRef()

  useEffect(() => {
    if (window.innerWidth <= 768) return
    const canvas = canvasRef.current
    const ctx    = canvas.getContext('2d')
    let W, H, animId
    const trail  = []
    const MAX    = 22

    const resize = () => {
      W = canvas.width  = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    let mx = -200, my = -200
    const onMove = e => { mx = e.clientX; my = e.clientY }
    document.addEventListener('mousemove', onMove)

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      trail.push({ x: mx, y: my, age: 0 })
      if (trail.length > MAX) trail.shift()

      trail.forEach((p, i) => {
        p.age++
        const ratio  = i / trail.length
        const alpha  = ratio * .45
        const radius = ratio * 5 + .5
        ctx.beginPath()
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(91,155,255,${alpha})`
        ctx.fill()
      })

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      document.removeEventListener('mousemove', onMove)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ position:'fixed', inset:0, zIndex:1, pointerEvents:'none', opacity:.7 }}
    />
  )
}
