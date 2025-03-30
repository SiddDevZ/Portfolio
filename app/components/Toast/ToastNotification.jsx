"use client";
import React, { useEffect, useState } from 'react';

const ToastNotification = ({ id, message, type, removing, onClose }) => {
  const [progress, setProgress] = useState(100);
  const [hover, setHover] = useState(false);
  
  const getToastStyles = () => {
    const baseStyles = "relative flex items-center max-w-md w-full px-4 py-3 rounded-xl shadow-lg transition-all duration-300 border transform";
    const typeStyles = {
      success: "bg-[#00eeff10] border-[#00eeff30] text-white",
      error: "bg-[#ee00ff10] border-[#ee00ff30] text-white",
      info: "bg-[#ffffff10] border-[#ffffff20] text-white"
    };
    
    const animationStyles = removing
      ? "translate-x-4 opacity-0"
      : "translate-x-0 opacity-100";
    
    return `${baseStyles} ${typeStyles[type] || typeStyles.info} ${animationStyles}`;
  };
  
  const getIconByType = () => {
    switch(type) {
      case 'success':
        return (
          <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3 bg-[#00eeff20]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00eeff]" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        );
      case 'error':
        return (
          <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3 bg-[#ee00ff20]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#ee00ff]" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
        );
      default:
        return (
          <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3 bg-[#ffffff10]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zm-1 9a1 1 0 102 0v-5a1 1 0 10-2 0v5z" clipRule="evenodd" />
            </svg>
          </div>
        );
    }
  };
  
  useEffect(() => {
    if (hover) return;
    
    const timer = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevProgress - 0.5;
      });
    }, 25);
    
    return () => clearInterval(timer);
  }, [hover]);
  
  return (
    <div 
      className={getToastStyles()}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {getIconByType()}
      
      <div className="flex-1">
        <p className="text-sm font-medium">{message}</p>
      </div>
      
      <button
        onClick={onClose}
        className="ml-3 text-white/60 hover:text-white transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      
      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-white/10 w-full overflow-hidden rounded-b-lg">
        <div 
          className={`h-full ${type === 'success' ? 'bg-[#00eeff]' : type === 'error' ? 'bg-[#ee00ff]' : 'bg-white/40'}`}
          style={{ width: `${progress}%`, transition: 'width linear 25ms' }}
        />
      </div>
    </div>
  );
};

export default ToastNotification; 