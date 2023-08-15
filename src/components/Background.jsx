import React, { useState } from 'react'

const Background = () => {
    const [scroll, setScroll] = useState(false)

  return (
    <div className='fixed z-0 top-0  blur-lg w-screen flex justify-center items-center h-screen'>
        <img className='w-full h-full' src="https://img.freepik.com/free-photo/abstract-techno-background-with-connecting-lines_1048-5570.jpg" alt="" />
      {/* <span className='w-40 h-40 bg-cyan-500 rounded-full blur-xl animate-bounce'>ss</span> */}

    </div>
  )
}

export default Background
