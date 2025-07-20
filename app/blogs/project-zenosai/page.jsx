import React from "react";
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
              <div className="absolute sm:-top-[1.15rem] sm:-left-3 xs:-top-[0.65rem] xss:-left-1 xss:-top-[0.5rem] sm:w-6 sm:h-6 xss:w-2 xss:h-2 flex items-center justify-center">
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
                <h1 className="text-[#D8D8D8] md:text-4xl sm:sm:text-3xl xss:text-[1.7rem] xss:leading-7 xss:text-2xl font-semibold text-center font-sans">
                  Zenos AI 2.0: Building an Advanced Multi-Model AI Chat Platform
                </h1>
                <div className="flex gap-2 mt-4 flex-wrap justify-center">
                  <TechStack url={"react.svg"} name={"React"} />
                  <TechStack url={"nodejs.svg"} name={"NodeJS"} />
                  <TechStack url={"mongo.webp"} name={"MongoDB"} />
                  <TechStack url={"socket.svg"} name={"Socket.IO"} />
                  <TechStack url={"git.svg"} name={"Git"} />
                  <TechStack url={"tailwind.svg"} name={"Tailwind"} />
                </div>
                <div className="flex justify-between w-full mt-8">
                  <div className="flex gap-1 justify-center items-center">
                    <i className="ri-time-line text-xs text-[#bbbbbb]"></i>
                    <p className="text-xs text-[#bbbbbb] font-medium">6 min read</p>
                  </div>
                  <p className="text-xs text-[#bbbbbb] font-medium">
                    October 2024 - February 2025
                  </p>
                </div>
                <div className="mt-10 text-[#CCCCCC] leading-relaxed space-y-4 font-sans">
                  <h2 className="text-[#D8D8D8] sm:text-3xl xss:text-[1.7rem] xss:leading-7 font-semibold">
                    The Evolution of Zenos AI
                  </h2>
                  <p className="text-[#DBDBDB] pb-5">
                    What started as a simple AI chat interface has transformed into a comprehensive
                    multi-model AI platform. After the initial version's success, I completely rebuilt
                    Zenos AI to support an extensive range of state-of-the-art models including
                    O3-Mini, Flux Pro, GPT-4o, Claude 3.7, and many more—all accessible for free.
                    This ambitious rebuild challenged my full-stack development skills and deepened
                    my understanding of AI integration at scale.
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
                  {/* <div className="relative pb-[56.25%] h-0 overflow-hidden">
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
                  </div> */}
                  <h2 className="text-[#D8D8D8] sm:text-3xl xss:text-[1.7rem] xss:leading-7 font-semibold">
                    Expanded AI Model Integration
                  </h2>
                  <p className="text-[#DBDBDB]">
                    The standout feature of Zenos AI 2.0 is its extensive model support. Users can now 
                    access multiple cutting-edge AI models in a single interface:
                  </p>
                  <ul className="list-disc ml-5 space-y-2 pb-5">
                    <li className="text-[#DBDBDB]">
                      <span className="font-medium text-[#D8D8D8] font-mono">
                        Claude 3.7 Sonnet
                      </span>
                      : Anthropic's latest reasoning-focused model with exceptional language capabilities.
                    </li>
                    <li className="text-[#DBDBDB]">
                      <span className="font-medium text-[#D8D8D8] font-mono">
                        GPT-4o
                      </span>
                      : OpenAI's multimodal model for handling both text and images with human-like understanding.
                    </li>
                    <li className="text-[#DBDBDB]">
                      <span className="font-medium text-[#D8D8D8] font-mono">
                        Flux Pro
                      </span>
                      : A high-performance model optimized for creativity and problem-solving.
                    </li>
                    <li className="text-[#DBDBDB]">
                      <span className="font-medium text-[#D8D8D8] font-mono">
                        O3-Mini
                      </span>
                      : A lightweight, responsive model perfect for quick interactions.
                    </li>
                    {/* <li className="text-[#DBDBDB]">
                      <span className="font-medium text-[#D8D8D8] font-mono">
                        Gemini Ultra
                      </span>
                      : Google's advanced AI with exceptional reasoning capabilities.
                    </li> */}
                  </ul>

                  <h2 className="text-[#D8D8D8] sm:text-3xl xss:text-[1.7rem] xss:leading-7 font-semibold">
                    Enhanced Tech Stack
                  </h2>
                  <p className="text-[#DBDBDB]">
                    To support this expanded functionality, I significantly upgraded the technology behind Zenos AI:
                  </p>
                  <ul className="list-disc ml-5 space-y-2 pb-5">
                    <li className="text-[#DBDBDB]">
                      <span className="font-medium text-[#D8D8D8] font-mono">
                        React.js with Next.js
                      </span>
                      : Provides enhanced performance and a more responsive UI with server-side rendering capabilities.
                    </li>
                    <li className="text-[#DBDBDB]">
                      <span className="font-medium text-[#D8D8D8] font-mono">
                        Express.js Microservices
                      </span>
                      : A modular backend architecture that handles requests to different AI provider APIs.
                    </li>
                    <li className="text-[#DBDBDB]">
                      <span className="font-medium text-[#D8D8D8] font-mono">
                        Socket.IO
                      </span>
                      : Implements real-time streaming of AI responses, mimicking the experience of popular platforms.
                    </li>
                    <li className="text-[#DBDBDB]">
                      <span className="font-medium text-[#D8D8D8] font-mono">
                        MongoDB Atlas
                      </span>
                      : Stores conversation history and user preferences securely in the cloud.
                    </li>
                    <li className="text-[#DBDBDB]">
                      <span className="font-medium text-[#D8D8D8] font-mono">
                        Hono.js
                      </span>
                      : Implements efficient caching to reduce API costs and improve response times.
                    </li>
                    <li className="text-[#DBDBDB]">
                      <span className="font-medium text-[#D8D8D8] font-mono">
                        Tailwind CSS
                      </span>
                      : Creates a polished, responsive UI with dark mode support and customizable themes.
                    </li>
                  </ul>

                  <h2 className="text-[#D8D8D8] sm:text-3xl xss:text-[1.7rem] xss:leading-7 font-semibold">
                    Advanced Features
                  </h2>
                  <p className="text-[#DBDBDB]">
                    The rebuilt platform includes several advanced features that set it apart:
                  </p>
                  <ul className="list-disc ml-5 space-y-2 pb-5">
                    <li className="text-[#DBDBDB]">
                      <span className="font-medium text-[#D8D8D8] font-mono">
                        Model Switching
                      </span>
                      : Users can seamlessly switch between AI models mid-conversation to compare outputs.
                    </li>
                    <li className="text-[#DBDBDB]">
                      <span className="font-medium text-[#D8D8D8] font-mono">
                        Conversation Memory
                      </span>
                      : All chats are automatically saved and can be resumed across sessions.
                    </li>
                    <li className="text-[#DBDBDB]">
                      <span className="font-medium text-[#D8D8D8] font-mono">
                        File Upload Support
                      </span>
                      : Users can upload images and documents for analysis by compatible AI models soon.
                    </li>
                    <li className="text-[#DBDBDB]">
                      <span className="font-medium text-[#D8D8D8] font-mono">
                        Code Highlighting
                      </span>
                      : Automatic syntax highlighting for code snippets with copy functionality.
                    </li>
                    <li className="text-[#DBDBDB]">
                      <span className="font-medium text-[#D8D8D8] font-mono">
                        Markdown Support
                      </span>
                      : Rich text formatting for more expressive AI outputs.
                    </li>
                  </ul>

                  <h2 className="text-[#D8D8D8] sm:text-3xl xss:text-[1.7rem] xss:leading-7 font-semibold">
                    Technical Challenges
                  </h2>
                  <p className="text-[#DBDBDB]">
                    Building Zenos AI 2.0 presented several significant challenges:
                  </p>
                  <ul className="list-disc ml-5 space-y-2 pb-5">
                    <li className="text-[#DBDBDB]">
                      <span className="font-medium text-[#D8D8D8] font-mono">
                        API Rate Limiting
                      </span>
                      : Implementing a fair usage system to prevent API quota exhaustion while keeping the service free.
                    </li>
                    <li className="text-[#DBDBDB]">
                      <span className="font-medium text-[#D8D8D8] font-mono">
                        Response Streaming
                      </span>
                      : Developing a reliable streaming architecture that works consistently across all AI providers.
                    </li>
                    <li className="text-[#DBDBDB]">
                      <span className="font-medium text-[#D8D8D8] font-mono">
                        Hosting Costs
                      </span>
                      : After exploring free hosting options, I had to transition to paid hosting to ensure reliability and performance.
                    </li>
                    <li className="text-[#DBDBDB]">
                      <span className="font-medium text-[#D8D8D8] font-mono">
                        Authentication System
                      </span>
                      : Building a secure but user-friendly authentication flow to manage user sessions.
                    </li>
                    <li className="text-[#DBDBDB]">
                      <span className="font-medium text-[#D8D8D8] font-mono">
                        Error Handling
                      </span>
                      : Creating graceful fallbacks when API services experience downtime or rate limiting.
                    </li>
                  </ul>

                  <h2 className="text-[#D8D8D8] sm:text-3xl xss:text-[1.7rem] xss:leading-7 font-semibold">
                    Hosting Solution
                  </h2>
                  <p className="text-[#DBDBDB]">
                    Finding the right hosting solution was particularly challenging. I initially explored free options like:
                  </p>
                  <ul className="list-disc ml-5 space-y-2 pb-5">
                    <li className="text-[#DBDBDB]">
                      <span className="font-medium text-[#D8D8D8] font-mono">
                        Vercel
                      </span>
                      : Great for the frontend but limited for handling long-running WebSocket connections.
                    </li>
                    <li className="text-[#DBDBDB]">
                      <span className="font-medium text-[#D8D8D8] font-mono">
                        Render
                      </span>
                      : Free tier had performance issues with concurrent connections.
                    </li>
                    <li className="text-[#DBDBDB]">
                      <span className="font-medium text-[#D8D8D8] font-mono">
                        Railway
                      </span>
                      : Promising but quickly exceeded the free resource limits.
                    </li>
                  </ul>
                  <p className="text-[#DBDBDB] pb-5">
                    Ultimately, I opted for a paid hosting with a custom Nginx setup to handle WebSocket connections efficiently. 
                    This significantly improved reliability and allowed for proper scaling as user numbers grew.
                  </p>

                  <h2 className="text-[#D8D8D8] sm:text-3xl xss:text-[1.7rem] xss:leading-7 font-semibold">
                    Future Enhancements
                  </h2>
                  <p className="text-[#DBDBDB]">
                    While Zenos AI 2.0 is now fully functional, I'm planning several enhancements:
                  </p>
                  <ul className="list-disc ml-5 space-y-2 pb-5">
                    <li className="text-[#DBDBDB]">
                      <span className="font-medium text-[#D8D8D8] font-mono">
                        Custom Instructions
                      </span>
                      : Allowing users to set persistent preferences for each AI model.
                    </li>
                    <li className="text-[#DBDBDB]">
                      <span className="font-medium text-[#D8D8D8] font-mono">
                        API Access
                      </span>
                      : Building a public API to allow developers to integrate Zenos AI into their applications.
                    </li>
                    <li className="text-[#DBDBDB]">
                      <span className="font-medium text-[#D8D8D8] font-mono">
                        Voice Interface
                      </span>
                      : Adding speech-to-text and text-to-speech capabilities for hands-free interaction.
                    </li>
                    <li className="text-[#DBDBDB]">
                      <span className="font-medium text-[#D8D8D8] font-mono">
                        Advanced Plugins
                      </span>
                      : Integrating with external tools like search engines, calculators, and data visualization tools.
                    </li>
                  </ul>

                  <h2 className="text-[#D8D8D8] sm:text-3xl xss:text-[1.7rem] xss:leading-7 font-semibold">
                    Lessons Learned
                  </h2>
                  <p className="text-[#DBDBDB] pb-5">
                    This project taught me valuable lessons about building production-ready applications:
                  </p>
                  <ul className="list-disc ml-5 space-y-2 pb-5">
                    <li className="text-[#DBDBDB]">
                      <span className="font-medium text-[#D8D8D8] font-mono">
                        API Cost Management
                      </span>
                      : Implementing intelligent caching and throttling is essential when working with paid API services.
                    </li>
                    <li className="text-[#DBDBDB]">
                      <span className="font-medium text-[#D8D8D8] font-mono">
                        Error Resilience
                      </span>
                      : Building robust error handling is crucial for maintaining a good user experience.
                    </li>
                    <li className="text-[#DBDBDB]">
                      <span className="font-medium text-[#D8D8D8] font-mono">
                        Performance Optimization
                      </span>
                      : Small optimizations like connection pooling and efficient state management make a huge difference at scale.
                    </li>
                    <li className="text-[#DBDBDB]">
                      <span className="font-medium text-[#D8D8D8] font-mono">
                        User Feedback
                      </span>
                      : Incorporating early user feedback was invaluable for prioritizing features and fixing usability issues.
                    </li>
                  </ul>

                  <h2 className="text-[#D8D8D8] sm:text-3xl xss:text-[1.7rem] xss:leading-7 font-semibold">
                    Final Thoughts
                  </h2>
                  <p className="text-[#DBDBDB] pb-5">
                    Rebuilding Zenos AI into a multi-model platform has been the most challenging and rewarding project of my development journey. 
                    What began as a simple experiment has evolved into a robust application that rivals commercial offerings in functionality. 
                    The technical skills I've gained—from API integration to scalable architecture design—have solidified my confidence as a full-stack developer. 
                    I'm proud to offer this powerful tool to users for free and excited to continue expanding its capabilities in the future.
                  </p>
                </div>
                <div className="flex justify-between w-full mt-8">
                  <div className="flex gap-1 justify-center items-center">
                    <p className="text-xs text-[#bbbbbb]">
                      Last Updated on February 21, 2025
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