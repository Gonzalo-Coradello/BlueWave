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
      {/* <Suspense */}
      {/* fallback={ */}
      {/* <div className='grid w-screen h-screen justify-center items-center text-center'> */}
      {/* <h2>Loading...</h2> */}
      {/* </div> */}
      {/* } */}
      {/* > */}
      <MainPage />
      <Bubbles />
      {/* </Suspense> */}
    </div>
  )
}

export default App
