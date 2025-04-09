import React from "react";
import Particles from "@/components/ui/particles";
import "remixicon/fonts/remixicon.css";
import TechStack from "@/app/v1/Components/TechStack/TechStackb";
import Link from "next/link";

const Page = () => {
  return (
    <>
      {/* <div className="full-screen">
        <Particles />
      </div> */}
      <div className="min-h-screen bg-[#0a0a0a] text-white">
        <div className="px-6 pt-7 md:px-12 md:pt-8 lg:px-24 lg:pt-8 max-w-[100rem] pb-16 mx-auto">
          <header className="flex justify-between items-center mb-12">
            <div className="text-[#ededed] text-xl font-serif tracking-wider hover:text-white transition-colors">
              <Link href="/">SIDDHARTH MEENA</Link>
            </div>
            <nav className="flex items-center space-x-4">
              <div className="hidden md:flex items-center mr-4">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></span>
                <span className="text-green-400 text-xs uppercase">
                  Available for work
                </span>
              </div>
              <Link
                href="/"
                className="px-4 py-2 text-white border border-white/20 rounded-full text-sm hover:bg-white/10 transition-all"
              >
                HOME
              </Link>
            </nav>
          </header>
          <div className="main flex flex-col sm:pt-16 items-center px-7 animate-in">
            <div className="mt-2 main-area sm:py-10 xss:py-7 px-10 main-area mb-5 flex flex-col items-center justify-center border border-[#2e2e2e] w-[65rem] sm:max-w-[90vw] xss:max-w-[93.5vw] relative">
              <div className="absolute sm:-top-[1.15rem] sm:-left-3 xs:-top-[0.65rem] xss:-left-1 xss:-top-[0.5rem] sm:w-6 sm:h-6 xss:w-2 xss:h-2 bg-black flex items-center justify-center">
                <span className="text-[#606060] sm:text-7xl xs:text-6xl xss:text-4xl font-[50]">
                  +
                </span>
              </div>
              <div className="max-w-[42.5rem] w-full flex flex-col items-center">
                <Link
                  href="/blogs"
                  className="flex justify-center group items-center cursor-pointer gap-1 mb-6"
                >
                  <i className="ri-arrow-left-line text-sm text-[#CCCCCC]"></i>
                  <p className="text-xs group-hover:underline text-[#CCCCCC]">
                    Blog
                  </p>
                </Link>
                <h1 className="text-[#D8D8D8] md:text-4xl sm:sm:text-3xl xss:text-[1.7rem] xss:leading-7 xss:text-2xl font-semibold text-center font-sans">
                  Designing Our Agency's Website
                </h1>
                <div className="flex gap-2 mt-4 flex-wrap justify-center">
                  <TechStack url={"react.svg"} name={"React"} />
                  <TechStack url={"nodejs.svg"} name={"NodeJS"} />
                  {/* <TechStack url={"css3.svg"} name={"CSS"} /> */}
                  <TechStack url={"git.svg"} name={"Git"} />
                  <TechStack url={"tailwind.svg"} name={"Tailwind"} />
                </div>
                <div className="flex justify-between w-full mt-8">
                  <div className="flex gap-1 justify-center items-center">
                    <i className="ri-time-line text-xs text-[#bbbbbb]"></i>
                    <p className="text-xs text-[#bbbbbb] font-medium">2 min read</p>
                  </div>
                  <p className="text-xs text-[#bbbbbb] font-medium">
                    July 2024 - August 2024
                  </p>
                </div>
                <div className="mt-10 text-[#CCCCCC] leading-relaxed space-y-4 font-sans">
                  <h2 className="text-[#D8D8D8] sm:text-3xl xss:text-[1.7rem] xss:leading-7 font-semibold">
                    The Need
                  </h2>
                  <p className="text-[#DBDBDB] pb-5">
                    Creating our agency website was essential for presenting our
                    work, allowing clients easy access to explore our services and
                    projects. The goal was to make a streamlined, engaging, and
                    accessible platform that helps clients quickly get in touch with
                    us.
                  </p>

                  <h2 className="text-[#D8D8D8] sm:text-3xl xss:text-[1.7rem] xss:leading-7 font-semibold">
                    Tech Stack & Tools
                  </h2>
                  <p className="text-[#DBDBDB]">
                    The tech stack chosen reflects our focus on front-end expertise
                    and performance:
                  </p>
                  <ul className="list-disc ml-5 space-y-2 pb-5">
                    <li className="text-[#DBDBDB]">
                      <span className="font-medium text-[#D8D8D8] font-mono">
                        React.js
                      </span>
                      : The core framework, React provides flexibility for building
                      reusable components and a dynamic user experience.
                    </li>
                    <li className="text-[#DBDBDB]">
                      <span className="font-medium text-[#D8D8D8] font-mono">
                        Tailwind CSS
                      </span>
                      : A utility-first CSS framework that allows us to quickly
                      style components and maintain consistency across the site.
                    </li>
                    <li className="text-[#DBDBDB]">
                      <span className="font-medium text-[#D8D8D8] font-mono">
                        Animations & Effects
                      </span>
                      : The animations and small interactions add a premium feel,
                      though they take time to perfect. These touches make the
                      experience feel smooth and memorable for visitors.
                    </li>
                  </ul>

                  <a
                    href={"https://luvo.siddz.com/"}
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

                  <h2 className="text-[#D8D8D8] sm:text-3xl xss:text-[1.7rem] xss:leading-7 font-semibold">
                    Key Challenges
                  </h2>
                  <p className="text-[#DBDBDB]">
                    Designing subtle animations and interactive elements without
                    compromising performance required a careful balance. Ensuring
                    smooth loading times while maintaining the aesthetic experience
                    was essential.
                  </p>

                  <h2 className="text-[#D8D8D8] sm:text-3xl xss:text-[1.7rem] xss:leading-7 font-semibold">
                    Outcome & Final Thoughts
                  </h2>
                  <p className="text-[#DBDBDB] pb-5">
                    Our agency website now serves as a polished portfolio that
                    represents our work, style, and capabilities. Building this
                    project for our own brand was both challenging and rewarding,
                    and it reflects our commitment to design and user experience.
                  </p>
                </div>
                <div className="flex justify-between w-full mt-8">
                  <div className="flex gap-1 justify-center items-center">
                    <p className="text-xs text-[#bbbbbb]">
                      Last Updated on 12 November, 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;