import React from 'react'
import SkillCard from './SkillCard'
import {MdOpenInNew} from 'react-icons/md'

const ViewProject = ({reverse,project}) => {
  return (
    <div className={`flex flex-col w-full items-center justify-center mb-40 ${reverse?'flex-row-reverse':null}`}>
      <div className='w-8/12 max-sm:w-full'>
        <div className="overflow-hidden rounded-xl flex items-center">
          <img className='hover:scale-110 rounded-md w-full  transition-all cursor-pointer' src={project.cover} alt="Project Picture" />
        </div>
        <div className="my-5">
          <h1 className='font-bold text-4xl '>{project.name}</h1>
          <div className='flex my-5 flex-col '>
            <div>
              <p className='text-2xl'>Tech Stack</p>
            </div>
            <div className='flex flex-wrap '>
              {project.skills.map((skill)=>{
                return <SkillCard key={skill.skill} skill={skill}/>
              })}

            </div>
          </div>
          <div>
            <p className='text-2xl leading-loose'>{project.desc}</p>

            <a target='_blank' href={project.link}>
              <button className=' flex items-center p-1 my-4 rounded bg-gradient-to-r from-cyan-700 to-cyan-400 font-bold text-2xl text-white hover:bg-white cursor-pointer  transition-all shadow-lg  hover:shadow-cyan-400'>View Site <MdOpenInNew className='mx-3'/> </button>

            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ViewProject
