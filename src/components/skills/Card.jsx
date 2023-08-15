import React from 'react'

const Card = ({skill}) => {
  return (
    <div className='flex h-28 w-40 max-sm:h-20 max-sm:w-20   flex-col  transition-all
    items-center justify-center m-2  p-3 rounded shadow-lg cursor-pointer hover:shadow-cyan-700'>
        <div className="overflow-hidden">
            <img className='w-12 max-sm:w-6' src={skill.icon} alt="" />   
        </div>
        <hr />
        <div className="">
            <h1 className='font-bold text-xl max-sm:text-sm'>{skill.skill}</h1>
        </div>


    </div>
  )
}

export default Card
