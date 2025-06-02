"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const targetDate = new Date("July 3, 2025 00:00:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Video Container */}
      <div className="absolute inset-0 bg-black">
        <video
          muted
          playsInline
          autoPlay
          loop
          className="w-full h-full object-cover brightness-50"
          style={{
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
        >
          <source src="/nostalgia-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4">
        {/* Festival Title */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-yellow-400 drop-shadow-lg tracking-wide font-[Montserrat]"
        >
          NOSTALGIA LOVERS FESTIVAL
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-2xl text-white mt-4 max-w-2xl font-[Montserrat] text-center"
        >
          <span className="text-1xl sm:text-3xl md:text-4xl font-bold px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 inline-block mb-2">
            BACK TO THE 80'S & 90'S
          </span>
          <br />
          <span className="text-xl md:text-4xl">CHOOSE YOUR FESTIVAL DAYS</span>
          <br />
          <span className="text-lg md:text-2xl block mt-2 text-yellow-400">
                03 - 04 - 05 Juillet 2025
              </span>
        </motion.p>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex space-x-4 sm:space-x-6 md:space-x-8 mt-8 mb-8"
        >
          {timeLeft ? (
            Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="flex flex-col items-center">
                <div className="font-[Montserrat] font-bold text-4xl sm:text-5xl md:text-7xl text-white mb-1">
                  {value.toString().padStart(2, "0")}
                </div>
                <div className="font-[Montserrat] text-sm sm:text-base md:text-lg text-yellow-400 uppercase tracking-wider">
                  {unit}
                </div>
              </div>
            ))
          ) : (
            <div className="text-white text-xl">Loading countdown...</div>
          )}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-4"
        >
          <Link href="https://guichet.com/ma-fr/event/producer/nostalgia-lovers-fest" target="_blank" rel="noopener noreferrer">
            <Button className="px-8 py-4 bg-yellow-500 font-[Montserrat] text-black font-bold text-lg rounded-full shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 transform hover:scale-105">
            GET TICKETS NOW
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Scrolling Banner */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-purple-800 via-purple-600 to-purple-800 py-3 z-20"
      >
        <Link 
          href="https://guichet.com/ma-fr/event/festivals/nostalgia-lovers-festival-2eme-edition-pass-3-soirees-tombola-ibiza"
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
        >
          <div className="marquee">
            <div className="track">
              <div className="banner-content">
                <span className="text-white font-bold font-[Montserrat] text-xl md:text-xl sm:text-base xs:text-sm">
                ✦ Tentez de gagner un voyage à Ibiza pour 2 personnes ! 
                </span>
                <span className="text-yellow-300 font-extrabold font-[Montserrat] text-xl md:text-xl sm:text-base xs:text-sm bg-purple-900 px-3 py-1 rounded-lg ml-2 mr-4">
                  Offre valable jusqu'au 02 juillet 2025
                </span>
              </div>
              <div className="spacer"></div>
              <div className="banner-content">
                <span className="text-white font-bold font-[Montserrat] text-xl">
                ✦ Tentez de gagner un voyage à Ibiza pour 2 personnes ! 
                </span>
                <span className="text-yellow-300 font-extrabold font-[Montserrat] text-xl bg-purple-900 px-3 py-1 rounded-lg ml-2 mr-4">
                  Offre valable jusqu'au 02 juillet 2025
                </span>
              </div>
              <div className="spacer"></div>
              <div className="banner-content">
                <span className="text-white font-bold font-[Montserrat] text-xl">
                ✦ Tentez de gagner un voyage à Ibiza pour 2 personnes ! 
                </span>
                <span className="text-yellow-300 font-extrabold font-[Montserrat] text-xl bg-purple-900 px-3 py-1 rounded-lg ml-2 mr-4">
                  Offre valable jusqu'au 02 juillet 2025
                </span>
              </div>
              <div className="spacer"></div>
              <div className="banner-content">
                <span className="text-white font-bold font-[Montserrat] text-xl">
                ✦ Tentez de gagner un voyage à Ibiza pour 2 personnes ! 
                </span>
                <span className="text-yellow-300 font-extrabold font-[Montserrat] text-xl bg-purple-900 px-3 py-1 rounded-lg ml-2 mr-4">
                  Offre valable jusqu'au 02 juillet 2025
                </span>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>

      {/* CSS for true marquee scrolling effect */}
      <style jsx>{`
        .marquee {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .track {
          display: flex;
          width: fit-content;
          animation: marquee 20s linear infinite;
        }

                  .banner-content {
          display: flex;
          align-items: center;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .spacer {
          width: 480px;
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .spacer {
            width: 40px;
          }
          .track {
            animation: marquee 15s linear infinite;
          }
        }

        @media (max-width: 480px) {
          .spacer {
            width: 25px;
          }
          .track {
            animation: marquee 12s linear infinite;
          }
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}