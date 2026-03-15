import { Link } from 'react-router-dom'
import { useLanguage } from '@/context/LanguageContext'
import { Button } from '@/components/ui/button'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'

const RSVP_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfeKje-JKp1PyzRgT6FtymTQEM5B516aAhEhgxDsxOTLci_jQ/viewform?usp=dialog'
const CALENDAR_ICAL_URL = 'https://calendar.google.com/calendar/ical/bd3ee43b1e65a17198ec1b75cf20e561f03440a3800dc4d2c6c28bd391c3d6d4%40group.calendar.google.com/public/basic.ics'

export function Landing() {
  const { t } = useLanguage()

  const bottomBgUrl = `${import.meta.env.BASE_URL}bottom.svg`

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

        <div className="glass-gradient-border">
          <section className="glass rounded-3xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-slate-800 sm:text-xl">{t('landing.rsvpTitle')}</h2>
            <p className="mt-1 text-sm text-slate-600 sm:text-base">
              {t('landing.rsvpDesc')}
            </p>
            <a
              href={RSVP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 btn-glass text-slate-800 hover:bg-white/90 h-12 px-8 text-lg w-full"
            >
              {t('landing.rsvpButton')}
            </a>
          </section>
        </div>

        <section className="glass rounded-3xl p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-slate-800 sm:text-xl">{t('landing.calendarTitle')}</h2>
          <p className="mt-1 text-sm text-slate-600 sm:text-base">
            {t('landing.calendarDesc')}
          </p>
          <a
            href={CALENDAR_ICAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 btn-glass text-slate-800 hover:bg-white/90 h-12 px-8 text-lg w-full"
          >
            {t('landing.calendarButton')}
          </a>
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

      {/* Full-width bottom decoration – same layout as top (16px inset, calc(100% - 32px) width) */}
      <div
        className="aspect-[2/1] w-screen min-h-[200px] bg-no-repeat bg-bottom pb-4 relative left-1/2 -translate-x-1/2"
        style={{
          backgroundImage: `url(${bottomBgUrl})`,
          backgroundPosition: '16px bottom',
          backgroundSize: 'calc(100% - 32px) auto',
        }}
        aria-hidden
      />
    </div>
  )
}
