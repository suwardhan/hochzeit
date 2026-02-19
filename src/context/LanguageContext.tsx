import { createContext, useContext, useCallback, useState, useEffect, type ReactNode } from 'react'
import { translations, type Lang } from '@/translations'

const STORAGE_KEY = 'hochzeit-lang'

function getStoredLang(): Lang {
  try {
    const s = localStorage.getItem(STORAGE_KEY)
    if (s === 'en' || s === 'de' || s === 'hi' || s === 'mr') return s
  } catch {
    /* ignore */
  }
  return 'de'
}

function getNested(obj: Record<string, unknown>, path: string): unknown {
  return path.split('.').reduce<unknown>((o, k) => (o != null && typeof o === 'object' ? (o as Record<string, unknown>)[k] : undefined), obj)
}

type LanguageContextValue = {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: string) => string
  faqItems: { q: string; a: string | string[] }[]
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getStoredLang)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* ignore */
    }
    document.documentElement.lang = lang
  }, [lang])

  const setLang = useCallback((l: Lang) => setLangState(l), [])

  const t = useCallback(
    (key: string): string => {
      const val = getNested(translations[lang] as unknown as Record<string, unknown>, key)
      if (typeof val === 'string') return val
      return key
    },
    [lang]
  )

  const faqItems = translations[lang].faq.items

  const value: LanguageContextValue = { lang, setLang, t, faqItems }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
