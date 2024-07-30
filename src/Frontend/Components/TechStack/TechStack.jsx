import React from 'react'

const TechStack = ({ url, name }) => {
  return (
    <div className='flex items-center px-[0.6rem] py-[0.1rem] hover:bg-[#242424] bg-[#161616] rounded-md'>
      <img src={`/${url}`} alt="" className='unselectable object-contain mr-[0.45rem]' />
      <p className='unselectable'>{name}</p>
    </div>
  )
}

export default TechStack
