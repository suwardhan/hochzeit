import { Link } from 'react-router-dom'
import { useLanguage } from '@/context/LanguageContext'
import { Button } from '@/components/ui/button'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'

function AndroidIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor" aria-hidden>
      <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24a11.43 11.43 0 0 0-8.94 0L5.65 5.67c-.19-.28-.54-.37-.83-.22-.3.16-.42.54-.26.85l1.84 3.18C4.17 11.23 2 14.39 2 18h20c0-3.61-2.17-6.77-5.4-8.52zM7 15.25c-.69 0-1.25-.56-1.25-1.25S6.31 12.75 7 12.75s1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm10 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" />
    </svg>
  )
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor" aria-hidden>
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  )
}

const RSVP_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfeKje-JKp1PyzRgT6FtymTQEM5B516aAhEhgxDsxOTLci_jQ/viewform?usp=dialog'
const GOOGLE_CALENDAR_URL = 'https://calendar.google.com/calendar/u/0?cid=YmQzZWU0M2IxZTY1YTE3MTk4ZWMxYjc1Y2YyMGU1NjFmMDM0NDBhMzgwMGRjNGQyYzZjMjhiZDM5MWMzZDZkNEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t'

export function Landing() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen -mt-[280px] -mb-[120px] px-4 py-6 sm:px-6 sm:py-10 md:px-8">
      <div className="mx-auto max-w-lg space-y-8">
        <section className="rounded-3xl p-6 sm:p-8 text-center bg-transparent border-transparent shadow-none backdrop-blur-none">
          <img
            src={`${import.meta.env.BASE_URL}couple.png`}
            alt={t('landing.heroTitle')}
            className="mx-auto h-40 w-40 rounded-2xl object-cover sm:h-56 sm:w-56"
          />
          <h1 className="mt-4 font-serif text-2xl font-semibold tracking-tight text-slate-800 sm:text-3xl">
            {t('landing.heroTitle')}
          </h1>
          <p className="mt-2 text-slate-600 sm:text-lg">
            {t('landing.heroWeMarry')}
          </p>
          <p className="mt-1 text-xl font-medium text-slate-800 sm:text-2xl">
            {t('landing.heroDate')}
          </p>
          <p className="mt-1 text-slate-600 sm:text-lg">
            {t('landing.heroPlace')}
          </p>
        </section>

        <div className="flex justify-center">
          <div className="glass rounded-2xl px-3 py-2 sm:px-4 sm:py-2.5">
            <LanguageSwitcher />
          </div>
        </div>

        <section className="glass rounded-3xl p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-slate-800 sm:text-xl">{t('landing.rsvpTitle')}</h2>
          <p className="mt-1 text-sm text-slate-600 sm:text-base">
            {t('landing.rsvpDesc')}
          </p>
          <a href={RSVP_URL} target="_blank" rel="noopener noreferrer" className="mt-4 block">
            <Button size="lg" className="w-full">
              {t('landing.rsvpButton')}
            </Button>
          </a>
        </section>

        <section className="glass rounded-3xl p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-slate-800 sm:text-xl">{t('landing.calendarTitle')}</h2>
          <p className="mt-1 text-sm text-slate-600 sm:text-base">
            {t('landing.calendarDesc')}
          </p>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={GOOGLE_CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button variant="glass" size="default" className="w-full">
                <AndroidIcon />
                {t('landing.calendarGoogle')}
              </Button>
            </a>
            <a href={`${import.meta.env.BASE_URL}wedding.ics`} download className="flex-1">
              <Button variant="glass" size="default" className="w-full">
                <AppleIcon />
                {t('landing.calendarApple')}
              </Button>
            </a>
          </div>
        </section>

        <section className="glass rounded-3xl p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-slate-800 sm:text-xl">{t('landing.faqTitle')}</h2>
          <p className="mt-1 text-sm text-slate-600 sm:text-base">
            {t('landing.faqDesc')}
          </p>
          <Link to="/faq" className="mt-4 block">
            <Button size="lg" className="w-full">
              {t('landing.faqButton')}
            </Button>
          </Link>
        </section>

        <div
          className="aspect-[2/1] w-full bg-no-repeat bg-bottom pb-4"
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}bottom.svg)`,
            backgroundPosition: 'bottom',
            backgroundSize: '100% auto',
          }}
          aria-hidden
        />
      </div>
    </div>
  )
}
