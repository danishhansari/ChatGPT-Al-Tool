
import ChatBody from './components/ChatBody'
import ChatInput from './components/ChatInput'

function App() {
  return (
    <>
    <div className="bg-[#1A232E] h-screen py-6 relative md:px-8 px-4 text-white overflow-hidden flex flex-col justify-between align-middle">
    
    <div className='gradient-01 z-0 absolute'></div>
    <div className='gradient-02 z-0 absolute'></div>

    <div className='uppercase font-bold text-2xl text-center z-10 mb-3'>ChatGPT 2.0</div>

    {/* Body */}
    <div className='h-[90%] overflow-auto relative w-full max-w-4xl min-w-[20rem] py-8 px-4 self-center'>
      <ChatBody />
    </div>

    {/* // input */}
    <div className='w-full max-w-4xl min-w-[20rem] self-center'>
      <ChatInput />
    </div>
    </div>
    </>
  )
}

export default App
