import React from 'react'
import ViewProject from './ViewProject'
import projects from '../../data/projects.json'

const Project = () => {
  return (
    <div id='projects' className='my-72'>
      <div className='my-10'>
      <h1 className='font-bold text-4xl'>Projects</h1>
      </div>
      <div>
        {projects?.map((project)=>{
          return <ViewProject key={project.name} project={project}/>
        })}
      </div>
    </div>
  )
}

export default Project
