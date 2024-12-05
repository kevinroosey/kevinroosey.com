import './App.css'
import Header from './components/navbar'

function App() {

  return (
    <>
      <div className='min-h-screen min-w-screen max-h-full bg-neutral-50 py-10'>
        <div className='w-full xl:w-1/2 flex items-center mx-auto'>
            <Header />
        </div>
      </div>
    </>
  )
}

export default App
