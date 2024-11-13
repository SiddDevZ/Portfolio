import React from "react";
import NavBar from "@/app/Components/NavBar/NavBar";
import Particles from "@/app/Components/Particles/Particles";
import "remixicon/fonts/remixicon.css";
import TechStack from "@/app/Components/TechStack/TechStackb";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="full-screen">
        <Particles />
      </div>
      <NavBar check={0} />
      <div className="main flex flex-col pt-16 items-center px-7 animate-in">
        <div className="mt-2 main-area sm:py-10 xss:py-7 px-10 main-area mb-5 flex flex-col items-center justify-center border border-[#2e2e2e] w-[65rem] sm:max-w-[90vw] xss:max-w-[93.5vw] relative">
          <div className="absolute sm:-top-[1.15rem] sm:-left-3 xs:-top-[0.65rem] xss:-left-1 xss:-top-[0.5rem] sm:w-6 sm:h-6 xss:w-2 xss:h-2 bg-black flex items-center justify-center">
            <span className="text-[#606060] sm:text-7xl xs:text-6xl xss:text-4xl font-[50]">+</span>
          </div>
          <div className="max-w-[42.5rem] w-full flex flex-col items-center">
            <Link
              href="/blog"
              className="flex justify-center group items-center cursor-pointer gap-1 mb-6"
            >
              <i className="ri-arrow-left-line text-sm text-[#CCCCCC]"></i>
              <p className="text-xs group-hover:underline text-[#CCCCCC]">
                Blog
              </p>
            </Link>
            <h1 className="text-[#D8D8D8] md:text-4xl sm:sm:text-3xl xss:text-[1.7rem] xss:leading-7 xss:text-2xl font-semibold text-center font-sans">
              Zenos AI Project Breakdown: Building a Real-Time AI Chat Interface
            </h1>
            <div className="flex gap-2 mt-4 flex-wrap justify-center">
              <TechStack url={"react.svg"} name={"React"} />
              <TechStack url={"nodejs.svg"} name={"NodeJS"} />
              {/* <TechStack url={"llama.svg"} name={"LLaMA"} /> */}
              <TechStack url={"mongo.webp"} name={"MongoDB"} />
              
              <TechStack url={"git.svg"} name={"Git"} />
              <TechStack url={"tailwind.svg"} name={"Tailwind"} />
            </div>
            <div className="flex justify-between w-full mt-8">
              <div className="flex gap-1 justify-center items-center">
                <i className="ri-time-line text-xs text-[#bbbbbb]"></i>
                <p className="text-xs text-[#bbbbbb] font-medium">3 min read</p>
              </div>
              <p className="text-xs text-[#bbbbbb] font-medium">
                September 2024 - October 2024
              </p>
            </div>
            <div className="mt-10 text-[#CCCCCC] leading-relaxed space-y-4 font-sans">
              <h2 className="text-[#D8D8D8] sm:text-3xl xss:text-[1.7rem] xss:leading-7 font-semibold">
                What Sparked Zenos AI?
              </h2>
              <p className="text-[#DBDBDB] pb-5">
                I've always wanted to build something in full-stack development
                that could offer real utility. Creating a responsive chat app 
                powered by AI seemed like the perfect challenge. Inspired by AI models
                like ChatGPT, I wanted to build Zenos AI as a smooth, interactive experience that 
                connects users with the power of real-time responses.
              </p>
              <a
                href={"https://zenos.siddz.com/"}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center gap-[0.55rem] group hover:cursor-pointer"
              >
                <i className="ri-link text-base bg-gradient-to-b from-[#72EDF2] to-[#5151E5] text-transparent bg-clip-text"></i>
                <div className="inline-flex flex-col">
                  <h1 className="text-sm bg-gradient-to-b translate-y-[1px] from-[#72EDF2] to-[#5151E5] text-transparent bg-clip-text">
                    Live Preview
                  </h1>
                  <div className="group-hover:bg-gradient-to-r bg-transparent from-[#72EDF2] to-[#5151E5] h-[0.7px] w-full"></div>
                </div>
              </a>
              <div className="relative pb-[56.25%] h-0 overflow-hidden">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/D0Ne6sJaNUA?si=yw6y68iD5xweDRiN"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <h2 className="text-[#D8D8D8] sm:text-3xl xss:text-[1.7rem] xss:leading-7 font-semibold">
                Tech Stack & Tools
              </h2>
              <p className="text-[#DBDBDB]">
                Here are the core technologies I used to bring Zenos AI to life:
              </p>
              <ul className="list-disc ml-5 space-y-2 pb-5">
                <li className="text-[#DBDBDB]">
                  <span className="font-medium text-[#D8D8D8] font-mono">
                    React.js
                  </span>
                  : Enables a dynamic and responsive user interface for easy chat interactions.
                </li>
                <li className="text-[#DBDBDB]">
                  <span className="font-medium text-[#D8D8D8] font-mono">
                    LLaMA Model
                  </span>
                  : The AI backbone of Zenos, providing the logic for interpreting user queries.
                </li>
                <li className="text-[#DBDBDB]">
                  <span className="font-medium text-[#D8D8D8] font-mono">
                    Express.js
                  </span>
                  : A lightweight backend framework that handles server requests efficiently.
                </li>
                <li className="text-[#DBDBDB]">
                  <span className="font-medium text-[#D8D8D8] font-mono">
                    Socket.IO
                  </span>
                  : Allows for seamless, real-time messaging between users and the AI.
                </li>
                <li className="text-[#DBDBDB]">
                  <span className="font-medium text-[#D8D8D8] font-mono">
                    Tailwind CSS
                  </span>
                  : Adds a sleek, modern design to the UI.
                </li>
              </ul>

              <h2 className="text-[#D8D8D8] sm:text-3xl xss:text-[1.7rem] xss:leading-7 font-semibold">
                Overcoming Challenges
              </h2>
              <p className="text-[#DBDBDB]">
                Working with AI models presented unique challenges, especially with API integration and data handling. 
                There were also frontend issues with responsiveness, ensuring a smooth UI flow. Solving these helped 
                me deepen my full-stack knowledge.
              </p>

              <h2 className="text-[#D8D8D8] sm:text-3xl xss:text-[1.7rem] xss:leading-7 font-semibold">
                Final Thoughts
              </h2>
              <p className="text-[#DBDBDB] pb-5">
                Zenos AI is more than just an AI chat app; it's a project that challenged me technically and creatively. 
                Building it has been a rewarding journey, and it inspired me to keep innovating.
              </p>
            </div>
            <div className="flex justify-between w-full mt-8">
              <div className="flex gap-1 justify-center items-center">
                <p className="text-xs text-[#bbbbbb]">
                  Last Updated on 8 November, 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
