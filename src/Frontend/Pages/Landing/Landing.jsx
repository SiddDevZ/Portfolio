import React from 'react';
import './Landing.css';
import ParticlesComponent from '../../Components/Particles/Particles';
import NavBar from '../../Components/NavBar/NavBar'

const Landing = () => {
  return (
    <>
      <div className="-z-10 full-screen">
        <ParticlesComponent />
      </div>
      <div className="main">
        <NavBar />
        <h1 className="text-white">Landing</h1>
      </div>
    </>
  );
};

export default Landing;