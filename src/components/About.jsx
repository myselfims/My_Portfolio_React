import React from 'react'

const About = ({handleJump}) => {
  return (
    <div id="about" className='w-full animate-fadeIn flex py-40 max-sm:flex-col-reverse max-sm:items-center justify-between'>
      <div className="max-w-3xl h-full">
        <h1 className='text-6xl font-bold my-3 text-white max-sm:text-4xl max-sm:text-center'>Shaikh Imran</h1>
        <h3 className='text-2xl my-3 max-sm:text-xl'>I am <strong className='text-cyan-700 bg-white px-1'>Fullstack Developer</strong></h3>
        <p className='text-xl leading-loose'>Highly skilled and motivated Full Stack Developer with expertise
in Python, Django, Django Rest Framework, HTML, CSS,
JavaScript, React, MySQL, , Bootstrap, REST API, and JSON.
Demonstrated proficiency in developing and deploying web
applications. Proven ability to work independently and
collaboratively in fast-paced environments. Committed to
delivering high-quality, scalable solutions</p>

        <button onClick={()=>handleJump('contact')} className='p-1 my-4 rounded bg-gradient-to-r from-cyan-700 to-cyan-400 font-bold text-2xl text-white hover:bg-white cursor-pointer  transition-all shadow-lg  hover:shadow-cyan-400'>Hire Me</button>
      </div>
      <div className='rounded-full justify-center overflow-hidden w-72 h-72 flex'>
        <img className='hover:scale-110 min-w-fit cursor-pointer transition-all' src="https://drive.google.com/uc?id=1CFaafjD4w-zPGyEVr4RgNEp6cnt3usG9" alt="" />
      </div>
    </div>
  )
}

export default About
