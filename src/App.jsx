import { useEffect, useRef } from "react"
import About from "./components/About"
import Background from "./components/Background"
import Contact from "./components/Contact"
import Header from "./components/Header"
import Project from "./components/projects/Projects"
import Skills from "./components/skills/Skills"
import Aos from "aos";
import 'aos/dist/aos.css'


function App() {
  const about = useRef(null)
  const skills = useRef(null)
  const projects = useRef(null)
  const contact = useRef(null)

  const handleJump = (target) => {
    if (target==='about'){
      about.current?.scrollIntoView({ behavior: 'smooth' });

    }else if(target==='skills'){
      skills.current?.scrollIntoView({ behavior: 'smooth' });

    }
    else if(target==='projects'){
      projects.current?.scrollIntoView({ behavior: 'smooth' });
      
    }else{
      
      contact.current?.scrollIntoView({ behavior: 'smooth' });
    }
    
  };

  useEffect(()=>{
    Aos.init()
  },[])

  return (
    <div>
    <Background/>
    <Header handleJump={handleJump}/>
    <div className="px-20 max-sm:px-4 backdrop-blur-md ">
      <div ref={about} data-aos-offset="300" data-aos='fade-right'>
        <About handleJump={handleJump}/>  
      </div>
      <div ref={skills} data-aos-offset="300" data-aos='fade-left'>
        <Skills/>
        
      </div>
      <div ref={projects} data-aos-offset="300" data-aos='fade-right'>
        <Project/>

      </div>
      <div ref={contact} data-aos-offset="300" data-aos='fade-left'>
        <Contact/>
      </div>
    </div>
    </div>
  )
}

export default App
