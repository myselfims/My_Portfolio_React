import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const About = ({handleJump}) => {
  const [text] = useTypewriter({
    words : ['Fullstack Developer', 'Frontend Developer','Backend Developer'],
    loop : {}
  })
  



  return (
    <div id="about" className='w-full animate-fadeIn flex py-28 max-sm:flex-col-reverse max-sm:items-center justify-between'>
      <div className="max-w-3xl h-full">
        <h1 className='text-8xl font-bold my-3 text-white max-sm:text-4xl max-sm:text-center'>Shaikh Imran</h1>
        <h3 className='text-4xl my-3 max-sm:text-xl'>I am <span className='text-cyan-700 bg-white px-1'>{text}<Cursor/></span></h3>
        <p className='text-3xl leading-10'>Highly skilled and motivated Full Stack Developer with expertise
in Python, Django, Django Rest Framework, HTML, CSS,
JavaScript, React, MySQL, , Bootstrap, REST API, and JSON.
Demonstrated proficiency in developing and deploying web
applications. Proven ability to work independently and
collaboratively in fast-paced environments. Committed to
delivering high-quality, scalable solutions</p>

        <button onClick={()=>handleJump('contact')} className='p-1 my-4 rounded bg-gradient-to-r from-cyan-700 to-cyan-400 font-bold text-4xl text-white hover:bg-white cursor-pointer  transition-all shadow-lg  hover:shadow-cyan-400'>Hire Me</button>
      </div>
      <div className='rounded-full justify-center overflow-hidden w-72 h-72 flex'>
        <img className='hover:scale-110 min-w-fit cursor-pointer transition-all' src="https://drive.google.com/uc?id=1CbDqds_rCZFmKjzMnnpKGOLo7ISkDoAb" alt="" />
      </div>
    </div>
  )
}

export default About
