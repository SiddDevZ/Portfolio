'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const Card = ({ children, className, link, isExternal = false, ...props }) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();

    if (isExternal || link.startsWith('http') || link.startsWith('https')) {
      window.open(link, '_blank', 'noopener,noreferrer');
    } else {
      router.push(link);
    }
  };

  return (
    <div
      className={`rounded-lg border cursor-pointer border-neutral-800 bg-neutral-900/50 ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;