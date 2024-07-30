import React from 'react';
import './Landing.css';
import ParticlesComponent from '../../Components/Particles/Particles';
import NavBar from '../../Components/NavBar/NavBar'
import TechStack from '../../Components/TechStack/TechStack'
import 'remixicon/fonts/remixicon.css'
import Project from '../../Components/Project/Project';

const Landing = () => {
  return (
    <>
      <div className="-z-10 full-screen">
        <ParticlesComponent />
      </div>
      <div className="main">
        <NavBar />
        <div className='pt-10 mx-[22rem] main-area mb-[100vh]'>
          <div className='sec-1'>
            <h1 className='text-[2.4rem] font-pop font-extrabold'>Hey, I'm <span className='bg-gradient-to-r from-[#FCCF31] to-[#F55555] text-transparent bg-clip-text'>Siddharth Jorwal</span></h1>
            <h2 className='font-inter text-2xl font-medium text-[#dcdcdc]'>Full-Stack Web Developer, Designer, and Software Tinkerer</h2>
          </div>
          <div className='sec-2'>
            <p className='text-[#BBBBBB] mt-8 font-pop font-medium text-lg tracking-[0.015em]'>I’m Siddharth! <span className='text-[#F2F2F2]'>I have 3+ years of experience in web dev</span>, I spend most of my time in <span className='text-[#F2F2F2]'>coding and business</span>, My passion lies in dreaming ideas and bringing them to life. If this combination interests you, <span className='text-[#F2F2F2]'>feel free to connect!</span></p>
            <p className='text-[#BBBBBB] mt-5 font-pop font-medium text-lg tracking-wide'>Outside of programming, I enjoy doing cinematography and sports.</p>
            <div className='flex gap-2 mt-[0.15rem]'>
              <p className='text-[#F2F2F2] font-pop font-medium text-lg'>My main tech stacks are</p>
              <div className='flex gap-[0.35rem]'>
                <TechStack url={"react.webp"} name={"React"} />
                <TechStack url={"nodejs.webp"} name={"NodeJS"} />
                <TechStack url={"mongo.webp"} name={"MongoDB"} />
                <TechStack url={"git.webp"} name={"Git"} />
                <TechStack url={"tailwind.webp"} name={"Tailwind"} />
                <TechStack url={"python.webp"} name={"Python"} />
              </div>
            </div>
            <p className='mt-7 tracking-wide text-[#F2F2F2] font-pop font-light text-lg'>If you want me to redesign your website, or make you a new one, feel free to contact me, and we can discuss about it together. </p>
          </div>
          <div className='sec-3'>
            <p className='text-[#BBBBBB] mt-5 font-pop font-medium text-lg tracking-wide'>Find me on</p>
            <div className='socials flex items-center gap-4'>
              <div className='flex items-center gap-[0.35rem] group hover:cursor-pointer' onClick={() => window.open('https://github.com/SiddDevZ', '_blank', 'noopener,noreferrer')}>
                <i class="ri-github-fill text-2xl text-[#F2F2F2]"></i>
                <p className=' text-[#F2F2F2] group-hover:underline'>GitHub</p>
              </div>
              <div className='flex items-center gap-[0.35rem] group hover:cursor-pointer' onClick={() => window.open('https://x.com/epicsidd', '_blank', 'noopener,noreferrer')}>
                <i class="ri-twitter-x-line text-[1.31rem] text-[#F2F2F2]"></i>
                <p className=' text-[#F2F2F2] group-hover:underline'>Twitter</p>
              </div>
              <div className='flex items-center gap-[0.35rem] group hover:cursor-pointer' onClick={() => window.open('https://discordapp.com/users/273352781442842624', '_blank', 'noopener,noreferrer')}>
                <i class="ri-discord-fill text-2xl text-[#F2F2F2]"></i>
                <p className=' text-[#F2F2F2] group-hover:underline'>Discord</p>
              </div>
              <div className='flex items-center gap-[0.35rem] group hover:cursor-pointer' onClick={() => window.open('https://www.instagram.com/siddharth_jorwal/', '_blank', 'noopener,noreferrer')}>
                <i class="ri-instagram-line text-[1.41rem] text-[#F2F2F2]"></i>
                <p className=' text-[#F2F2F2] group-hover:underline'>Instagram</p>
              </div>
            </div>
          </div>

          <div className='sec-4 mt-6'>
            <div className="wavy-heading inline-flex items-center">
              <h1 className='text-[2.4rem] font-pop font-extrabold'>Recent Projects</h1>
              <div className="wavy-line"></div>
            </div>

            <div className='projects pt-11'>
              <Project title={"Bantr - Chatting App"} image={``} lang={["React", "Node.js", "Express", "SocketIO", "MongoDB"]}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;