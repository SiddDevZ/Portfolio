"use client";
import React from "react";
import { useEffect, useState, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import Terminal from "./components/Terminal";
import ContactForm from "./components/ContactForm";
import { Toaster, toast } from "react-hot-toast";
import Testimonials from "./components/Testimonials";
import Footer from './components/Footer';

const Page = () => {
  const lenisRef = useRef();

  const notifyUnavailable = () => {
    toast.error("This page is under construction. Stay tuned!");
  };

  const downloadResume = () => {
    window.open("/Siddharth_Resume.pdf", "_blank");
  };

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
      wheelMultiplier: 1,
      normalizeWheel: true,
      infinite: false,
    });

    const inputElements = document.querySelectorAll('input, textarea');
    inputElements.forEach(input => {
      input.addEventListener('focus', () => {
        if (lenisRef.current) lenisRef.current.stop();
      });
      input.addEventListener('blur', () => {
        if (lenisRef.current) lenisRef.current.start();
      });
    });

    function raf(time) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  return (
    <>
      <Toaster
        position="bottom-right"
        toastOptions={{
          className: '',
          style: {
            background: 'rgba(17, 17, 17, 0.9)',
            color: '#fff',
            borderRadius: '12px',
            padding: '16px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
          },
          success: {
            style: {
              background: 'rgba(17, 17, 17, 0.9)',
              border: '1px solid rgba(0, 238, 255, 0.3)',
              color: '#fff',
            },
            iconTheme: {
              primary: 'rgba(0, 238, 255, 0.9)',
              secondary: '#111',
            },
          },
          error: {
            style: {
              background: 'rgba(17, 17, 17, 0.9)',
              border: '1px solid rgba(238, 0, 255, 0.3)',
              color: '#fff',
            },
            iconTheme: {
              primary: 'rgba(238, 0, 255, 0.9)',
              secondary: '#111',
            },
          },
        }}
      />
      {/* Custom animation for smooth pulse */}
      <style jsx global>{`
        @keyframes smoothPulse {
          0% {
            opacity: 0.4;
            transform: scale(0.95);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          100% {
            opacity: 0.4;
            transform: scale(0.95);
          }
        }

        .smooth-pulse {
          animation: smoothPulse 3s ease-in-out infinite;
        }
      `}</style>

      <div className="w-full dark min-h-screen pb-10 bg-[#0c0c0c] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            opacity: "0.04",
            background:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.4' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="absolute top-[5vh] left-[-5%] w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] bg-[#ee00ff12] rounded-full blur-[100px] z-0"></div>
        <div className="absolute top-[50vh] right-[-15%] w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] bg-[#8000ff0e] rounded-full blur-[120px] z-0"></div>
        {/* <div className="absolute top-[30%] right-[5%] w-[30vw] h-[30vw] max-w-[300px] max-h-[300px] bg-green-500/5 rounded-full blur-[80px] z-0 hidden md:block"></div> */}

        <div className="px-6 unselectable py-7 md:px-12 md:py-8 lg:px-24 lg:py-8 max-w-[100rem] mx-auto flex flex-col relative z-10">
          {/* Navigation */}
          <header className="flex justify-between items-center">
            <div className="text-[#ededed] text-xl font-serif tracking-wider">
              SIDDHARTH MEENA
            </div>
            <nav className="flex items-center space-x-4">
              <div className="hidden md:flex items-center mr-4">
                <span className="w-2 h-2 bg-green-400 rounded-full smooth-pulse mr-2"></span>
                <span className="text-green-400 text-xs uppercase">
                  Available for work
                </span>
              </div>
              <button 
                onClick={notifyUnavailable}
                className="px-4 py-2 text-white border border-white/20 rounded-full text-sm hover:bg-white/10 transition-all">
                BLOGS
              </button>
            </nav>
          </header>

          {/* Hero Content */}
          <div className="flex flex-col md:flex-row flex-1 max-h-[100rem] md:pt-0">
            {/* Left section - stays at bottom on mobile, left on desktop */}
            <div className="md:w-1/3 flex flex-col justify-between md:justify-end pb-10 md:pb-10 mt-10 md:mt-0 relative order-last md:order-first">
              {/* Mobile-specific decoration that appears on right */}
              <div className="block md:hidden absolute top-0 right-[-10%] w-[30vw] h-[30vw] bg-purple-500/5 rounded-full blur-[50px] z-0"></div>

              <div className="hidden md:block">
                <div className="relative">
                  {/* Terminal component */}
                  <Terminal />

                  {/* Stats section */}
                  <div className="grid grid-cols-2 gap-4 mt-3 mb-8 max-w-[200px]">
                    <div className="border-l border-white/10 pl-3 py-1">
                      <div className="text-white/70 text-2xl font-light">
                        3+
                      </div>
                      <div className="text-white/40 text-xs uppercase">
                        Years Exp.
                      </div>
                    </div>
                    <div className="border-l border-white/10 pl-3 py-1">
                      <div className="text-white/70 text-2xl font-light">
                        30+
                      </div>
                      <div className="text-white/40 text-xs uppercase">
                        Projects
                      </div>
                    </div>
                  </div>

                  {/* Skill tags */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-5 max-w-[330px] w-full">
                    <div className="contents">
                      {[
                        "Next.js",
                        "React",
                        "Node.js",
                        "UI/UX",
                        "Tailwind",
                        "C/C++",
                        "Python",
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="h-[28px] flex items-center justify-center"
                        >
                          <span className="px-3 py-1 text-center text-xs border border-white/10 text-white/60 hover:text-white/90 hover:border-white/30 transition-all truncate w-full inline-block">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile resume button */}
              <div className="md:hidden flex justify-end mb-3">
                <button 
                  onClick={downloadResume}
                  className="font-inter mb-2 bg-[#ffffff08] font-medium text-white/70 text-xs border border-white/10 px-3 py-1.5 rounded-full hover:bg-[#ffffff12] transition-all ease-out duration-200 hover:scale-[1.025]">
                  Download Resume
                </button>
              </div>

              <div className="mb-4 md:mb-5 hidden md:block">
                <button 
                  onClick={downloadResume}
                  className="font-inter bg-[#ffffff08] font-medium text-white/70 text-sm border border-white/10 px-4 py-2 rounded-full hover:bg-[#ffffff12] transition-all ease-out duration-200 hover:scale-[1.025]">
                  Download Resume
                </button>
              </div>

              <div className="flex md:justify-start justify-end space-x-5">
                <a
                  href="https://github.com/SiddDevZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://x.com/epicsidd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="https://discordapp.com/users/273352781442842624"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white transition-colors"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Right section on desktop, left on mobile */}
            <div className="md:w-2/3 flex items-center mt-20 md:mt-0 justify-center md:justify-end relative">
              <div className="block md:hidden absolute top-[15%] left-[-10%] w-[30vw] h-[30vw] bg-blue-500/10 rounded-full blur-[50px] z-0"></div>

              <div className="text-left md:text-right md:text-[3.35rem] sm:text-[2.8rem] text-[2.5rem] text-[#f4f4f4]">
                {/* Available for hire indicator - mobile only */}
                <div className="flex md:hidden items-center mb-4">
                  <span className="w-2 h-2 bg-green-400 rounded-full smooth-pulse mr-2"></span>
                  <span className="text-[#3cb86a] text-xs uppercase">
                    Available for work
                  </span>
                </div>
                <h1 className="mb-2 leading-[1.4] font-prata">
                  Crafting Digital Experiences <br />
                  With Code and Design
                </h1>
                <p className="text-white/70 sm:w-[85%] md:w-[80%] md:ml-auto w-[95%] text-sm leading-relaxed">
                  I'm a full-stack developer passionate about coding,
                  problem-solving, and turning ideas into reality. Explore my
                  projects, and if you're looking to collaborate or hire me,
                  feel free to reach out!
                </p>

                <button 
                  onClick={() => lenisRef.current?.scrollTo("#contact-section")}
                  className="mt-4 sm:px-6 sm:py-3 px-4 py-2 border-2 border-[#bcbcbc] text-white bg-[#06449114] font-medium rounded-xl hover:bg-[#8306912e] hover:scale-[1.03] transition-all ease-in-out duration-300 text-sm tracking-wider">
                  CONTACT ME
                </button>
              </div>
            </div>
          </div>

          <div
            className="absolute bottom-3 left-6 md:left-auto md:right-10 flex items-center space-x-2 group"
            // onClick={() => lenisRef.current?.scrollTo("#about-section")}
          >
            <span className="text-xs tracking-widest transition-colors duration-300 text-white/90">
              SCROLL DOWN
            </span>
            <div className="relative w-5 h-5 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 text-white/60 absolute animate-bounce transition-colors duration-300 group-hover:text-white/90"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div
          id="projects-section"
          className="px-4 unselectable sm:px-6 py-16 sm:py-24 md:px-12 md:py-32 lg:px-24 max-w-[100rem] mx-auto relative z-10"
        >
          <div className="flex flex-col items-center justify-center mb-10 sm:mb-16">
            <div className="w-[30px] h-[3px] bg-[#00eeff]/50 rounded-full mb-4"></div>
            <h2 className="font-prata text-white text-2xl sm:text-3xl md:text-4xl text-center">
              Featured Projects
            </h2>
          </div>

          <div className="relative cursor-pointer overflow-hidden rounded-xl mb-16 sm:mb-24 border border-white/5 bg-[#111111]">
            <div className="aspect-[16/9] w-full overflow-hidden">
              <img
                src="/unchained.webp"
                alt="UnchainedGPT Project Image"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 sm:p-8 md:p-10">
              <div className="flex flex-col">
                <div className="flex items-center mb-4">
                  <span className="px-3 py-1 text-xs border border-[#858585] text-[#d0d0d0] bg-[#bdbdbd]/5 rounded-full">
                    FEATURED
                  </span>
                  <div className="w-10 h-[1.5px] bg-white/20 ml-4"></div>
                </div>

                <h3 className="text-white text-xl sm:text-2xl md:text-3xl mb-2">
                  UnchainedGPT - AI ChatBot
                </h3>

                <p className="text-white/70 text-xs sm:text-sm max-w-2xl mb-4">
                  An AI-powered platform built with Next.js that brings multiple
                  AI models together in one place for free. Seamlessly
                  integrates to let users create, explore, and experiment
                  without restrictions.
                </p>

                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <button 
                    onClick={() => window.open("https://unchainedgpt.com/", "_blank")}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 border-2 border-[#00eeff]/30 text-[#00eeff]/80 bg-[#00eeff]/5 rounded-xl hover:bg-[#00eeff16] transition-all ease-out hover:scale-[1.028] duration-300 text-xs sm:text-sm tracking-wider">
                    View Website
                  </button>

                  <button 
                    onClick={notifyUnavailable}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 border-2 border-[#666666] text-[#bdbdbd] bg-[#747474]/5 rounded-xl hover:bg-[#262626] transition-all ease-out hover:scale-[1.028] duration-300 text-xs sm:text-sm tracking-wider">
                    Case Study
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                title: "Luvo Web",
                description:
                  "Luvo Web is my web development agency focused on crafting responsive and engaging websites.",
                image: "/luvo-dark.webp",
                tech: ["React", "Tailwind", "Vite", "Figma"],
                color: "#ee00ff",
                website: "https://luvoweb.com/",
              },
              {
                title: "Bantr - Chatting App",
                description:
                  "Real-Time chatting app similar to Discord. Servers, channels, direct messages, and much more..",
                image: "/bantr.webp",
                tech: ["React", "Node.js", "Socket.io", "Express.js"],
                color: "#00eeff",
                website: "https://bantr.siddz.com/",
              },
              {
                title: "ScaleOxPerts Website",
                description:
                  "A professional website for a Digital Marketing Company, developed as a freelance project.",
                image: "/sacleoxperts.webp",
                tech: ["Next.js", "Tailwind", "Figma"],
                color: "#ee00ff",
                white: true,
                website: "https://scaleoxperts.com/",
              },
              {
                title: "Interactive Bio Page",
                description:
                  "An interactive bio page made as an freelance project, built with Next.js and Tailwind CSS.",
                image: "https://i.imgur.com/F8e75A9.jpeg",
                tech: ["Next.js", "Tailwind", "Figma"],
                color: "#00eeff",
                website: "https://betray.pro/",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-white/5 bg-[#111111] transition-all duration-300 hover:translate-y-[-2.5px] group"
              >
                <div className="aspect-[16/9] w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      project.white ? "opacity-[0.93]" : ""
                    }`}
                  />
                </div>

                <div className="p-4 sm:p-6">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-0.5 sm:py-1 text-[0.6rem] border border-[#2e2e2e] text-[#bababa] bg-[#bdbdbd]/5 font-pop rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-white text-lg sm:text-xl md:text-2xl font-medium mb-1.5 sm:mb-2 line-clamp-1">
                    {project.title}
                  </h3>

                  <p className="text-white/60 text-xs mb-3 sm:mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 sm:gap-2.5">
                    <button
                      onClick={() => window.open(project.website, "_blank")}
                      className="px-3 sm:px-4 py-1 sm:py-1.5 border-2 border-[#00eeff]/30 text-[#00eeff]/80 bg-[#00eeff]/5 rounded-xl hover:bg-[#00eeff16] transition-all ease-out hover:scale-[1.028] duration-300 text-[0.7rem] sm:text-[0.8rem] tracking-wider whitespace-nowrap"
                    >
                      View Website
                    </button>
                    <button 
                      onClick={notifyUnavailable}
                      className="px-3 sm:px-4 py-1 sm:py-1.5 border-2 border-[#666666] text-[#bdbdbd] bg-[#747474]/5 rounded-xl hover:bg-[#262626] transition-all ease-out hover:scale-[1.028] duration-300 text-[0.7rem] sm:text-[0.8rem] tracking-wider whitespace-nowrap">
                      Case Study
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center underline underline-offset-[6px] text-[#6d6d6d] hover:text-[#d5d5d5] transition-colors duration-300 ease-in-out sm:justify-end mt-8 sm:mt-10">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                notifyUnavailable();
              }}
              className="inline-flex items-center group"
            >
              <span className="mr-1.5 text-xs sm:text-sm font-medium text-[#959595] group-hover:text-[#f5f5f5] transition-colors duration-300">SEE ALL PROJECTS</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#747474] group-hover:text-[#f5f5f5] transition-colors duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* About Me Section */}
        <div
          id="about-section"
          className="px-4 sm:px-6 py-8 sm:py-8 md:px-12 lg:px-24 max-w-[100rem] mx-auto relative z-10"
        >
          <div className="flex flex-col items-center justify-center pb-8 sm:pb-16">
            <div className="w-[30px] h-[3px] bg-[#ee00ff]/50 rounded-full mb-4"></div>
            <h2 className="font-prata unselectable text-white text-2xl sm:text-3xl md:text-4xl text-center">
              About Me
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[400px] sm:gap-10 md:gap-16">
            <div 
              className="bg-gradient-to-br from-[#0f0f0f] to-[#131313] rounded-xl p-6 sm:p-7 md:p-8 border border-white/5 transition-all duration-500 ease-out h-full flex flex-col relative overflow-hidden group hover:shadow-[0_0_25px_rgba(238,0,255,0.09)] hover:border-[#ee00ff20]"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              
              <div className="flex items-center mb-5">
                <h3 className="text-white text-xl sm:text-xl md:text-2xl unselectable font-medium ml-3">My Journey</h3>
              </div>
              
              <div className="space-y-4 sm:space-y-5 flex-grow relative z-10">
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed border-l-2 border-[#ee00ff]/30 pl-3 py-1">
                  My fascination with coding began in high school when I watched my friends build impressive websites and Discord Bots, sparking my curiosity about programming. What started as simple experimentation quickly turned into a deep passion. I spent countless nights teaching myself Python before gradually transitioning to web development.
                </p>
                
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed border-l-2 border-[#8000ff]/30 pl-3 py-1">
                  Throughout my journey, I've built numerous projects some successful, many failures but each one taught me valuable lessons. Along the way, I've connected with incredible people who have influenced my growth. In this time I built a website for someone, and for the first time, I got paid for my work. That's when I realized this wasn't just a hobby it was something I could turn into a career. 
                </p>
                
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed border-l-2 border-[#00eeff]/30 pl-3 py-1">
                  Running a development agency has let me work with incredible people and tackle complex challenges across industries. Each project has sharpened my problem solving skills and understanding of scalable solutions. And this is just the beginning I'm now diving into Rust, Flutter, and C/C++ to take on even bigger challenges.
                </p>

                <div className='flex gap-4 pt-3 md:pt-2'>
                  <button
                    onClick={() => lenisRef.current?.scrollTo("#contact-section")}
                    className="px-3 unselectable sm:px-4 py-1.5 sm:py-2 border-2 border-[#ee00ff]/50 text-[#ee00ff]/80 bg-[#ee00ff]/10 rounded-xl hover:bg-[#ee00ff1f] transition-all ease-out hover:scale-[1.028] duration-300 text-[0.78rem] sm:text-[0.82rem] tracking-wider whitespace-nowrap"
                  >
                    Contact Me
                  </button>
                  <button 
                    onClick={downloadResume}
                    className="px-3 unselectable sm:px-4 py-1.5 sm:py-2 border-2 border-[#666666] text-[#bdbdbd] bg-[#747474]/5 rounded-xl hover:bg-[#262626] transition-all ease-out hover:scale-[1.028] duration-300 text-[0.78rem] sm:text-[0.82rem] tracking-wider whitespace-nowrap">
                    Download Resume
                  </button>
                </div>
              </div>
            </div>

            {/* Right side - Timeline with enhanced styling */}
            <div 
              className="relative unselectable mt-2 md:mt-0 h-full flex flex-col"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="relative h-full flex flex-col">
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#ee00ff]/40 via-[#8000ff]/40 to-[#00eeff]/40 ml-[7px] rounded-full"></div>
                
                <div className="flex flex-col justify-between h-full">
                  {[
                    {
                      title: "Web Developer & Owner",
                      date: "2023 - Present",
                      company: "Luvo Web",
                      description: "My development agency which specializes in building high-quality websites for clients across various industries, including businesses backed by Y Combinator and other renowned accelerators.",
                      borderColor: "border-[#ee00ff]/50",
                      bgColor: "bg-[#ee00ff]/20",
                      // icon: "🚀"
                    },
                    {
                      title: "Senior Frontend Developer",
                      date: "2024 - Present",
                      company: "IEEE CS",
                      description: "I'm a part of IEEE CS's Tech Team, where I've contributed to various projects and events, organizing hackathons, workshops, and competitions to help students and developers grow.",
                      borderColor: "border-[#8000ff]/50",
                      bgColor: "bg-[#8000ff]/20",
                      // icon: "💻"
                    },
                    {
                      title: "Fullstack Developer",
                      date: "2024 - 2025",
                      company: "Randomize Tech",
                      description: "Led development of the official fest website and event management system, handling 1000+ registrations for 5+ technical events while assisting in event organization and execution.",
                      borderColor: "border-[#00eeff]/50",
                      bgColor: "bg-[#00eeff]/20",
                      // icon: "🌐"
                    }
                  ].map((entry, index) => (
                    <div key={index} className="relative pl-8 sm:pl-10 group mb-8 last:mb-0 md:mb-0">
                      <div className={`absolute left-0 top-[10px] w-[16px] h-[16px] rounded-full bg-[#111111] border-2 ${entry.borderColor} group-hover:scale-125 transition-all duration-300 z-10`}>
                        <div className="absolute inset-0 rounded-full animate-ping opacity-30" style={{backgroundColor: entry.bgColor.replace('bg-', '').replace('/20', '/10')}}></div>
                      </div>
                      
                      <div className={`opacity-0 group-hover:opacity-100 absolute -left-2 top-[10px] w-6 h-6 ${entry.bgColor} rounded-full blur-xl transition-all duration-500`}></div>
                      
                      <div className="bg-gradient-to-br from-[#111111] to-[#131313] rounded-xl p-5 sm:p-6 border border-white/5 transform group-hover:translate-x-[6px] transition-all duration-300 hover:shadow-[0_5px_15px_rgba(0,0,0,0.2)] hover:border-white/10">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center">
                            {/* <span className="text-xl mr-2">{entry.icon}</span> */}
                            <h4 className="text-white font-medium text-sm sm:text-base">{entry.title}</h4>
                          </div>
                          <span className="text-[#00eeffb6] md:text-xs text-[0.6rem] font-medium bg-[#00eeff]/5 px-2 py-1 rounded-full">{entry.date}</span>
                        </div>
                        <div className="text-[#ffffff8f] text-xs sm:text-sm mb-2.5 font-medium">{entry.company}</div>
                        <p className="text-white/70 text-xs leading-relaxed md:w-[80%]">{entry.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Contact Me Section */}
        <div
          id="contact-section"
          className="px-4 sm:px-6 py-14 sm:py-20 md:px-12 lg:px-24 max-w-[100rem] mx-auto relative z-10"
        >
          <div className="flex flex-col items-center justify-center pb-8 sm:pb-16">
            <div className="w-[30px] h-[3px] bg-[#00eeff]/50 rounded-full mb-4"></div>
            <h2 className="font-prata unselectable text-white text-2xl sm:text-3xl md:text-4xl text-center">
              Get In Touch
            </h2>
          </div>

          {/* Background decorations */}
          <div className="absolute top-[40%] left-[5%] w-[30vw] h-[30vw] max-w-[300px] max-h-[300px] bg-[#ee00ff0a] rounded-full blur-[120px] z-0"></div>
          <div className="absolute bottom-[10%] right-[10%] w-[25vw] h-[25vw] max-w-[250px] max-h-[250px] bg-[#00eeff0a] rounded-full blur-[100px] z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left side - Contact Info */}
            <div 
              className="bg-gradient-to-br from-[#0f0f0f] to-[#131313] rounded-xl p-6 sm:p-7 md:p-8 border border-white/5 transition-all duration-500 ease-out h-full flex flex-col relative overflow-hidden group hover:shadow-[0_0_25px_rgba(0,238,255,0.05)] hover:border-[#00eeff20]"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="flex items-center mb-5">
                <h3 className="text-white text-xl sm:text-xl md:text-2xl unselectable font-medium">Let's Connect</h3>
              </div>
              
              <div className="space-y-5 flex-grow relative z-10">
                <p className="text-white/80 unselectable text-xs sm:text-sm leading-relaxed border-l-2 border-[#00eeff]/30 pl-4 py-1">
                  I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision. Whether you have a question or just want to say hi, I'll get back to you as soon as possible!
                </p>
                
                <div className="mt-6 group cursor-pointer">
                  <div className="flex items-center mb-4 group cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-[#00eeff]/10  flex items-center justify-center mr-4 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00eeff]/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/50 text-xs uppercase tracking-wider unselectable mb-1">Email</p>
                      <p onClick={() => window.open('mailto:siddz.dev@gmail.com')} className="text-sm font-medium text-[#00eeffd2] transition-colors hover:underline duration-300">siddz.dev@gmail.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/5">
                  <p className="text-white/70 text-xs mb-4 unselectable">Connect with me on social media</p>
                  <div className="flex space-x-3">
                    <a href="https://github.com/SiddDevZ" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#ffffff0c] flex items-center justify-center text-white/50 hover:text-white hover:bg-[#ffffff12] transition-all duration-300 hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a href="https://discordapp.com/users/273352781442842624" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#ffffff0c] flex items-center justify-center text-white/50 hover:text-white hover:bg-[#ffffff12] transition-all duration-300 hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                      </svg>
                    </a>
                    <a href="https://x.com/epicsidd" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#ffffff0c] flex items-center justify-center text-white/50 hover:text-white hover:bg-[#ffffff12] transition-all duration-300 hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Contact Form */}
            <div 
              className="bg-gradient-to-br from-[#0f0f0f] to-[#131313] rounded-xl p-6 sm:p-7 md:p-8 border border-white/5 transition-all duration-500 ease-out h-full flex flex-col relative overflow-hidden group hover:shadow-[0_0_25px_rgba(238,0,255,0.05)] hover:border-[#ee00ff20]"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <ContactForm />
            </div>
          </div>
        </div>

        <div className='max-w-[100rem] mx-auto relative z-10'>
          
        </div>

        {/* Add Testimonials section here */}
        <Testimonials />

        {/* Add Footer section here */}
        <Footer />

      </div>


    </>
  );
};

export default Page;
