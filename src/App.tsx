import './App.css'
import Header from './components/navbar'

function App() {

  return (
    <>
      <div className='min-h-screen min-w-screen max-h-full bg-background py-10'>
        <div className='w-full xl:w-1/2 mx-auto flex flex-col gap-12'>
          <div className='w-full flex items-center mx-auto'>
              <Header />
          </div>
          <div className='w-full flex items-center mx-auto'>
            <div className='flex flex-col gap-3'>
              <p className='text-neutral-800'>Hey, I&apos;m Kevin. I&apos;m a senior CS student at DePaul University. I love building things, and take immense pride in getting better after each project.
              </p>
            <p className='text-neutral-800'>The good news for you, is that you can <a href='mailto:kevinroosey@gmail.com' className='text-blue-600 hover:text-underline hover:text-blue-700'>hire me</a>.</p>
            </div>
          </div>
          <div>
            <h1 className="text-left text-xl font-semibold text-primary-800">Projects</h1>
            <div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
