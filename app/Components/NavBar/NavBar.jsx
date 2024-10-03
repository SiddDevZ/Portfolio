'use client'
import React from 'react'
import './NavBar.css'

const NavBar = () => {
  
  const handleContactClick = () => {
    const contact = document.getElementById("contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className='lg:flex xss:hidden py-4 nav px-7 sm:px-6 lg:px-[8rem] justify-between items-center'>
      
      <h1 className='font-mono text-lg sm:text-xl cursor-default'>&lt;/SiddZ&gt;</h1>
      <div className='flex gap-4 sm:gap-6 lg:gap-[3.15rem] items-center'>
        {/* <h1 className='font-inter text-[#ffffff] text-base sm:text-lg xl:text-xl cursor-pointer hover-underline-animation'>About</h1> */}
        {/* <h1 className='font-inter text-[#FFFFFF] text-base sm:text-lg xl:text-xl cursor-pointer hover-underline-animation'>Projects</h1> */}
        <button onClick={handleContactClick} className='font-pop text-base sm:text-lg xl:text-xl px-3 sm:px-4 lg:px-[1.3rem] py-1 sm:py-2 lg:py-[0.4rem] bg-[#eeeeee] text-black rounded-full overflow-hidden hover:bg-[#f1f1f1] transition-all hover:scale-105 ease-in-out text-btn'>Contact</button>
      </div>
    </div>
  )
}

export default NavBar