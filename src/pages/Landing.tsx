import { Link } from 'react-router-dom'
import { useLanguage } from '@/context/LanguageContext'
import { Button } from '@/components/ui/button'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'

const RSVP_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfeKje-JKp1PyzRgT6FtymTQEM5B516aAhEhgxDsxOTLci_jQ/viewform?usp=dialog'
const GOOGLE_CALENDAR_URL = 'https://calendar.google.com/calendar/u/0?cid=YmQzZWU0M2IxZTY1YTE3MTk4ZWMxYjc1Y2YyMGU1NjFmMDM0NDBhMzgwMGRjNGQyYzZjMjhiZDM5MWMzZDZkNEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t'

export function Landing() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen -mt-[200px] -mb-[120px] px-4 py-6 sm:px-6 sm:py-10 md:px-8">
      <div className="mx-auto max-w-lg space-y-8">
        <section className="rounded-3xl p-6 sm:p-8 text-center bg-transparent border-transparent shadow-none backdrop-blur-none">
          <img
            src={`${import.meta.env.BASE_URL}couple.png`}
            alt={t('landing.heroTitle')}
            className="mx-auto h-48 w-48 rounded-2xl object-cover sm:h-56 sm:w-56"
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
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href={GOOGLE_CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button variant="glass" size="default" className="w-full">
                {t('landing.calendarGoogle')}
              </Button>
            </a>
            <a href={`${import.meta.env.BASE_URL}wedding.ics`} download className="flex-1">
              <Button variant="glass" size="default" className="w-full">
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
      </div>
    </div>
  )
}
