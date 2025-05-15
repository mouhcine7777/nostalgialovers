"use client";
import React from 'react';
import { motion } from 'framer-motion';

const BrunchSection = () => {
  return (
    <section id="brunch-section" className="relative py-16 md:py-24 bg-[#611A4F] overflow-hidden text-white font-[Montserrat]">
      <div className="relative container mx-auto px-4 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Text Content */}
        <motion.div 
          className="flex flex-col justify-center space-y-6 md:space-y-8 order-2 md:order-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="space-y-2">
            <motion.span 
              className="inline-block text-yellow-300 font-medium tracking-wider text-xs sm:text-sm uppercase"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Événement Spécial
            </motion.span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              NOSTALGIA BRUNCH
            </h2>
          </div>
          
          <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed text-gray-200">
            Après trois soirées légendaires, le festival Nostalgia Lovers prolonge la fête avec un brunch dominical pas comme les autres.
            Le <strong>Nostalgia Brunch</strong>, c'est un moment de détente et de fête, en plein air, dans une ambiance gipsy-latino qui sent bon le soleil, les tapas et les rythmes endiablés.
          </p>
          
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold text-yellow-300">Au programme :</h3>
            <ul className="space-y-2">
              <li className="flex items-start text-sm sm:text-base">
                <span className="text-yellow-300 mr-2">•</span>
                <span><strong>Tito Puente Jr.</strong> : héritier d'une légende de la salsa, il vous fera vibrer avec son orchestre</span>
              </li>
              <li className="flex items-start text-sm sm:text-base">
                <span className="text-yellow-300 mr-2">•</span>
                <span><strong>Gipsy Five</strong> : un show gipsy à la fois festif et irrésistible</span>
              </li>
              <li className="flex items-start text-sm sm:text-base">
                <span className="text-yellow-300 mr-2">•</span>
                <span><strong>Susana Sanchez Jimenez</strong> : performance scénique spectaculaire, entre flamenco moderne et élégance andalouse</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-lg space-y-4 border border-white/20">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-xs sm:text-sm text-gray-300">Date et lieu</p>
                <p className="text-sm sm:text-base font-medium text-white">Dimanche 6 juillet • Vélodrome de Casablanca</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-300">Tarif</p>
                <p className="text-sm sm:text-base font-medium text-white">900 Dhs (incluant 300 Dhs de crédit food & drinks)</p>
              </div>
            </div>
            <div className="flex justify-center sm:justify-start pt-2">
              <motion.a 
                href="https://guichet.com/ma-fr/event/festivals/nostalgia-brunch-4646"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(255, 224, 130, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-full text-[#611A4F] text-sm sm:text-base md:text-lg font-bold bg-yellow-300 hover:bg-yellow-200 transition-all duration-300 shadow-lg"
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
            <div className="absolute inset-0 bg-yellow-300/20 rounded-2xl transform rotate-6"></div>
            <img 
              src="/nostalgiabrunch.webp" 
              alt="Nostalgia Brunch" 
              className="w-full h-full object-cover rounded-2xl shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-300"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/api/placeholder/600/400";
              }}
            />
            <div className="absolute -bottom-4 -right-4 bg-white py-2 px-3 sm:px-4 rounded-lg shadow-lg hidden sm:block">
              <div className="flex items-center gap-2">
                <span className="text-[#611A4F]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="font-medium text-[#611A4F] text-xs sm:text-sm">Ambiance caliente</span>
              </div>
            </div>
          </div>
          
          {/* Creative Experience Cards */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <motion.div 
              className="group relative overflow-hidden rounded-xl h-24 bg-gradient-to-br from-yellow-400/30 to-rose-500/20 backdrop-blur-sm shadow-lg border border-white/10"
              whileHover={{ 
                y: -5,
                boxShadow: "0 15px 30px rgba(255, 255, 255, 0.15)"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-yellow-300/20 group-hover:bg-yellow-300/40 transition-all duration-500"></div>
              
              <div className="relative h-full flex flex-col justify-center items-center p-2 z-10">
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="text-yellow-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
                    <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                  </svg>
                </motion.div>
                <span className="text-xs font-semibold text-yellow-300 uppercase tracking-wider">Gastronomie</span>
                <span className="block text-white font-bold text-lg group-hover:text-yellow-100 transition-colors duration-300">
                  Tapas & Saveurs
                </span>
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-1 bg-yellow-300 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                />
              </div>
            </motion.div>
            
            <motion.div 
              className="group relative overflow-hidden rounded-xl h-24 bg-gradient-to-br from-purple-500/30 to-blue-600/20 backdrop-blur-sm shadow-lg border border-white/10"
              whileHover={{ 
                y: -5,
                boxShadow: "0 15px 30px rgba(255, 255, 255, 0.15)"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -left-8 -top-8 w-24 h-24 rounded-full bg-yellow-300/20 group-hover:bg-yellow-300/40 transition-all duration-500"></div>
              
              <div className="relative h-full flex flex-col justify-center items-center p-2 z-10">
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="text-yellow-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </motion.div>
                <span className="text-xs font-semibold text-yellow-300 uppercase tracking-wider">Ambiance</span>
                <span className="block text-white font-bold text-lg group-hover:text-yellow-100 transition-colors duration-300">
                  Live Orchestra
                </span>
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-1 bg-yellow-300 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                />
              </div>
            </motion.div>
            
            <motion.div 
              className="group relative overflow-hidden rounded-xl h-24 bg-gradient-to-br from-rose-500/30 to-orange-400/20 backdrop-blur-sm shadow-lg border border-white/10"
              whileHover={{ 
                y: -5,
                boxShadow: "0 15px 30px rgba(255, 255, 255, 0.15)"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-yellow-300/20 group-hover:bg-yellow-300/40 transition-all duration-500"></div>
              
              <div className="relative h-full flex flex-col justify-center items-center p-2 z-10">
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="text-yellow-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                  </svg>
                </motion.div>
                <span className="text-xs font-semibold text-yellow-300 uppercase tracking-wider">Animation</span>
                <span className="block text-white font-bold text-lg group-hover:text-yellow-100 transition-colors duration-300">
                  Flamenco Fusion
                </span>
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-1 bg-yellow-300 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrunchSection;