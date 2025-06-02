"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NostalgiaBrunchPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Show popup shortly after page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500); // Show popup after 1.5 seconds
    
    return () => clearTimeout(timer);
  }, []);
  
  // Scroll to Brunch section
  const scrollToBrunch = () => {
    const brunchSection = document.getElementById('brunch-section');
    if (brunchSection) {
      brunchSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
          
          {/* Popup Content */}
          <motion.div
            className="relative w-full max-w-md bg-white rounded-2xl overflow-hidden shadow-2xl"
            initial={{ scale: 0.8, y: 40, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, y: 40, opacity: 0 }}
            transition={{ 
              type: "spring", 
              damping: 20, 
              stiffness: 300 
            }}
          >
            {/* Close button */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-white hover:text-gray-200 p-2 z-20 bg-black/30 rounded-full backdrop-blur-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Image Section - Square aspect ratio to show full 1080x1080 image */}
            <motion.div 
              className="relative aspect-square overflow-hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <img 
                src="/nostalgiabrunch.webp" 
                alt="Nostalgia Brunch Event"
                className="w-full h-full object-contain bg-gray-100"
              />
              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Event Label Overlay */}
              <motion.div
                className="font-[Montserrat] absolute top-4 left-4 bg-yellow-300 text-[#611A4F] px-4 py-2 rounded-full text-sm font-bold tracking-wider shadow-lg"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                ÉVÉNEMENT SPÉCIAL
              </motion.div>
              
              {/* Title Overlay */}
              <motion.div
                className="absolute bottom-4 left-4 text-white"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <h2 className="text-3xl font-bold font-[Montserrat] mb-1">NOSTALGIA BRUNCH</h2>
                <div className="w-16 h-1 bg-yellow-300 rounded" />
              </motion.div>
            </motion.div>
            
            {/* Content Section */}
            <div className="p-4 bg-gradient-to-br from-[#611A4F] to-[#4A1541] text-white font-[Montserrat]">
              <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <p className="text-gray-200 mb-3 text-sm leading-relaxed">
                  Ne manquez pas notre brunch dominical festif avec Tito Puente Jr., Gipsy Five et bien plus encore!
                </p>
                
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg mb-4 border border-white/20">
                  <p className="text-yellow-300 font-semibold mb-1 text-sm">6 juillet • Vélodrome de Casablanca</p>
                  <p className="text-xs text-gray-300">Un événement unique avec nourriture, musique et danse</p>
                </div>
                
                {/* CTA Button */}
                <motion.button
                  onClick={scrollToBrunch}
                  className="w-full py-3 px-6 bg-yellow-300 text-[#611A4F] rounded-full font-bold text-base hover:bg-yellow-200 transition-all duration-200 shadow-lg flex items-center justify-center space-x-2 hover:shadow-xl"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <span>Découvrir Maintenant</span>
                  <motion.svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                    animate={{ y: [0, 3, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </motion.svg>
                </motion.button>
              </motion.div>
            </div>
            
            {/* Decorative music notes */}
            <motion.div
              className="absolute top-20 right-4 text-white/40"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut" 
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
              </svg>
            </motion.div>
            
            <motion.div
              className="absolute bottom-32 right-8 text-yellow-300/30"
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, -10, 0]
              }}
              transition={{ 
                repeat: Infinity,
                duration: 4,
                delay: 0.5,
                ease: "easeInOut" 
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NostalgiaBrunchPopup;