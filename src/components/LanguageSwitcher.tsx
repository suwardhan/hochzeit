import { useLanguage } from '@/context/LanguageContext'
import { langLabels, type Lang } from '@/translations'

const LANGS: Lang[] = ['en', 'de', 'hi', 'mr']

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()

  return (
    <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2" role="group" aria-label="Language">
      {LANGS.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          className={`min-w-[2.75rem] rounded-lg px-2.5 py-1.5 text-sm font-medium transition-all sm:min-w-[3.5rem] sm:px-3 sm:py-2 ${
            l === lang
              ? 'btn-glass text-slate-800'
              : 'text-slate-600 hover:bg-white/40 hover:text-slate-800'
          }`}
          aria-pressed={l === lang}
          aria-label={`Language: ${langLabels[l]}`}
        >
          {langLabels[l]}
        </button>
      ))}
    </div>
  )
}
