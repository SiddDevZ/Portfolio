import React, { useState, Suspense } from 'react';
import './Landing.css';
// import ParticlesComponent from '../../Components/Particles/Particles';
import NavBar from '../../Components/NavBar/NavBar'
import TechStack from '../../Components/TechStack/TechStack'
import 'remixicon/fonts/remixicon.css'
const Project = React.lazy(() => import('../../Components/Project/Project'));
import { Toaster, toast } from "sonner";
import axios from 'axios';

const Landing = () => {

  const [nameError, setNameError] = useState(false);
  const [name, setName] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [email, setEmail] = useState("");
  const [messageError, setMessageError] = useState(false);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // const memoizedParticles = useMemo(() => <ParticlesComponent />, []);
  
  const handleContactClick = () => {
    const contact = document.getElementById("contact");
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const handleSubmit = async (e) => {
    if (submitted === true) {return}
    var data = {
      service_id: 'service_5lt93fb',
      template_id: 'template_cxxitvt',
      user_id: 'LkCnVmcFfXTXGYbVF',
      template_params: {
          'from_name': name,
          'to_name': 'Siddharth',
          'email_id': email,
          'message': message
      }
    };

    axios.post('https://api.emailjs.com/api/v1.0/email/send', data)
    .then(() => {
      toast.success("Message Sent!", { position: "bottom-right" });
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => {
        setSubmitted(false);
      }, 7000)
    })
    .catch((error) => {
      toast.error("Failed, Please try sending via Email!", { position: "bottom-right" });
    });
  };

  return (
    <>
      <div className="full-screen">
        {/* <div className='-z-10'>
          {memoizedParticles}
        </div> */}
        <Toaster richColors theme="dark" />
      </div>
      <NavBar handleContactClick={handleContactClick} />
      <div className="main flex flex-col items-center px-7">
        <div className='pt-10 max-w-[52rem] main-area mb-5'>
          <div className='sec-1'>
            <h1 className='sm:text-[2.4rem] xs:text-[1.85rem] xss:text-[2rem] sm:leading-[3.4rem] xs:leading-[2.9rem] xss:leading-[2.5rem] xs:mb-0 xss:mb-[0.4rem] font-pop font-extrabold'>Hey, I'm <br className='xs:hidden xss:block' /><span className='bg-gradient-to-r from-[#FCCF31] to-[#F55555] text-transparent bg-clip-text'>Siddharth Jorwal</span></h1>
            <h2 className='font-inter md:text-2xl xss:text-[1.15rem] leading-7 font-medium text-[#e6e6e6]'>Full-Stack Web Developer, Designer, and Software Tinkerer</h2>
          </div>
          <div className='sec-2'>
            <p className='text-[#BBBBBB] mt-8 font-pop font-medium xs:text-lg xss:text-[1.09rem] tracking-[0.015em]'>I’m Siddharth! <span className='text-[#F2F2F2]'>I have 3+ years of experience in web dev</span>, I spend most of my time in <span className='text-[#F2F2F2]'>coding and business</span>, My passion lies in dreaming ideas and bringing them to life. If this combination interests you, <span className='text-[#F2F2F2]'>feel free to connect with me!</span></p>
            <p className='text-[#BBBBBB] mt-5 font-pop font-medium xs:text-lg xss:text-[1.09rem] tracking-wide'>Outside of programming, I enjoy doing cinematography and sports.</p>
            <div className='flex gap-2 mt-[0.15rem]'>
              <div className='flex flex-wrap gap-[0.35rem]'>
              <p className='text-[#F2F2F2] font-pop font-medium xs:text-lg xss:text-[1.09rem] whitespace-nowrap'>My main tech stack is</p>
                <TechStack url={"react.webp"} name={"React"} />
                <TechStack url={"nodejs.webp"} name={"NodeJS"} />
                <TechStack url={"mongo.webp"} name={"MongoDB"} />
                <TechStack url={"git.webp"} name={"Git"} />
                <TechStack url={"tailwind.webp"} name={"Tailwind"} />
                <TechStack url={"python.webp"} name={"Python"} />
              </div>
            </div>
            <p className='mt-7 tracking-wide text-[#F2F2F2] font-pop font-light xs:text-lg xss:text-[1.09rem]'>If you want me to redesign your website, or make you a new one, feel free to contact me, and we can discuss about it together. </p>
          </div>
          <div className='sec-3'>
            <p className='text-[#BBBBBB] mt-5 font-pop font-medium text-lg tracking-wide'>Find me on</p>
            <div className='socials flex flex-wrap items-center'>
              <a href="https://github.com/SiddDevZ" target="_blank" rel="noopener noreferrer" className='flex mr-[1rem] items-center gap-[0.35rem] group hover:cursor-pointer' >
                <i className="ri-github-fill text-2xl text-[#F2F2F2]"></i>
                <p className=' text-[#F2F2F2] group-hover:underline'>GitHub</p>
              </a>
              <a href="https://x.com/epicsidd" target="_blank" rel="noopener noreferrer" className='flex mr-[1rem] items-center gap-[0.35rem] group hover:cursor-pointer'>
                <i className="ri-twitter-x-line text-[1.31rem] text-[#F2F2F2]"></i>
                <p className=' text-[#F2F2F2] group-hover:underline'>Twitter</p>
              </a>
              <a href="https://discordapp.com/users/273352781442842624" target="_blank" rel="noopener noreferrer" className='flex mr-[1rem] items-center gap-[0.35rem] group hover:cursor-pointer'>
                <i className="ri-discord-fill text-2xl text-[#F2F2F2]"></i>
                <p className=' text-[#F2F2F2] group-hover:underline'>Discord</p>
              </a>
              <a href="https://www.instagram.com/siddharth_jorwal/" target="_blank" rel="noopener noreferrer" className='flex mr-[1rem] items-center gap-[0.35rem] group hover:cursor-pointer'>
                <i className="ri-instagram-line text-[1.41rem] text-[#F2F2F2]"></i>
                <p className=' text-[#F2F2F2] group-hover:underline'>Instagram</p>
              </a>
            </div>
          </div>

          <div className='sec-4 mt-6'>
            <div className="wavy-heading inline-flex items-center">
              <h1 className='text-[2.4rem] sm:text-[2.2rem] xs:text-[2rem] xss:text-[1.9rem] font-pop font-extrabold cursor-default'>Recent Projects</h1>
              <div className="wavy-line"></div>
            </div>

            <div className='projects pt-9 flex md:gap-6 sm:gap-4 xs:gap-2 xs:flex-nowrap xss:flex-wrap justify-center'>
              <Suspense fallback={<div>Loading...</div>}>
                <Project title={"Bantr - Chatting App"} image="bantr.webp" link={"https://bantr-omega.vercel.app/"} lang={["React", "Node.js", "Express", "SocketIO", "MongoDB"]} description={"Real-Time chatting app similar to Discord. Servers, channels, direct messages, and much more.."} workInProgress={true}/>
                <Project title={"CandlynAI - AI ChatBot"} image="candlyn.webp" link={"https://candlyn-ai.vercel.app/"} lang={["React", "Node.js", "Express", "Apis", "MongoDB"]} description={"Interactive ChatBot, Powered by Meta's Llama model, with a visually appealing and Responsive interface."}/>
              </Suspense>
            </div>
          </div>

          <div className='sec-5 sm:mt-10 xss:mt-8'>
            <div className='w-full flex'>
              <div className="wavy-heading inline-flex items-center">
                <h1 className='text-[2.4rem] font-pop font-extrabold cursor-default'>Contact Me</h1>
                <div className="wavy-line"></div>
              </div>
            </div>
            <div className='w-full flex'>
              <p className='mt-5 md:w-[85%] xss:w-full sm:w-full text-[#dddddd] font-pop font-medium text-lg tracking-wide'>If you have any inquiries, or if you want to hire me for any project, feel free to reach out to me, You can also contact me via email at <span className='text-[#38af23]'>siddz.dev@gmail.com</span></p>
            </div>
            <div className='mt-3 flex flex-col'>
              <div className='inline-flex flex-col xs:mt-0 xss:mt-2 gap-1'>
                {/* <a href="https://www.instagram.com/siddharth_jorwal/" className='flex items-center gap-[0.4rem] group hover:cursor-pointer' target="_blank" rel="noopener noreferrer">
                  <i className="ri-whatsapp-line text-[1.35rem] text-[#e6e6e6]"></i>
                  <h1 className='underline decoration-[0.2px] -translate-y-[0.1rem] text-[#f1f1f1] text-base underline-offset-4 group-hover:decoration-[#34c31e] transition-all duration-100'>Message me on Whatsapp</h1>
                </a>
                <a href="https://www.instagram.com/siddharth_jorwal/" className='flex items-center gap-[0.4rem] group hover:cursor-pointer' target="_blank" rel="noopener noreferrer">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_31_4342)"><path d="M17.8357 0.164296C17.9136 0.242295 17.9668 0.341455 17.9888 0.449458C18.0108 0.557462 18.0006 0.669549 17.9595 0.771796L11.4131 17.1372C11.3554 17.2813 11.2591 17.4067 11.1347 17.4996C11.0103 17.5925 10.8627 17.6493 10.7081 17.6637C10.5536 17.6781 10.398 17.6496 10.2586 17.5814C10.1192 17.5131 10.0013 17.4076 9.91795 17.2767L6.3427 11.6573L0.723329 8.08205C0.592061 7.99878 0.486349 7.88086 0.417857 7.74132C0.349365 7.60177 0.320756 7.44601 0.335187 7.29123C0.349617 7.13645 0.406526 6.98867 0.499635 6.86419C0.592743 6.7397 0.718431 6.64336 0.862829 6.5858L17.2282 0.0416714C17.3305 0.00051021 17.4425 -0.00970448 17.5505 0.0122962C17.6585 0.0342969 17.7577 0.0875434 17.8357 0.165421V0.164296ZM7.46545 11.3288L10.5716 16.209L15.8962 2.89805L7.46545 11.3288ZM15.1008 2.10267L1.78983 7.4273L6.6712 10.5323L15.1008 2.10267Z" fill="white"/></g><defs><clipPath id="clip0_31_4342"><rect width="18" height="18" fill="white"/></clipPath></defs></svg>
                  <h1 className='underline decoration-[0.2px] -translate-y-[0.1rem] text-[#f1f1f1] text-base underline-offset-4 group-hover:decoration-[#34c31e] transition-all duration-100'>Send me an Email</h1>
                </a>
                <button className='flex gap-[0.6rem] items-center w-[45%] justify-center px-2 py-1 bg-[#12c152] rounded-lg overflow-hidden hover:bg-[#f1f1f1] transition-all hover:scale-[1.01] ease-in-out text-btn'>
                  <i className="ri-whatsapp-line text-[1.35rem] text-black"></i>
                  <h1 className='decoration-[0.2px] -translate-y-[0.1rem] text-black text-base underline-offset-4 group-hover:decoration-[#34c31e] transition-all duration-100'>Whatsapp</h1>
                </button> */}
              </div>
              <div className='contact-form mt-2' id='contact'>
                <div className='contact-sec-1 w-full flex justify-between'>
                  <div className='contact-input w-[40%]'>
                    <label className="block mb-[0.4rem] text-sm font-semibold" htmlFor="Name">
                      Your Name
                    </label>
                    <input 
                      id="Name"
                      placeholder="John Doe"
                      value={name}
                      onClick={() => setNameError(false)}
                      onChange={(e) => setName(e.target.value)}
                      className={`${nameError ? "bg-[#3c0000] input-error" : "bg-[#1A1A1A]"} h-12 w-full placeholder-[#8d8d8d] flex items-center lg:px-6 md:px-4 sm:px-3 xss:px-[0.78rem] md:text-xl xs:text-lg xss:text-base rounded-md border-2 border-[#c6c6c6] text-white focus:outline-none focus:ring-0 focus:border-slate-100`}
                    />
                  </div>
                  <div className='contact-input w-[57%]'>
                    <label className="block mb-[0.4rem] text-sm font-semibold" htmlFor="email">
                      Email
                    </label>
                    <input 
                      id="email"
                      type="email"
                      placeholder="Johndoe@gmail.com"
                      value={email}
                      onClick={() => setEmailError(false)}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`${emailError ? "bg-[#3c0000] input-error" : "bg-[#1A1A1A]"} h-12 w-full placeholder-[#8d8d8d] flex items-center lg:px-6 md:px-4 sm:px-3 xss:px-[0.78rem] md:text-xl xs:text-lg xss:text-base rounded-md border-2 border-[#c6c6c6] text-white focus:outline-none focus:ring-0 focus:border-slate-100`}
                    />
                  </div>
                </div>
                <div className='contact-sec-2 mt-4'>
                  <label className="block mb-[0.4rem] text-sm font-semibold" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Leave me a message..."
                    value={message}
                    onClick={() => setMessageError(false)}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`${messageError ? "bg-[#3c0000] input-error" : "bg-[#1A1A1A]"} h-48 w-full placeholder-[#8d8d8d] flex items-center lg:px-6 md:px-4 sm:px-3 xss:px-[0.78rem] md:pt-4 sm:pt-3 xss:pt-2 md:text-xl xs:text-lg xss:text-base rounded-md border-2 border-[#c6c6c6] text-white focus:outline-none focus:ring-0 focus:border-slate-100 resize-none`}
                  ></textarea>
                </div>
                <div className='mt-5'>
                  <button onClick={handleSubmit} className='flex items-center gap-[0.4rem] font-pop text-xl px-[1.7rem] py-[0.4rem] bg-[#ffffff] text-black rounded-md overflow-hidden hover:bg-[#f1f1f1] transition-all hover:scale-[1.01] ease-in-out text-btn'>
                    Send Message
                    <i className={`${submitted ? "ri-check-fill" : "ri-arrow-right-up-line"} text-black translate-y-[0.1rem] font-medium`}></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className='h-[1.1px] w-full bg-[#3f3f3f] mt-24 mb-2'></div>
            <p className='font-pop text-xs text-[#a8a8a8]'>© 2024 Design and Developed by Siddharth Jorwal</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;