"use client";
import React from 'react';
import { motion } from 'framer-motion';

const MomentsSection = () => {
  return (
    <section className="py-12 md:py-20 bg-white grid md:grid-cols-2 gap-8 md:gap-16 px-4 md:px-12 items-center">
      {/* Image Grid */}
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        <motion.div 
          className="col-span-1 row-span-1"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img 
            src="/moment1.webp" 
            alt="Nostalgia Lovers Festival Moment 1" 
            className="w-full h-full object-cover rounded-lg shadow-lg transform -rotate-6 hover:rotate-0 transition-transform duration-300"
          />
        </motion.div>
        
        <motion.div 
          className="col-span-1 row-span-2"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <img 
            src="/moment2.webp" 
            alt="Nostalgia Lovers Festival Moment 2" 
            className="w-full h-full object-cover rounded-lg shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300"
          />
        </motion.div>
        
        <motion.div 
          className="col-span-1 row-span-1"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <img 
            src="/moment3.webp" 
            alt="Nostalgia Lovers Festival Moment 3" 
            className="w-full h-full object-cover rounded-lg shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300"
          />
        </motion.div>
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-center space-y-6">
        <h2 
          className="text-4xl md:text-5xl font-bold font-[Montserrat]"
          style={{ color: '#D6059E' }}
        >
          LES MEILLEURS MOMENTS DU NOSTALGIA LOVERS
        </h2>
        
        <p 
          className="text-base md:text-lg font-[Montserrat] font-light leading-relaxed"
          style={{ color: '#666666' }}
        >
          Nostalgia Lovers Festival 2024 a été une aventure musicale inoubliable. 
          Des performances légendaires, des artistes exceptionnels, et un public passionné 
          ont rendu chaque instant unique. Merci à tous d'avoir fait de cette édition un succès. 
          Restez connectés pour de nouvelles surprises à venir !
        </p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 rounded-full text-white text-lg font-bold font-[Montserrat] self-start transition-all duration-300"
          style={{ 
            backgroundColor: '#D6059E',
            boxShadow: '0 4px 6px rgba(214, 5, 158, 0.3)'
          }}
        >
          Voir Plus de Moments
        </motion.button>
      </div>
    </section>
  );
};

export default MomentsSection;