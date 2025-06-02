"use client";
import React from 'react';
import { motion } from 'framer-motion';

const officialSponsors = [
    { src: '/logos/bmci.png', name: 'BMCI', width: 200, height: 80, website: 'https://www.bmci.ma' },
    { src: '/logos/soueast.png', name: 'Soueast', width: 100, height: 40, website: 'https://www.soueast-motor.com' },
];

const PartenariatSection = () => {
  return (
    <section className="relative py-16 md:py-32 bg-gradient-to-br from-white via-pink-50 to-purple-50 overflow-hidden">
      <div className="relative w-full px-4">
        <div className="text-center mb-12 md:mb-16 max-w-4xl mx-auto">
          <motion.span 
            className="inline-block text-pink-600 font-medium tracking-wider text-sm uppercase mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            L'alliance des passionnés
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold font-[Montserrat] bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-6"
          >
            SPONSORS OFFICIELS
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base md:text-lg font-[Montserrat] font-light leading-relaxed text-gray-600 mx-auto"
          >
            Nos sponsors officiels qui nous accompagnent pour faire de Nostalgia Lovers 
            une expérience musicale inoubliable.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center items-center gap-12 md:gap-20"
        >
          {officialSponsors.map((sponsor, index) => (
            <motion.a
              key={index}
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.10, y: -5 }}
              transition={{ duration: 0.3 }}
              className={`cursor-pointer block ${sponsor.name === 'Soueast' ? 'max-w-[390px]' : ''}`}
              title={`Visiter le site de ${sponsor.name}`}
            >
              <img 
                src={sponsor.src} 
                alt={sponsor.name}
                width={sponsor.width}
                height={sponsor.height}
                className={`object-contain transition-opacity duration-300 hover:opacity-80 ${
                  sponsor.name === 'Soueast' ? 'max-h-12 w-auto' : 'max-h-24 w-auto'
                }`}
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartenariatSection;