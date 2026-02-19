import { Routes, Route, useLocation } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import { Layout } from './components/Layout'
import { Landing } from './pages/Landing'
import { FAQ } from './pages/FAQ'

const topBgUrl = `${import.meta.env.BASE_URL}top.svg`
const bottomBgUrl = `${import.meta.env.BASE_URL}bottom.svg`

export default function App() {
  const { pathname } = useLocation()
  const showSvgBorders = pathname !== '/faq'

  return (
    <>
      <div
        className="fixed inset-0 z-[-1] bg-gradient-bg"
        aria-hidden
      />
      <LanguageProvider>
        {showSvgBorders && (
          <div
            className="min-h-[50vh] bg-no-repeat bg-top"
            style={{
              backgroundImage: `url(${topBgUrl})`,
              backgroundPosition: '16px 16px',
              backgroundSize: 'calc(100% - 32px) auto',
            }}
            aria-hidden
          />
        )}
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Landing />} />
            <Route path="/faq" element={<FAQ />} />
          </Route>
        </Routes>
        {showSvgBorders && (
          <div
            className="min-h-[50vh] bg-no-repeat bg-bottom pb-4 pl-4 pr-4"
            style={{
              backgroundImage: `url(${bottomBgUrl})`,
              backgroundPosition: '16px bottom',
              backgroundSize: 'calc(100% - 32px) auto',
            }}
            aria-hidden
          />
        )}
      </LanguageProvider>
    </>
  )
}
