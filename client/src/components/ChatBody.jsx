import React from 'react'

const ChatBody = () => {
    const aiStyle = "bg-white bg-opacity-40 backdrop-blur-lg mr-auto dropshadow-md";
  return (
    <div className='flex flex-col gap-4 '>
        <div className='border-[#999999] break-words border-2 rounded-xl self-end px-3 py-3 max-w-[80%]'>
            <pre className='whitespace-pre-wrap'>
                <span>Hi Chat GPT, Can you help me?</span>
            </pre>
        </div>
        <div className={`border-[#999999] break-words border-2 rounded-xl self-end px-3 py-3 max-w-[80%]'>
            <pre className='whitespaces-pre-wrap ${aiStyle}'`}>
            <pre> 
                <span>Yeah, I can help you with anything</span>
            </pre>
        </div>
    </div>
  )
}

export default ChatBody