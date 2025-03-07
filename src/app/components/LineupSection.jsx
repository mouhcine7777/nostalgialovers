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
    { name: 'BONEY M XPERIENCE', image: '3juillet/boneyM.webp' },
    { name: 'THOMAS ANDRES', image: '3juillet/thomasAnders.webp' },
    { name: 'BILLY CRAWFORD', image: '3juillet/billy.webp' },
    { name: 'SHOLA AMA', image: '3juillet/sholaama.webp' },
    { name: 'LONDONBEAT', image: '3juillet/LONDONBEAT.webp' },
    { name: 'ROZALLA', image: '3juillet/rozalla.webp' },
    { name: 'WHIGFIELD', image: '3juillet/whigfield.webp' },
    { name: '3T', image: '3juillet/3Tband.webp' },
    { name: 'JENY PRESTON', image: '3juillet/jenypreston.webp' },
    //{ name: 'SANDRA', image: '3juillet/sandra.webp' },
  ],
  '4 Juillet': [
    { name: 'JENNY FROM ACE OF BASE', image: '4juillet/aceofbase.webp' },
    { name: 'LOUBEGA', image: '4juillet/loubega.webp' },
    { name: 'KELLY O FORMER CAPPELLA', image: '4juillet/kellyo.webp' },
    { name: 'LAS KETCHUP', image: '4juillet/lasketchup.webp' },
    { name: 'LAYZEE AKA MR. PRÉSIDENT', image: '4juillet/mrpresident.webp' },
    { name: 'DOUBLE YOU', image: '4juillet/doble-you.webp' },
    { name: 'MAXX', image: '4juillet/maxx.webp' },
    { name: 'BELLINI', image: '4juillet/bellini.webp' },
    { name: 'LA CASSETTE DJ’S', image: '4juillet/lacassette.webp' },
    { name: 'TANIA EVANS ORIGINAL VOICE OF MR VAIN', image: '4juillet/taniaevans.webp' },
  ],
  '5 Juillet': [
    { name: 'DAISY DEE TECHNOTRONIQUE', image: '5juillet/technotronique.webp' },
    { name: 'MONTELL JORDAN', image: '5juillet/montell.webp' },
    { name: 'LA MOVIDA IBIZA', image: '5juillet/movida.webp' },
    { name: 'SALOMÉ DE BAHIA', image: '5juillet/salomedebahia.webp' },
    { name: 'MAD STUNTMAN AKA REEL 2 REAL', image: '5juillet/reel2reel.webp' },
    { name: 'C + C MUSIC FACTORY', image: '5juillet/ccmusicfactory.webp' },
    { name: 'GIBSON BROTHERS', image: '5juillet/gibsonbrothers.webp' },
  ],
};

// Helper function to convert dates to valid IDs
const dateToId = (date) => date.toLowerCase().replace(/\s+/g, '-');

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

      <div 
        className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 mb-8 md:mb-16 px-4"
        role="tablist"
        aria-label="Select performance day"
      >
        {Object.keys(artistData).map((day) => (
          <button
            key={day}
            onClick={() => setActiveDay(day)}
            role="tab"
            aria-selected={activeDay === day}
            aria-controls={`panel-${dateToId(day)}`}
            id={`tab-${dateToId(day)}`}
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
          role="tabpanel"
          id={`panel-${dateToId(activeDay)}`}
          aria-labelledby={`tab-${dateToId(activeDay)}`}
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
                      alt={`${artist.name} - Performance artist`}
                      className="w-full h-full object-cover"
                    />
                    <img 
                      src="logo.png" 
                      alt="Festival logo"
                      className="absolute top-4 left-4 w-13 h-12"
                    />
                    <div 
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
                      aria-hidden="true"
                    />
                    <div 
                      className="absolute inset-0 bg-gradient-to-t from-[#D6059E]/80 via-[#D6059E]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ top: '70%' }}
                      aria-hidden="true"
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

          <div className="flex justify-between items-center mt-8">
            <div className="custom-pagination flex-grow" role="navigation" aria-label="Slides" />
            
            <div className="flex items-center gap-4 mr-4">
              <button
                className="custom-nav-prev transition-all duration-200 w-12 h-12 rounded-full bg-gradient-to-r from-[#D6059E] to-[#ff47c2] text-white flex items-center justify-center shadow-lg hover:shadow-2xl transform hover:scale-110 active:scale-95"
                aria-label="Previous slide"
              >
                <ArrowLeft className="w-6 h-6" aria-hidden="true" />
              </button>
              <button 
                className="custom-nav-next transition-all duration-200 w-12 h-12 rounded-full bg-gradient-to-l from-[#D6059E] to-[#ff47c2] text-white flex items-center justify-center shadow-lg hover:shadow-2xl transform hover:scale-110 active:scale-95"
                aria-label="Next slide"
              >
                <ArrowRight className="w-6 h-6" aria-hidden="true" />
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