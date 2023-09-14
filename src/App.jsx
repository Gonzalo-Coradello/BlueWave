// import { lazy, Suspense } from 'react'
import { ScrollRestoration } from 'react-router-dom'
import MainPage from './pages/MainPage'
import Bubbles from './components/Bubbles/Bubbles'

// Importar Pages
// const MainPage = lazy(() => import('./pages/MainPage'))

const App = () => {
  return (
    <div>
      <ScrollRestoration />
      <MainPage />
      <Bubbles />
    </div>
  )
}

export default App
