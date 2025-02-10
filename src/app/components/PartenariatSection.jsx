"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const partnerLogos = [
    { src: '/logo.webp', name: 'Partner 1' },
    { src: '/LOGO-PE.png', name: 'Partner 2' },
    { src: '/logo.webp', name: 'Partner 3' },
    { src: '/LOGO-PE.png', name: 'Partner 4' },
    { src: '/logo.webp', name: 'Partner 5' },
    { src: '/LOGO-PE.png', name: 'Partner 6' },
    { src: '/logo.webp', name: 'Partner 7' },
    { src: '/LOGO-PE.png', name: 'Partner 8' },
];

const PartenariatSection = () => {
  return (
    <section className="py-12 md:py-20 bg-white text-center">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold font-[Montserrat] mb-12"
        style={{ color: '#D6059E' }}
      >
        NOS PARTENAIRES
      </motion.h2>

      <style jsx global>{`
        .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        speed={5000}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 4 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 6 },
        }}
        className="px-4 md:px-12"
      >
        {partnerLogos.map((logo, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={logo.src} 
                alt={logo.name} 
                className="max-h-20 max-w-full object-contain"
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PartenariatSection;