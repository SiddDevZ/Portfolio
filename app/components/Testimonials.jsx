"use client";
import React, { useState, useRef, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Alex Mitchell",
    role: "CEO at TechFlow",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "Siddharth exceeded all our expectations. His ability to translate our vision into a stunning website was impressive. He was responsive, creative, and delivered on time.",
    color: "#00eeff"
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Founder, Designify",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    content: "Working with Siddharth was a game-changer for our startup. He understood our needs perfectly and created a web experience that has significantly increased our conversions.",
    color: "#ee00ff"
  },
  {
    id: 3,
    name: "James Cooper",
    role: "Marketing Director",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    content: "The website Siddharth built for us has received countless compliments. His attention to detail and technical expertise made the entire process smooth and enjoyable.",
    color: "#00eeff"
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    role: "Product Manager",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    content: "Siddharth's work has significantly improved our user engagement. His intuitive designs and clean code have made our platform a joy to use for our customers.",
    color: "#ee00ff"
  }
];

const Testimonials = () => {
  return (
    <div id="testimonials-section" className="unselectable px-4 sm:px-6 py-14 sm:py-20 md:px-12 lg:px-24 max-w-[100rem] mx-auto relative z-10">
      <div className="flex flex-col items-center justify-center pb-7 sm:pb-16">
        <div className="w-[30px] h-[3px] bg-[#8000ff]/50 rounded-full mb-4"></div>
        <h2 className="font-prata unselectable text-white text-2xl sm:text-3xl md:text-4xl text-center">
          What Clients Say
        </h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>
        {testimonials.slice(0, 4).map((testimonial) => (
          <div 
            key={testimonial.id}
            className='bg-[#161616] rounded-xl px-6 py-4 flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:shadow-[#0e0e0e] border border-[#252525]'
          >
            <div className='relative mb-4'>
              {/* <span className="absolute text-5xl font-serif text-opacity-20 -top-2 -left-1 text-white/10">"</span> */}
              <p className='text-white/80 font-inter text-base leading-relaxed pt-4 pl-3 italic'>
                {testimonial.content}
              </p>
            </div>
            
            <div className='mt-auto pt-4 flex items-center border-t border-[#252525]'>
              <div 
                className='w-[50px] h-[50px] rounded-full bg-cover bg-center'
                style={{ backgroundImage: `url(${testimonial.image})` }}
              ></div>
              <div className='ml-4'>
                <h4 className='text-white text-base font-inter font-semibold'>{testimonial.name}</h4>
                <p className='text-white/50 font-inter text-sm'>{testimonial.role}</p>
              </div>
              <div 
                className='ml-auto w-2 h-8 opacity-65 rounded-full' 
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