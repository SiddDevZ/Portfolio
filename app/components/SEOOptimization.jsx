"use client";

import { useEffect } from 'react';
export default function SEOOptimization() {
  useEffect(() => {
    const metaTags = [
      { name: 'geo.region', content: 'IN-MP' },
      { name: 'geo.placename', content: 'Indore' },
      { name: 'geo.position', content: '22.7196;75.8577' },
      { name: 'ICBM', content: '22.7196, 75.8577' },
      { name: 'revisit-after', content: '7 days' },
      { name: 'distribution', content: 'global' },
      { name: 'rating', content: 'general' },
    ];

    metaTags.forEach(tag => {
      const meta = document.createElement('meta');
      meta.name = tag.name;
      meta.content = tag.content;
      document.head.appendChild(meta);
    });

    return () => {
      metaTags.forEach(tag => {
        const meta = document.querySelector(`meta[name="${tag.name}"]`);
        if (meta) document.head.removeChild(meta);
      });
    };
  }, []);

  return (
    <>
      <div className="sr-only" aria-hidden="true">
        <h2>About Siddharth Meena</h2>
        <p>
          Siddharth Meena is a skilled full-stack developer India, with expertise in React, Next.js, 
          Node.js, and UI/UX design. With over 3 years of experience, Siddharth has completed more than 30 projects 
          for clients across various industries. He is the founder of Luvo Web, a web development agency that specializes 
          in creating high-quality websites and web applications.
        </p>
        <h3>Siddharth Meena's Skills</h3>
        <ul>
          <li>React.js and Next.js Development</li>
          <li>Node.js Backend Development</li>
          <li>UI/UX Design and Implementation</li>
          <li>Tailwind CSS Expertise</li>
          <li>Full-Stack Web Development</li>
          <li>C/C++ Programming</li>
          <li>Python Development</li>
          <li>JavaScript and TypeScript</li>
          <li>Frontend Development</li>
          <li>Responsive Web Design</li>
        </ul>
        <h3>Portfolio and Projects by Siddharth Meena</h3>
        <p>
          Siddharth's portfolio showcases various projects including UnchainedGPT (an AI-powered platform), 
          Luvo Web (development agency) , Bantr (chatting app), ScaleOxPerts (Digital Marketing Company website),
          and Interactive Bio Page.
        </p>
        <h3>Contact Information</h3>
        <p>Email: siddz.dev@gmail.com</p>
        <p>Social Media: GitHub, Twitter, Discord</p>
      </div>
    </>
  );
} 