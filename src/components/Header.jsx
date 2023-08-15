import React, { useState } from 'react'
import {BsInstagram,BsGithub,BsLinkedin} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'

const Header = ({handleJump}) => {

    const [mobileNav, setMobileNav] = useState('hidden')

    const handleClick = (target) => {
        setMobileNav('hidden')
        handleJump(target)
    }
    


  return (
    <header className='w-screen max-sm:py-4 fixed bg-black z-10'>
        <nav className='w-full px-16 max-sm:px-2 flex justify-between items-center py-2'>
            <div className="logo z-10 max-sm:absolute max-sm:top-1 flex justify-center items-center">
                <h1 className='text-3xl font-handWriting min-w-max font-bold bg-gradient-to-r from-primary to-danger bg-clip-text text-transparen'>Shaikh Imran</h1>
            </div>
            <div className={`w-full max-sm:py-10 max-sm:${mobileNav} justify-between max-sm:flex-col`}>
                <div className="pl-10">
                    <ul className='flex items-center max-sm:flex-col'>
                        <li onClick={()=>handleClick('about')} className='font-bold text-xl mx-5 cursor-pointer hover:text-sky-400 transition-all '>About</li>
                        <li onClick={()=>handleClick('projects')} className='font-bold text-xl mx-5 cursor-pointer hover:text-sky-400 transition-all '>Projects</li>
                        <li onClick={()=>handleClick('skills')} className='font-bold text-xl mx-5 cursor-pointer hover:text-sky-400 transition-all '>Skills</li>
                        <li onClick={()=>handleClick('contact')} className='font-bold text-xl mx-5 cursor-pointer hover:text-sky-400 transition-all '>Contact</li>
                    </ul>
                </div>
                <div className="flex justify-center max-sm:my-5">
                    <a target='_blank' href="https://github.com/myselfims">
                        <BsGithub className='w-8 h-8 cursor-pointer hover:text-sky-400 transition-all mx-2'/>
                    </a>
                    <a target='_blank' href="https://www.linkedin.com/in/shaikh-imran-855b69221/">
                        <BsLinkedin className='w-8 h-8 cursor-pointer hover:text-sky-400 transition-all mx-2'/>
                    </a>
                </div>
            </div>
            <div className='max-sm:inline absolute top-2 right-2 hidden'>
                <GiHamburgerMenu onClick={()=>{mobileNav==='flex'?setMobileNav('hidden'):setMobileNav('flex')}} className={`w-9 cursor-pointer ${mobileNav==='flex'?'text-cyan-500':null} h-9`}/>
            </div>
            
        </nav>
    </header>
  )
}

export default Header
