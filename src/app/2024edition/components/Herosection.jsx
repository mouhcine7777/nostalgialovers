"use client";
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);

  return (
    <section className="relative h-[80vh] md:h-screen flex items-center justify-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-pink-900/90" />
        <img src="/moment2.webp" alt="Festival 2024" className="w-full h-full object-cover" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 font-[Montserrat]">
            Édition 2024
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-pink-200">
            Première édition - Une expérience inoubliable
          </p>
        </motion.div>
      </div>
    </section>
  );
}