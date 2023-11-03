import React from 'react'

const SkillCard = ({skill}) => {
  return (
    <div className="flex  my-2 cursor-pointer shadow-md hover:shadow-cyan-400 items-center  w-fit mr-3 px-3 py-1 rounded-xl   ">
            <img className='rounded-full mr-3 w-12' src={skill.icon} alt="" />
            <h1>{skill.skill}</h1>
          </div>
  )
}

export default SkillCard
