"use client";
import React, { useState, useRef, useEffect } from "react";
import Project from "./Project";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef(null);
  const timeoutRef = useRef(null);

  const updateHoverStyle = () => {
    if (hoveredIndex !== null && containerRef.current) {
      const projectElement = containerRef.current.children[hoveredIndex];
      if (projectElement) {
        const { offsetLeft, offsetTop, offsetWidth, offsetHeight } =
          projectElement;
        return {
          left: `${offsetLeft - 15}px`,
          top: `${offsetTop - 15}px`,
          width: `${offsetWidth + 30}px`,
          height: `${offsetHeight + 25}px`,
          opacity: 1,
        };
      }
    }
    return { opacity: 0 };
  };

  const hoverStyle = updateHoverStyle();

  const handleHover = (index) => {
    clearTimeout(timeoutRef.current);
    setHoveredIndex(index);
    setIsTransitioning(true);
  };

  const handleLeave = () => {
    setIsTransitioning(true);
    timeoutRef.current = setTimeout(() => {
      setHoveredIndex(null);
      setIsTransitioning(false);
    }, 100);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="projects pt-9 relative">
      <div
        className="absolute transition-all duration-300 ease-in-out bg-[#ffffff08] pointer-events-none rounded-lg"
        style={{
          ...hoverStyle,
          opacity: isTransitioning || hoveredIndex !== null ? 1 : 0,
        }}
      />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto"
        ref={containerRef}
      >
        <Project
          title={"Zenos - AI ChatBot"}
          image="zenos.webp"
          link={"https://zenos.siddz.com"}
          lang={["React", "Node.js", "Express", "APIs", "MongoDB"]}
          description={
            "ChatBot which provides the latest models for free, with a visually appealing and Responsive interface."
          }
          onHover={() => handleHover(0)}
          onLeave={handleLeave}
          blog={"/blog/project-zenosai"}
        />
        <Project
          title={"Bantr - Chatting App"}
          image="bantr.webp"
          link={"https://bantr.siddz.com"}
          lang={["React", "Node.js", "Express", "SocketIO", "MongoDB"]}
          description={
            "Real-Time chatting app similar to Discord. Servers, channels, direct messages, and much more.."
          }
          onHover={() => handleHover(1)}
          onLeave={handleLeave}
          blog={"/blog/making-of-bantr"}
        />
        <Project
          title={"Luvo Web"}
          image="luvo-dark.webp"
          link={"https://luvo.siddz.com"}
          lang={["React", "TailwindCSS", "Vite", "Figma"]}
          description={
            "Luvo Web is a web development agency focused on crafting responsive and engaging websites."
          }
          onHover={() => handleHover(2)}
          onLeave={handleLeave}
          blog={"/blog/the-luvoweb-project"}
        />
        <Project
          title={"ScaleOxPerts Website"}
          image="aa.png"
          white={true}
          link={"https://scaleoxperts.com/"}
          lang={["Next.js", "React", "TailwindCSS", "Vite", "Figma"]}
          description={
            "A professional website for a Digital Marketing Company, developed as a freelance project."
          }
          onHover={() => handleHover(3)}
          onLeave={handleLeave}
          blog={"no"}
        />
      </div>
    </div>
  );
};

export default Projects;
