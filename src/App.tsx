import './App.css'

function App() {
  return (
    <>
      <div>
        <p className="border-2 border-tahiti-400 bg-happy-yellow">Tailwind Css</p>
        <p className="text-xs sm:text-base md:text-lg lg:text-3xl">Tailwind Css</p>
        <button className='bg-sky-500 hover:bg-sky-700'>Styled button</button>
        {/* Typography */}
        <h1 className='text-[20px]'>First text</h1>
        <h2 className=''>Second text</h2>
        <h3 className='text-xl'>Third text</h3>
        <p className='text-base font-winky'>Normal text - regular text size</p>
        <p className='text-xs'>Small text</p>
        <p className='text-sm'>Slightly larger, but small text</p>
        <p className='italic font-light underline decoration-blue-400 decoration-wavy decoration-4 underline-offset-6 leading-loose'>New random text</p>
        <p className='capitalize'>new line</p>
      </div>
    </>
  )
}

export default App
