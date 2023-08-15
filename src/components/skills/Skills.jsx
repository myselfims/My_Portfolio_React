import React from 'react'
import Card from './Card'
import skills from '../../data/skills.json'

const Skills = () => {

  return (
      <div id='skills' className="flex  flex-col">
        <h1 className='font-bold text-4xl'>Skills</h1>

        <div className='w-full h-40 transition-all flex justify-center items-center p-4 flex-wrap'>
          {skills.map((skill)=>{
            return <Card key={skill} skill={skill}/>
            
          })}
        </div>
    </div>
  )
}

export default Skills
