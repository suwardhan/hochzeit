import { Outlet, useLocation } from 'react-router-dom'
import { LanguageSwitcher } from './LanguageSwitcher'

export function Layout() {
  const { pathname } = useLocation()
  const showHeader = pathname !== '/faq'

  return (
    <>
      {showHeader && (
        <header className="px-4 py-3 sm:px-6 sm:py-4">
          <div className="mx-auto flex max-w-2xl justify-end">
            <div className="glass rounded-2xl px-3 py-2 sm:px-4 sm:py-2.5">
              <LanguageSwitcher />
            </div>
          </div>
        </header>
      )}
      <main>
        <Outlet />
      </main>
    </>
  )
}
