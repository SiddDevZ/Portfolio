"use client";
import React, { useEffect } from 'react'
import Link from 'next/link'

const Page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allProjects = [
    {
      title: "Lumeroo - Streaming Platform",
      description: "A modern streaming platform with support for video/image uploads, HLS playback, profiles, comments, and full content discovery — built with a focus on performance and design.",
      image: "/lumeroo.webp",
      tech: ["Next.js", "React", "Node.js", "MongoDB", "HLS", "AWS"],
      website: "https://lumeroo.live/",
      github: "https://github.com/SiddDevZ/Lumeroo",
    },
    {
      title: "UnchainedGPT",
      description: "AI chatbot platform offering access to multiple AI models for free with real-time communication and modern interface.",
      image: "/unchainedgpt.webp",
      tech: ["Next.js", "Tailwind", "MongoDB", "Socket.IO", "Hono.js"],
      website: "https://unchainedgpt.com/",
      github: "https://github.com/SiddDevZ/UnchainedGPT",
    },
    {
      title: "Luvo Web Agency",
      description: "Luvo Web is my web development agency focused on crafting responsive and engaging websites for clients worldwide.",
      image: "/luvo-dark.webp",
      tech: ["React", "Tailwind", "Vite", "Figma"],
      website: "https://luvo.siddz.com/",
    },
    {
      title: "ScaleOxPerts Website",
      description: "A professional website for a Digital Marketing Company, developed as a freelance project with modern design principles.",
      image: "/sacleoxperts.webp",
      tech: ["Next.js", "Tailwind", "Figma"],
      website: "https://scaleoxperts.com/",
    },
    {
      title: "Bantr - Chat Application",
      description: "Real-Time chatting app similar to Discord. Features servers, channels, direct messages, and real-time communication.",
      image: "/bantr.webp",
      tech: ["React", "Node.js", "Socket.io", "Express.js", "MongoDB"],
      website: "https://bantr.siddz.com/",
      github: "https://github.com/SiddDevZ/Bantr",
    }
  ];

  const textOnlyProjects = [
    {
      title: "Agency Discord Bot",
      description: "My old development agency Discord bot with 40+ custom commands, featuring ticketing systems, moderation tools, and client management utilities.",
      tech: ["Python", "Discord.py", "SQLite", "JSON"],
      github: "https://github.com/SiddDevZ/Agency-Discord-Bot",
    },
    {
      title: "Bio Website - freelance",
      description: "A bio website for a freelance client with a visually appealing interface, featuring responsive design and modern UI components.",
      tech: ["Next.js", "Tailwind", "React", "Vercel"],
      github: "https://github.com/SiddDevZ/bio-website",
    },
    {
      title: "Icnity Landing Page",
      description: "Icnity - a visually appealing landing page demo showcasing modern web design principles and interactive elements.",
      tech: ["Next.js", "Tailwind", "Framer", "TypeScript"],
      github: "https://github.com/SiddDevZ/Icnity-Landing-Page",
    },
    {
      title: "Multipurpose Discord Bot (outdated)",
      description: "My first ever coding project - a Discord bot with over 100+ commands covering moderation, utility, music, and many more features.",
      tech: ["Python", "Pycord", "APIs"],
      github: "https://github.com/SiddDevZ/Multipurpose-Discord-Bot",
    }
  ];

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          opacity: "0.04",
          background:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4.4' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      />
      
      <div className="absolute top-[5vh] left-[-5%] w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] bg-[#ee00ff12] rounded-full blur-[100px] z-0"></div>
      <div className="absolute top-[50vh] right-[-15%] w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] bg-[#8000ff0e] rounded-full blur-[120px] z-0"></div>
      <div className="absolute bottom-[10%] left-[10%] w-[30vw] h-[30vw] max-w-[300px] max-h-[300px] bg-[#00eeff0a] rounded-full blur-[100px] z-0"></div>

      <div className="px-6 py-7 md:px-12 md:py-8 lg:px-24 lg:py-8 max-w-[100rem] mx-auto relative z-10">
        <header className="flex justify-between items-center mb-12">
          <Link href="/" className="text-[#ededed] text-xl font-serif tracking-wider hover:text-white transition-colors">
            SIDDHARTH MEENA
          </Link>
          <nav className="flex items-center space-x-4">
            <div className="hidden md:flex items-center mr-4">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></span>
              <span className="text-green-400 text-xs uppercase">Available for work</span>
            </div>
            <Link
              href="/blogs"
              className="px-4 py-2 text-white border border-white/20 rounded-full text-sm hover:bg-white/10 transition-all"
            >
              BLOGS
            </Link>
          </nav>
        </header>

        <div className="text-center mb-16">
          <div className="w-[30px] h-[3px] bg-[#00eeff]/50 rounded-full mb-6 mx-auto"></div>
          <h1 className="font-prata text-white text-3xl sm:text-4xl md:text-5xl mb-4">
            All Projects
          </h1>
          <p className="text-white/90 text-sm sm:text-base max-w-2xl mx-auto">
            A comprehensive collection of my featured projects, showcasing my work across 
            web development, AI applications, and client solutions.
          </p>
        </div>

        <div className="mb-20">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {allProjects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#111111] transition-all duration-300 hover:scale-[1.005] hover:border-[#ffffff36]"
              >
                <div className="aspect-[16/9] w-full overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.description.slice(0, 50)}...`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs border border-white/20 text-white/80 bg-white/5 font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech[3] && (
                      <span className="hidden md:inline-flex px-2 py-1 text-xs border border-white/20 text-white/80 bg-white/5 font-medium rounded-full">
                        {project.tech[3]}
                      </span>
                    )}
                    {project.tech.length > 3 && (
                      <span className="md:hidden px-2 py-1 text-xs border border-white/20 text-white/80 bg-white/5 font-medium rounded-full">
                        +{project.tech.length - 3}
                      </span>
                    )}
                    {project.tech.length > 4 && (
                      <span className="hidden md:inline-flex px-2 py-1 text-xs border border-white/20 text-white/80 bg-white/5 font-medium rounded-full">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  <h3 className="text-white text-[1.3rem] leading-5 sm:leading-7 sm:text-[1.4rem] font-semibold mb-2 line-clamp-1">
                    {project.title}
                  </h3>

                  <p className="text-white/80 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex gap-3">
                    {project.website && project.website !== "#" && (
                      <button
                        onClick={() => window.open(project.website, "_blank")}
                        className="px-4 py-2 border-2 border-[#00eeff]/40 text-[#00eeff] bg-[#00eeff]/10 rounded-lg hover:bg-[#00eeff]/20 transition-all ease-out hover:scale-[1.02] duration-300 text-xs font-medium tracking-wider"
                      >
                        View Live
                      </button>
                    )}
                    {project.github && (
                      <button
                        onClick={() => window.open(project.github, "_blank")}
                        className="px-4 py-2 border-2 border-white/30 text-white/90 bg-white/5 rounded-lg hover:bg-white/10 transition-all ease-out hover:scale-[1.02] duration-300 text-xs font-medium tracking-wider"
                      >
                        Source Code
                      </button>
                    )}
                    {!project.website && !project.github && (
                      <div className="px-4 py-2 border-2 border-white/20 text-white/60 bg-white/5 rounded-lg text-xs font-medium">
                        Coming Soon
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <div className="flex flex-col items-center justify-center mb-12">
            <div className="w-[30px] h-[3px] bg-[#8000ff]/50 rounded-full mb-4"></div>
            <h2 className="font-prata text-white text-2xl sm:text-3xl text-center">
              Other Projects
            </h2>
            <p className="text-white/60 text-sm mt-1 max-w-lg text-center">
              Additional projects and open-source contributions showcasing various technologies and skills
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {textOnlyProjects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#111111] to-[#0f0f0f] transition-all duration-300 hover:border-white/20 hover:shadow-[0_8px_25px_rgba(0,0,0,0.3)] cursor-pointer flex flex-col"
                onClick={() => window.open(project.github, "_blank")}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#8000ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative p-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <div className="w-2 h-2 bg-[#8000ff]/60 rounded-full mr-3 group-hover:bg-[#8000ff] transition-colors"></div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 text-xs border border-white/20 text-white/80 bg-white/5 font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech[3] && (
                          <span className="hidden md:inline-flex px-2 py-1 text-xs border border-white/20 text-white/80 bg-white/5 font-medium rounded-full">
                            {project.tech[3]}
                          </span>
                        )}
                        {project.tech.length > 3 && (
                          <span className="md:hidden px-2 py-1 text-xs border border-white/20 text-white/80 bg-white/5 font-medium rounded-full">
                            +{project.tech.length - 3}
                          </span>
                        )}
                        {project.tech.length > 4 && (
                          <span className="hidden md:inline-flex px-2 py-1 text-xs border border-white/20 text-white/80 bg-white/5 font-medium rounded-full">
                            +{project.tech.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    <h3 className="text-white text-lg sm:text-xl font-semibold mb-2 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-white/75 text-sm leading-relaxed group-hover:text-white/85 transition-colors">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/5 group-hover:border-white/10 transition-colors">
                    <div className="flex items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white/50 group-hover:text-white/70 transition-colors"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      <span className="text-white/50 text-xs group-hover:text-white/70 transition-colors">
                        Open Source
                      </span>
                    </div>
                    <div className="flex items-center text-white/40 text-xs group-hover:text-white/60 transition-colors">
                      <span className="mr-2">Click to explore</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 group-hover:translate-x-0.5 transition-transform"
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
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16 pt-8">
          <Link
            href="/"
            className="inline-flex items-center group text-white/80 hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Page
