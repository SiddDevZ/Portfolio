'use client'
import React, { useEffect } from 'react'
import './NavBar.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const NavBar = ({ check }) => {
  const router = useRouter()

  const handleContactClick = () => {
    if (typeof window !== 'undefined') {
      if (window.location.pathname !== '/') {
        router.push('/')
        setTimeout(() => {
          const contact = document.getElementById("contact");
          if (contact) {
            contact.scrollIntoView({ behavior: "smooth" });
          }
        }, 100)
      } else {
        const contact = document.getElementById("contact");
        if (contact) {
          contact.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <div className='flex py-4 nav px-7 sm:px-6 lg:px-[8rem] justify-between items-center animate-in'>
      
      <Link href="/" className='font-mono text-lg sm:text-xl hover:scale-105 transition-all text-btn cursor-pointer'>&lt;/SiddZ&gt;</Link>
      <div className='flex gap-6 sm:gap-6 lg:gap-[3.15rem] items-center'>
        { check == 1? (
          <Link href="/blog" className='font-inter text-[#FFFFFF] text-lg sm:text-lg xl:text-xl tracking-wider cursor-pointer hover-underline-animation'>Blog</Link>
        ) : (
          <Link href="/" className='font-inter text-[#ffffff] text-lg sm:text-lg xl:text-xl cursor-pointer hover-underline-animation'>About</Link>
        )}
        <button onClick={handleContactClick} className='font-pop text-lg sm:text-lg xl:text-xl px-3 xss:px-4 xss:py-[0.3rem] sm:px-4 lg:px-[1.3rem] py-1 sm:py-2 lg:py-[0.4rem] bg-[#eeeeee] text-black rounded-full overflow-hidden hover:bg-[#f1f1f1] transition-all hover:scale-105 ease-in-out text-btn'>Contact</button>
      </div>
    </div>
  )
}

export default NavBar