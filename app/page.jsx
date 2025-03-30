'use client'
import React from 'react'
import { useEffect, useState, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import Terminal from './components/Terminal'

const Page = () => {
  const lenisRef = useRef()

  useEffect(() => {
    // Initialize smooth scroll
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    // Connect lenis to the animation frame
    function raf(time) {
      lenisRef.current?.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)

    return () => {
      lenisRef.current?.destroy()
    }
  }, [])

  return (
    <>
      {/* Custom animation for smooth pulse */}
      <style jsx global>{`
        @keyframes smoothPulse {
          0% { opacity: 0.4; transform: scale(0.95); }
          50% { opacity: 1; transform: scale(1.05); }
          100% { opacity: 0.4; transform: scale(0.95); }
        }
        
        .smooth-pulse {
          animation: smoothPulse 3s ease-in-out infinite;
        }
      `}</style>
      
      <div className='w-full min-h-screen pb-96 bg-[#0c0c0c] relative overflow-hidden'>
        <div 
          className='absolute inset-0 pointer-events-none z-0'
          style={{
            opacity: '0.04',
            background: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'1.4\' numOctaves=\'2\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%\' height=\'100%\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          }}
        />
        
        <div className="absolute top-[5vh] left-[-5%] w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] bg-[#ee00ff12] rounded-full blur-[100px] z-0"></div>
        <div className="absolute bottom-[28vh] right-[-15%] w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] bg-[#8000ff12] rounded-full blur-[120px] z-0"></div>
        {/* <div className="absolute top-[30%] right-[5%] w-[30vw] h-[30vw] max-w-[300px] max-h-[300px] bg-green-500/5 rounded-full blur-[80px] z-0 hidden md:block"></div> */}

        <div className='px-6 py-7 md:px-12 md:py-8 lg:px-24 lg:py-8 max-w-[100rem] mx-auto flex flex-col relative z-10'>
          {/* Navigation */}
          <header className='flex justify-between items-center'>
            <div className='text-[#ededed] text-xl font-serif tracking-wider'>SIDDHARTH MEENA</div>
            <nav className='flex items-center space-x-4'>
              <div className='hidden md:flex items-center mr-4'>
                <span className='w-2 h-2 bg-green-400 rounded-full smooth-pulse mr-2'></span>
                <span className='text-green-400 text-xs uppercase'>Available for work</span>
              </div>
              <button className='px-4 py-2 text-white border border-white/20 rounded-full text-sm hover:bg-white/10 transition-all'>
                BLOGS
              </button>
            </nav>
          </header>

          {/* Hero Content */}
          <div className='flex flex-col md:flex-row flex-1 max-h-[100rem] md:pt-0'>
            {/* Left section - stays at bottom on mobile, left on desktop */}
            <div className='md:w-1/3 flex flex-col justify-between md:justify-end pb-10 md:pb-10 mt-10 md:mt-0 relative order-last md:order-first'>
              {/* Mobile-specific decoration that appears on right */}
              <div className="block md:hidden absolute top-0 right-[-10%] w-[30vw] h-[30vw] bg-purple-500/5 rounded-full blur-[50px] z-0"></div>
              
              <div className='hidden md:block'>
                <div className='relative'>
                  {/* Terminal component */}
                  <Terminal />
                  
                  {/* Stats section */}
                  <div className='grid grid-cols-2 gap-4 mt-3 mb-8 max-w-[200px]'>
                    <div className='border-l border-white/10 pl-3 py-1'>
                      <div className='text-white/70 text-2xl font-light'>3+</div>
                      <div className='text-white/40 text-xs uppercase'>Years Exp.</div>
                    </div>
                    <div className='border-l border-white/10 pl-3 py-1'>
                      <div className='text-white/70 text-2xl font-light'>50+</div>
                      <div className='text-white/40 text-xs uppercase'>Projects</div>
                    </div>
                  </div>
                  
                  {/* Skill tags */}
                  <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-5 max-w-[330px] w-full'>
                    <div className='contents'>
                      {['Next.js', 'React', 'Node.js', 'UI/UX', 'Tailwind', 'C/C++', 'Python'].map((item, index) => (
                        <div key={index} className='h-[28px] flex items-center justify-center'>
                          <span className='px-3 py-1 text-center text-xs border border-white/10 text-white/60 hover:text-white/90 hover:border-white/30 transition-all truncate w-full inline-block'>
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className='mb-4 md:mb-5'>
                {/* <p className='text-white/70 text-sm leading-relaxed text-right md:text-left'>
                  FULLSTACK DEVELOPER <br />
                  UI/UX ENTHUSIAST <br />
                </p> */}
                <button className='font-inter bg-[#ffffff08] font-medium text-white/70 text-sm border border-white/10 px-4 py-2 rounded-full hover:bg-[#ffffff12] transition-all ease-out duration-200 hover:scale-[1.025]'>Download Resume</button>
              </div>
              
              <div className='flex md:justify-start justify-end space-x-5'>
                <a href="#" className='text-white/50 hover:text-white transition-colors'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="#" className='text-white/50 hover:text-white transition-colors'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                  </svg>
                </a>
                <a href="#" className='text-white/50 hover:text-white transition-colors'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Right section on desktop, left on mobile */}
            <div className='md:w-2/3 flex items-center mt-24 md:mt-0 justify-center md:justify-end relative'>
              <div className="block md:hidden absolute top-[15%] left-[-10%] w-[30vw] h-[30vw] bg-blue-500/10 rounded-full blur-[50px] z-0"></div>
              
              <div className='text-left md:text-right md:text-[3.35rem] sm:text-[2.8rem] text-[2.5rem] text-[#f4f4f4]'>
                
                <h1 className='mb-2 leading-[1.4] font-prata'>Crafting Digital Experiences <br />With Code and Design</h1>
                <p className='text-white/70 sm:w-[85%] md:w-[80%] md:ml-auto w-[95%] text-sm leading-relaxed'>I'm a full-stack developer passionate about coding, problem-solving, and turning ideas into reality. Explore my projects, and if you're looking to collaborate or hire me, feel free to reach out!</p>

                <button className='mt-4 px-6 py-3 border-2 border-[#bcbcbc] text-white bg-[#06449114] font-medium rounded-xl hover:bg-[#0645912e] hover:scale-[1.03] transition-all ease-in-out duration-300 text-sm tracking-wider'>
                  CONTACT ME
                </button>
              </div>
            </div>
          </div>

          <div 
            className='absolute bottom-3 left-6 md:left-auto md:right-10 flex items-center space-x-2 group cursor-pointer'
            onClick={() => lenisRef.current?.scrollTo('#about-section')}
          >
            <span className='text-xs tracking-widest transition-colors duration-300 text-white/90'>SCROLL DOWN</span>
            <div className='relative w-5 h-5 flex items-center justify-center'>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-3 w-3 text-white/60 absolute animate-bounce transition-colors duration-300 group-hover:text-white/90" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        
      </div>
    </>
  )
}

export default Page
