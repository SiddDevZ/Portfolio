"use client";
import React, { useState, useRef, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Charles",
    role: "Numberplate Business",
    image: "https://cdn.discordapp.com/avatars/830462453992259635/52f40b37b023fe70fa794387159b80b6.webp?size=160",
    content: "Siddharth exceeded all our expectations. His ability to translate our vision into a stunning website was impressive. He was responsive, creative, and delivered on time.",
    color: "#00eeff"
  },
  {
    id: 3,
    name: "Betrey",
    role: "Portfolio Website",
    image: "https://i.imgur.com/JbwBQee.png",
    content: "5 out of 5 stars! He delivered a fully functional website with a great design that exceeded my expectations. He was highly responsive to my requests and provided excellent value for the price.",
    color: "#ee00ff"
  },
  {
    id: 4,
    name: "Mearda",
    role: "Product Manager",
    image: "/Photos_2pTzMMvYla.webp",
    content: "As a developer, I had all the code ready, but my website looked terrible. I was feeling stuck until Siddharth helped me explore new ideas and craft a stunning website!",
    color: "#00eeff"
  },
  {
    id: 2,
    name: "Mohd Sameer",
    role: "Digital Marketing",
    image: "/mohd.webp",
    content: "Siddharth built us a clean, professional, and user-friendly website while ensuring a smooth process. He was responsive, made changes as needed, and offered great suggestions. Highly recommended!",
    color: "#ee00ff"
  }
];

const Testimonials = () => {
  return (
    <div id="testimonials-section" className="unselectable px-4 sm:px-6 py-10 sm:py-14 md:py-20 md:px-12 lg:px-24 max-w-[100rem] mx-auto relative z-10">
      <div className="flex flex-col items-center justify-center pb-5 sm:pb-7 md:pb-16">
        <div className="w-[25px] sm:w-[30px] h-[3px] bg-[#8000ff]/50 rounded-full mb-3 sm:mb-4"></div>
        <h2 className="font-prata unselectable text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
          What Clients Say
        </h2>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8'>
        {testimonials.slice(0, 4).map((testimonial) => (
          <div 
            key={testimonial.id}
            className='bg-[#161616] hover:-translate-y-0.5 rounded-xl px-4 sm:px-6 py-3 sm:py-4 flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:shadow-[#0e0e0e] border border-[#252525]'
          >
            <div className='relative mb-3 sm:mb-4'>
              <p className='text-white/80 font-inter text-sm sm:text-base leading-relaxed pt-2 sm:pt-4 pl-2 sm:pl-3 italic'>
                {testimonial.content}
              </p>
            </div>
            
            <div className='mt-auto pt-3 sm:pt-4 flex items-center border-t border-[#252525]'>
              <div 
                className='w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] rounded-full bg-cover bg-center'
                style={{ backgroundImage: `url(${testimonial.image})` }}
              ></div>
              <div className='ml-3 sm:ml-4'>
                <h4 className='text-white text-sm sm:text-base font-inter font-semibold'>{testimonial.name}</h4>
                <p className='text-white/50 font-inter text-xs sm:text-sm'>{testimonial.role}</p>
              </div>
              <div 
                className='ml-auto w-1.5 sm:w-2 h-6 sm:h-8 opacity-65 rounded-full' 
                style={{ backgroundColor: testimonial.color }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;