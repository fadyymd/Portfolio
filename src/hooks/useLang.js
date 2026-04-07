import { useState, useEffect } from 'react'

export function useLang() {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'en')

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.style.setProperty(
      '--ff-b', lang === 'ar' ? "'Cairo', sans-serif" : "'Inter', sans-serif"
    )
  }, [lang])

  const toggle = () => setLang(l => l === 'en' ? 'ar' : 'en')
  return { lang, toggle, isAr: lang === 'ar' }
}
