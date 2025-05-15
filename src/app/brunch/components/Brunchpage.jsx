"use client";
import React from 'react';
import { motion } from 'framer-motion';

const BrunchSection = () => {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-white via-orange-50 to-yellow-50 overflow-hidden">
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"
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
        className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-60"
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
        {/* Text Content */}
        <motion.div 
          className="flex flex-col justify-center space-y-8 order-2 md:order-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="space-y-2">
            <motion.span 
              className="inline-block text-orange-600 font-medium tracking-wider text-sm uppercase"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Événement Spécial
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold font-[Montserrat] bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
              NOSTALGIA BRUNCH
            </h2>
          </div>
          
          <p className="text-base md:text-lg font-[Montserrat] font-light leading-relaxed text-gray-600">
            Après trois soirées légendaires, le festival Nostalgia Lovers prolonge la fête avec un brunch dominical pas comme les autres.
            Le <strong>Nostalgia Brunch</strong>, c'est un moment de détente et de fête, en plein air, dans une ambiance gipsy-latino qui sent bon le soleil, les tapas et les rythmes endiablés.
          </p>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Au programme :</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span><strong>Tito Puente Jr.</strong> : héritier d'une légende de la salsa, il vous fera vibrer avec son orchestre</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span><strong>Gipsy Five</strong> : un show gipsy à la fois festif et irrésistible</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span><strong>Susana Sanchez Jimenez</strong> : performance scénique spectaculaire, entre flamenco moderne et élégance andalouse</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-sm text-gray-500">Date et lieu</p>
                <p className="font-medium">Dimanche 6 juillet • Vélodrome de Casablanca</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Tarif</p>
                <p className="font-medium">900 Dhs (incluant 300 Dhs de crédit food & drinks)</p>
              </div>
            </div>
            <div className="flex justify-center sm:justify-start">
              <motion.a 
                href="https://guichet.com/ma-fr/event/festivals/nostalgia-brunch-4646"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(234, 88, 12, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full text-white text-lg font-bold font-[Montserrat] bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-500 hover:to-yellow-500 transition-all duration-300 shadow-lg"
              >
                Réserver Mes Billets
                <span className="ml-2">→</span>
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div 
          className="order-1 md:order-2"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-yellow-600/20 rounded-2xl transform rotate-6"></div>
            <img 
              src="/nostalgiabrunch.webp" 
              alt="Nostalgia Brunch" 
              className="w-full h-full object-cover rounded-2xl shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-300"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/api/placeholder/600/400";
              }}
            />
            <div className="absolute -bottom-4 -right-4 bg-white py-2 px-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <span className="text-orange-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="font-medium text-gray-800">Ambiance caliente</span>
              </div>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3">
            <div className="bg-orange-100 p-3 rounded-lg text-center">
              <span className="block text-orange-600 text-2xl mb-1">☀️</span>
              <span className="text-sm font-medium">Tapas</span>
            </div>
            <div className="bg-orange-100 p-3 rounded-lg text-center">
              <span className="block text-orange-600 text-2xl mb-1">🎶</span>
              <span className="text-sm font-medium">Live Music</span>
            </div>
            <div className="bg-orange-100 p-3 rounded-lg text-center">
              <span className="block text-orange-600 text-2xl mb-1">💃</span>
              <span className="text-sm font-medium">Danse</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrunchSection;