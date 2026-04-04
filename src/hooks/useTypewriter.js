import { useState, useEffect, useRef } from 'react'

export function useTypewriter(words, speed = 80, deleteSpeed = 50, pause = 1800) {
  const [text, setText] = useState('')
  const s = useRef({ wi: 0, ci: 0, del: false })
  useEffect(() => {
    let t
    const run = () => {
      const { wi, ci, del } = s.current, w = words[wi]
      if (!del && ci < w.length)       { s.current.ci++; setText(w.slice(0,ci+1)); t=setTimeout(run,speed) }
      else if (!del)                   { t=setTimeout(()=>{ s.current.del=true; run() },pause) }
      else if (ci > 0)                 { s.current.ci--; setText(w.slice(0,ci-1)); t=setTimeout(run,deleteSpeed) }
      else { s.current.del=false; s.current.wi=(wi+1)%words.length; t=setTimeout(run,120) }
    }
    run(); return () => clearTimeout(t)
  }, [])
  return text
}
