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
                <span className="text-[#606060] sm:text-7xl xs:text-6xl xss:text-4xl font-[50]">+</span>
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
                <h1 className="text-[#D8D8D8] md:text-4xl sm:sm:text-3xl xss:text-[1.7rem] xss:leading-7 xss:text-2xl font-semibold  text-center font-sans">
                  Bantr Project Breakdown: How I Built a Real-Time Chat App from
                  Scratch
                </h1>
                <div className="flex gap-2 mt-4 flex-wrap justify-center">
                  {/* <TechStack url={"nextjs.svg"} name={"Next.js"} /> */}
                  <TechStack url={"react.svg"} name={"React"} />
                  <TechStack url={"nodejs.svg"} name={"NodeJS"} />
                  <TechStack url={"mongo.webp"} name={"MongoDB"} />
                  <TechStack url={"git.svg"} name={"Git"} />
                  <TechStack url={"hono.svg"} name={"Hono.js"} />
                  <TechStack url={"tailwind.svg"} name={"Tailwind"} />
                </div>
                <div className="flex justify-between w-full mt-8">
                  <div className="flex gap-1 justify-center items-center">
                    <i className="ri-time-line text-xs text-[#bbbbbb]"></i>
                    <p className="text-xs text-[#bbbbbb] font-medium">3 min read</p>
                  </div>
                  <p className="text-xs text-[#bbbbbb] font-medium">
                    June 2024 - August 2024
                  </p>
                </div>
                <div className="mt-10 text-[#CCCCCC] leading-relaxed space-y-4 font-sans">
                  <h2 className="text-[#D8D8D8] sm:text-3xl xss:text-[1.7rem] xss:leading-7 font-semibold ">
                    What Inspired Bantr?
                  </h2>
                  <p className="text-[#DBDBDB] pb-5">
                    Ever since I started coding, I've been fascinated by how
                    real-time communication works. This curiosity led me to explore
                    chat applications to understand seamless messaging.{" "}
                    <span className="font-mono bg-[#2e2e2e] px-1 rounded">
                      Bantr
                    </span>{" "}
                    became my project to experiment and create a streamlined chat
                    experience with servers, channels, moderation, inspired by
                    platforms like{" "}
                    <span className="font-mono bg-[#2e2e2e] px-1 rounded">
                      Discord
                    </span>
                    , focusing on connecting people without clutter.
                  </p>
                  <a
                    href={"https://bantr.siddz.com/"}
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
                      src="https://www.youtube.com/embed/iO7T-mJVyI4?si=tYlLUwqZF9RiqiBq&controls=0&rel=0&modestbranding=1&showinfo=0"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <h2 className="text-[#D8D8D8] sm:text-3xl xss:text-[1.7rem] xss:leading-7 font-semibold ">
                    Tech Stack & Tools
                  </h2>
                  <p className="text-[#DBDBDB]">
                    For this project, I wanted a stack that could handle large
                    volumes of data fast and keep the UI super responsive. Here's
                    the core:
                  </p>
                  <ul className="list-disc ml-5 space-y-2 pb-5">
                    <li className="text-[#DBDBDB]">
                      <span className="font-medium text-[#D8D8D8] font-mono">
                        React.js
                      </span>
                      : Chose React.js for its component-based architecture, which
                      allows for building reusable UI components and creating a
                      dynamic user experience.
                    </li>
                    <li className="text-[#DBDBDB]">
                      <span className="font-medium text-[#D8D8D8] font-mono">
                        Hono.js
                      </span>
                      : Opted for Hono.js for its lightweight and fast APIs
                      performance, making it good for building efficient and
                      scalable real-time chat applications.
                    </li>
                    <li className="text-[#DBDBDB]">
                      <span className="font-medium text-[#D8D8D8] font-mono">
                        MongoDB
                      </span>
                      : Fast and scalable NoSQL database. With all the chat messages
                      and user data, MongoDB's document structure helped keep things
                      organized.
                    </li>
                    <li className="text-[#DBDBDB]">
                      <span className="font-medium text-[#D8D8D8] font-mono">
                        Socket.IO
                      </span>
                      : The MVP of Bantr, Socket.IO is what gives Bantr its
                      real-time chat capability.
                    </li>
                    <li className="text-[#DBDBDB]">
                      <span className="font-medium text-[#D8D8D8] font-mono">
                        Tailwind CSS
                      </span>
                      : For that clean, minimalistic design vibe. It's easy to use,
                      saves time, and makes everything look sharp.
                    </li>
                  </ul>

                  <h2 className="text-[#D8D8D8] sm:text-3xl xss:text-[1.7rem] xss:leading-7 font-semibold ">
                    The Challenge of Socket.IO
                  </h2>
                  <p className="text-[#DBDBDB]">
                    Here's where things got… interesting. Setting up{" "}
                    <span className="font-medium font-mono bg-[#2e2e2e] px-1 rounded">
                      Socket.IO
                    </span>{" "}
                    to run smoothly between HTTP and HTTPS was a test of patience.
                    At first, I was getting CORS errors, a nightmare when you're
                    trying to keep connections seamless. After a bunch of digging, I
                    realized it was because I was running the frontend on{" "}
                    <span className="font-mono bg-[#2e2e2e] px-1 rounded">
                      HTTPS
                    </span>{" "}
                    and the backend on{" "}
                    <span className="font-mono bg-[#2e2e2e] px-1 rounded">
                      HTTP
                    </span>
                    . Which is not allowed by browsers because of security.
                  </p>
                  <p className="text-[#DBDBDB] pb-5">
                    To fix it, I had to configure custom headers and enable CORS on
                    the server. Not so fun but I learned a ton from that experience.
                    Once everything was in place, watching messages appear instantly
                    by utilizing{" "}
                    <span className="font-mono bg-[#2e2e2e] px-1 rounded">
                      Hono.js
                    </span>{" "}
                    for Fast Performance was totally worth it.
                  </p>

                  <h2 className="text-[#D8D8D8] sm:text-3xl xss:text-[1.7rem] xss:leading-7 font-semibold ">
                    Building an Engaging UI
                  </h2>
                  <p className="text-[#DBDBDB] pb-5">
                    I wanted to use a mix of{" "}
                    <span className="font-mono bg-[#2e2e2e] px-1 rounded">
                      TailwindCSS
                    </span>{" "}
                    and normal{" "}
                    <span className="font-mono bg-[#2e2e2e] px-1 rounded">CSS</span>{" "}
                    for the UI to save time. The platform needed to feel premium, so
                    I opted for a dark theme with subtle shades of gray and vibrant
                    yellow accents. Clean icons from remixicon, consistent spacing,
                    and smooth animations brought everything together.
                  </p>

                  <h2 className="text-[#D8D8D8] sm:text-3xl xss:text-[1.7rem] xss:leading-7 font-semibold ">
                    Final Thoughts
                  </h2>
                  <p className="text-[#DBDBDB] pb-5">
                    Working on Bantr has been an incredible experience and a fun
                    challenge. While it was just an experimental project, I'm proud
                    of what I accomplished. Bantr isn't just a chat app it's a
                    project I built to bring people together, even if only for a
                    short while.
                  </p>

                  {/* <p className="text-[#D8D8D8] sm:text-3xl xss:text-[1.7rem] xss:leading-7 font-semibold  text-center mt-10">
                    Stay tuned, Bantr has a lot more in store!
                  </p> */}
                </div>
                <div className="flex justify-between w-full mt-8">
                  <div className="flex gap-1 justify-center items-center">
                    {/* <i className="ri-loop-left-fill"></i> */}
                    <p className="text-xs text-[#bbbbbb]">
                      Last Updated on 8 November, 2024
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