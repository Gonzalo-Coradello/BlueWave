import { lazy, Suspense } from 'react'

// Importar Pages
const MainPage = lazy(() => import('./pages/MainPage'))

const App = () => {
  return (
    <div>
      <Suspense
        fallback={
          <div className='grid w-screen h-screen justify-center items-center text-center'>
            <h2>Loading...</h2>
          </div>
        }
      >
        <MainPage />
      </Suspense>
    </div>
  )
}

export default App
