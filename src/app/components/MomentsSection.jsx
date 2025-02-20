"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const MomentsSection = () => {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-white via-pink-50 to-purple-50 overflow-hidden">
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-0 right-0 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-60"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative container mx-auto px-4 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Image Grid - Restored to original styling */}
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
        <motion.div 
          className="flex flex-col justify-center space-y-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="space-y-2">
            <motion.span 
              className="inline-block text-pink-600 font-medium tracking-wider text-sm uppercase"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Édition 2024
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold font-[Montserrat] bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              LES MEILLEURS MOMENTS DU NOSTALGIA LOVERS
            </h2>
          </div>
          
          <p className="text-base md:text-lg font-[Montserrat] font-light leading-relaxed text-gray-600">
            Nostalgia Lovers Festival 2024 a été une aventure musicale inoubliable. 
            Des performances légendaires, des artistes exceptionnels, et un public passionné 
            ont rendu chaque instant unique. Merci à tous d'avoir fait de cette édition un succès. 
            Restez connectés pour de nouvelles surprises à venir !
          </p>
          
          <Link href="/2024edition">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(214, 5, 158, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full text-white text-lg font-bold font-[Montserrat] self-start bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 transition-all duration-300 shadow-lg"
            >
              Voir Plus de Moments
              <span className="ml-2">→</span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default MomentsSection;