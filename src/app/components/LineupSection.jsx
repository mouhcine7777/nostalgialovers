"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const artistData = {
  '3 Juillet': [
    { name: 'BONEY M XPERIENCE', image: 'artist6.jpeg' },
    { name: 'THOMAS ANDRES', image: 'artist4.jpg' },
    { name: 'BILLY CRAWFORD', image: 'artist2.jpg' },
    { name: 'SHOLA AMA', image: 'shola-ama.jpg' },
    { name: 'LONDONBEAT', image: 'LONDONBEAT.jpg' },
    { name: 'ROZALLA', image: 'rozalla.jpg' },
    { name: '3T BAND', image: '3Tband.jpg' },
    { name: 'DJ JENY PRESTON', image: 'jenypreston.jpg' },
    { name: 'SANDRA', image: 'sandra.jpg' },

  ],
  '4 Juillet': [
    { name: 'JENNY FROM ACE OF BASE', image: 'artist7.jpg' },
    { name: 'LOUBEGA', image: 'artist3.jpg' },
    { name: 'KELLY O', image: 'kellyo.jpg' },
    { name: 'LAS KETCHUP', image: 'las-ketchup.jpg' },
    { name: 'MR PRÉSIDENT', image: 'Mr-president.jpg' },
    { name: 'DOUBLE YOU', image: 'doble-you.jpg' },
    { name: 'MAXX', image: 'maxx.jpg' },
    { name: 'BELLINI', image: 'bellini.jpg' },
    { name: 'DJ KEVENATOR', image: 'djkevenator.jpg' },
    { name: 'WHIGFIELD', image: 'WHIGFIELD.webp' },
    { name: 'TANIA EVANS', image: 'taniaevans.jpg' },
  ],
  '5 Juillet': [
    { name: 'TECHNOTRONIQUE', image: 'artist5.jpg' },
    { name: 'MONTELL JORDAN', image: 'montell.jpg' },
    { name: 'LA MOVIDA IBIZA', image: 'movida.jpg' },
    { name: 'SALOME DE BAHIA', image: 'salomedebahia.jpg' },
    { name: 'REEL 2 REEL', image: 'reel2reel.jpg' },
    { name: 'C + C MUSIC FACTORY', image: 'ccmusicfactory.jpg' },
    { name: 'GIBSON BROTHERS', image: 'gibsonbrothers.jpg' },
  ],
};

export default function LineupSection() {
  const [activeDay, setActiveDay] = useState('3 Juillet');

  return (
    <section className="py-12 md:py-20 relative" style={{ backgroundColor: '#7F0646' }}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold text-center mb-8 md:mb-11 font-[Montserrat]"
        style={{ color: '#FFFFFF' }}
      >
        LINE-UP 2025 – QUE DES LÉGENDES !
      </motion.h2>

      <p 
        className="text-base md:text-lg text-center mb-8 md:mb-9 font-[Montserrat] font-light px-4"
        style={{ color: '#FFFFFF' }}
      >
        Prépare-toi à chanter, danser et revivre la folie des années 80 et 90 !
      </p>
      

      <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 mb-8 md:mb-16 px-4">
  {Object.keys(artistData).map((day) => (
    <button
      key={day}
      onClick={() => setActiveDay(day)}
      className={`relative px-6 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-xl font-[Montserrat] font-bold transition-all duration-300 ease-in-out overflow-hidden
        ${
          activeDay === day
            ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-[0px_4px_20px_rgba(214,5,158,0.6)] scale-105'
            : 'bg-transparent border-2 border-pink-500 text-white hover:bg-pink-500/20 hover:shadow-[0px_0px_15px_rgba(214,5,158,0.5)] hover:scale-105'
        }`}
      style={{
        backdropFilter: activeDay !== day ? 'blur(10px)' : 'none',
      }}
    >
      {day}
    </button>
  ))}
</div>


      <AnimatePresence mode="wait">
        <motion.div
          key={activeDay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="px-4 md:px-12 relative"
        >
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            navigation={{
              prevEl: '.custom-nav-prev',
              nextEl: '.custom-nav-next',
            }}
            pagination={{ 
              clickable: true,
              el: '.custom-pagination' 
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="lineup-slider"
          >
            {artistData[activeDay].map((artist, index) => (
              <SwiperSlide key={index}>
                <motion.div 
                  className="aspect-[3/4] rounded-lg overflow-hidden group relative shadow-md"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="h-full">
                    <img
                      src={artist.image}
                      alt={artist.name}
                      className="w-full h-full object-cover"
                    />
                    <img 
                      src="logo.webp" 
                      alt="Logo" 
                      className="absolute top-4 left-4 w-13 h-12"
                    />
                    <div 
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
                    />
                    <div 
                      className="absolute inset-0 bg-gradient-to-t from-[#D6059E]/80 via-[#D6059E]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 transition-transform duration-300 group-hover:transform group-hover:translate-y-0">
                      <h3 className="text-xl sm:text-2xl font-bold text-white text-center font-[Montserrat]">
                        {artist.name}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

{/* Navigation and pagination container */}
<div className="flex justify-between items-center mt-8">
  {/* Pagination dots */}
  <div className="custom-pagination flex-grow" />
  
  {/* Navigation buttons */}
  <div className="flex items-center gap-4 mr-4">
    <button className="custom-nav-prev transition-all duration-200 w-12 h-12 rounded-full bg-gradient-to-r from-[#D6059E] to-[#ff47c2] text-white flex items-center justify-center shadow-lg hover:shadow-2xl transform hover:scale-110 active:scale-95">
      <ArrowLeft className="w-6 h-6" />
    </button>
    <button className="custom-nav-next transition-all duration-200 w-12 h-12 rounded-full bg-gradient-to-l from-[#D6059E] to-[#ff47c2] text-white flex items-center justify-center shadow-lg hover:shadow-2xl transform hover:scale-110 active:scale-95">
      <ArrowRight className="w-6 h-6" />
    </button>
  </div>
</div>
        </motion.div>
      </AnimatePresence>

      <style jsx global>{`
        .custom-pagination {
          display: flex;
          justify-content: center;
          gap: 8px;
        }

        .custom-pagination .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #FFFFFF;
          opacity: 0.5;
          transition: all 0.3s ease;
        }

        .custom-pagination .swiper-pagination-bullet-active {
          background: #D6059E;
          opacity: 1;
          transform: scale(1.2);
        }

        .custom-nav-prev:hover,
        .custom-nav-next:hover {
          box-shadow: 0 0 15px rgba(214, 5, 158, 0.3);
        }
      `}</style>
    </section>
  );
}