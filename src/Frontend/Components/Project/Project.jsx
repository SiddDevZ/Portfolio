import React from 'react'

const Project = ({ title, image, description, link, lang }) => {
  return (
    <div>
      <img src="/bantr.webp" alt="" className='w-[25rem] object-cover rounded-md' />
      <h1 className='text-2xl mt-6 font-pop font-bold text-[#E4E4E4]'>Bantr - Chatting App</h1>
      <p className='bg-gradient-to-r from-[#FCCF31] to-[#F55555] text-transparent bg-clip-text'>
        {lang.map((language, index) => (
          <React.Fragment key={index}>
            {language}
            {index < lang.length - 1 && <span className='text-[#496331]'> / </span>}
          </React.Fragment>
        ))}
      </p>
    </div>
  )
}

export default Project
