import React from 'react'

const Project = ({ title, image, description, link, lang, workInProgress }) => {
  return (
    <div className=''>
      <img src={`/${image}`} alt="" className='w-[25rem] object-cover rounded-md' />
      <h1 className='text-2xl mt-4 font-pop font-bold text-[#E4E4E4]'>{title}</h1>
      <p className='bg-gradient-to-r text-sm opacity-90 from-[#9BE15D] to-[#00E3AE] text-transparent bg-clip-text'>
        {lang.map((language, index) => (
          <React.Fragment key={index}>
            {language}
            {index < lang.length - 1 && <span className='text-[#496331]'> / </span>}
          </React.Fragment>
        ))}
      </p>
      <p className='w-[25rem] text-[#d4d4d4] mt-2'>{description}</p>
      <div className='flex items-center gap-5'>
        <a href={link} target='_blank' className='mt-2 flex items-center gap-[0.55rem] hover:cursor-pointer'>
          <i class="ri-link text-base bg-gradient-to-b from-[#72EDF2] to-[#5151E5] text-transparent bg-clip-text"></i>
          <h1 className='text-sm bg-gradient-to-b from-[#72EDF2] to-[#5151E5] text-transparent bg-clip-text'>Live Preview</h1>
        </a>
        {workInProgress && <h1 className='text-[0.72rem] font-semibold mt-2 px-[0.65rem] py-[0.17rem] bg-[#ff9900d9] rounded-full text-[#000000]'>Work in Progress</h1>}
      </div>
    </div>
  )
}

export default Project
