import { Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import { Layout } from './components/Layout'
import { Landing } from './pages/Landing'
import { FAQ } from './pages/FAQ'

export default function App() {
  return (
    <>
      <div className="bg-gradient-move" aria-hidden />
      <LanguageProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Landing />} />
            <Route path="/faq" element={<FAQ />} />
          </Route>
        </Routes>
      </LanguageProvider>
    </>
  )
}
