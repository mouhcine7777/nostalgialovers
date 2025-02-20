"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const partnerLogos = [
    { src: '/logo.png', name: 'Partner 1', width: 200, height: 80 },
    { src: '/LOGO-PE.png', name: 'Partner 2', width: 200, height: 80 },
    { src: '/logo.png', name: 'Partner 3', width: 200, height: 80 },
    { src: '/LOGO-PE.png', name: 'Partner 4', width: 200, height: 80 },
    { src: '/logo.png', name: 'Partner 5', width: 200, height: 80 },
    { src: '/LOGO-PE.png', name: 'Partner 6', width: 200, height: 80 },
    { src: '/logo.png', name: 'Partner 7', width: 200, height: 80 },
    { src: '/LOGO-PE.png', name: 'Partner 8', width: 200, height: 80 },
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
            NOS PARTENAIRES
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base md:text-lg font-[Montserrat] font-light leading-relaxed text-gray-600 mx-auto"
          >
            Derrière chaque note, chaque moment magique du festival, se trouvent ces partenaires d'exception. 
            Leur vision et leur engagement transforment Nostalgia Lovers en une expérience musicale sans égale.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full"
        >
          <style jsx global>{`
            .swiper-wrapper {
              transition-timing-function: linear !important;
            }
          `}</style>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={40}
            slidesPerView={2}
            speed={5000}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 6 },
              1280: { slidesPerView: 7 },
            }}
            className="py-8"
          >
            {partnerLogos.map((logo, index) => (
              <SwiperSlide key={index} className="flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.10, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="w-[200px] h-[80px]" // Container with fixed dimensions
                >
                  <img 
                    src={logo.src} 
                    alt={logo.name}
                    width={logo.width}
                    height={logo.height}
                    className="max-h-24 w-full h-full object-contain"
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default PartenariatSection;