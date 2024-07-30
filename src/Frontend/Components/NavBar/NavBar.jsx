import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='flex py-[1.3rem] nav px-[10rem] justify-between items-center'>
      <h1 className='font-robot text-xl'>&lt;/SiddZ&gt;</h1>
      <div className='flex gap-[3.15rem] items-center'>
        <h1 className='font-inter text-[#ffffff] text-xl cursor-pointer hover-underline-animation'>About</h1>
        <h1 className='font-inter text-[#FFFFFF] text-xl cursor-pointer hover-underline-animation'>Projects</h1>
        <button className='font-pop text-xl px-[1.3rem] py-[0.4rem] bg-[#ffffff] text-black rounded-full overflow-hidden hover:bg-[#f1f1f1] transition-all hover:scale-105 ease-in-out text-btn'>Contact</button>
      </div>
    </div>
  )
}

export default NavBar
