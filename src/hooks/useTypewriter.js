import { useState, useEffect, useRef } from 'react'

export function useTypewriter(words, speed = 80, deleteSpeed = 50, pause = 1800) {
  const [text, setText] = useState('')
  const state = useRef({ wi: 0, ci: 0, del: false })

  useEffect(() => {
    let timer

    const run = () => {
      const { wi, ci, del } = state.current
      const word = words[wi]

      if (!del && ci < word.length) {
        state.current.ci++
        setText(word.slice(0, ci + 1))
        timer = setTimeout(run, speed)
      } else if (!del) {
        timer = setTimeout(() => { state.current.del = true; run() }, pause)
      } else if (ci > 0) {
        state.current.ci--
        setText(word.slice(0, ci - 1))
        timer = setTimeout(run, deleteSpeed)
      } else {
        state.current.del = false
        state.current.wi = (wi + 1) % words.length
        timer = setTimeout(run, 120)
      }
    }

    run()
    return () => clearTimeout(timer)
  }, [])

  return text
}
