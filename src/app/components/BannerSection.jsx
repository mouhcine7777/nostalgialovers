"use client";
import React from 'react';

const BannerSection = () => {
  return (
    <section className="w-full">
      <a href="https://uradio.ma/" target="_blank" rel="noopener noreferrer">
        {/* Desktop Banner */}
        <img 
          src="/banneruradiodesktop.webp" 
          alt="Banner" 
          className="w-full h-auto object-cover hidden md:block cursor-pointer"
        />
        
        {/* Mobile Banner */}
        <img 
          src="/banneruradiomobile.webp" 
          alt="Banner" 
          className="w-full h-auto object-cover block md:hidden cursor-pointer"
        />
      </a>
    </section>
  );
};

export default BannerSection;