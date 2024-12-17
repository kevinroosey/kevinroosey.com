import './App.css'
import Header from './components/navbar'
import ProjectCard from './components/project-card'

function App() {

  return (
    <>
      <div className='min-h-screen min-w-screen max-h-full bg-white py-10'>
        <div className='w-full xl:w-[500px] mx-auto flex flex-col gap-12'>
          <div className='w-full flex items-center mx-auto'>
            <Header />
          </div>
          <div className='w-full flex items-center mx-auto'>
            <div className='flex flex-col gap-3'>
              <p className='text-md font-medium text-neutral-800'>Hey, I&apos;m Kevin. I&apos;m a senior CS student at DePaul University. I love building and improving my craft.
              </p>
              <p className='text-md font-medium text-neutral-800'>The good news for you, is that you can <a href='mailto:kevinroosey@gmail.com' className='text-blue-600 hover:text-underline hover:text-blue-700'>hire me</a></p>
            </div>
          </div>
          <div>
            <h1 className="text-left text-xl font-semibold text-primary-800">Projects</h1>
            <div className='flex flex-col pt-6 gap-1'>
              <ProjectCard
                title='Traba'
                description='Tailor your resume to each application using AI'
                image='/TrabaLogo.svg'
                stack={['openai', 'nextjs2', 'reactjs', 'tailwindcss', 'go', 'docker']}
              />
              <ProjectCard
                title='SEC Scraper'
                description='Query thousands of 10-K reports with a simple API'
                image='/SEC.svg'
              />
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
