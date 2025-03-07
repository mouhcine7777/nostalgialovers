"use client";
import { motion } from 'framer-motion';
import { Ticket, Timer } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function TicketsSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0
  });

  useEffect(() => {
    const endDate = new Date('2025-03-23T23:59:59').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = endDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        });
      }
    };

    const timer = setInterval(updateTimer, 1000);
    updateTimer();

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 md:py-20 relative" style={{ backgroundColor: '#7F0646' }}>
      
      {/* Decorative palm images */}
      <img src="/palmleft.png" alt="Palm Left" className="absolute bottom-0 left-0 w-40 md:w-64 opacity-75" />
      <img src="/palmright.png" alt="Palm Right" className="absolute bottom-0 right-0 w-40 md:w-64 opacity-75" />
      
      
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >

            <div className="relative z-10 text-center mb-8">
              <h2 className="text-4xl md:text-6xl font-bold font-[Montserrat] text-white mb-4">
                RÉSERVEZ VOS BILLETS
              </h2>
              
              <div className="inline-block relative">
                <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 px-6 py-2 rounded-full backdrop-blur-sm border border-pink-500/30">
                  <span className="text-lg md:text-xl font-bold text-pink-400 font-[Montserrat]">
                    EARLY BIRD OFFER
                  </span>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-xl overflow-hidden backdrop-blur-sm">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 to-purple-500" />
                
                <div className="p-6 md:p-8">
                  {/* Countdown Timer - Responsive positioning */}
                  <div className="absolute top-4 right-4 flex gap-2 md:gap-3 scale-90 md:scale-100 origin-top-right">
                    {Object.entries(timeLeft).map(([unit, value]) => (
                      <div key={unit} className="text-center">
                        <div className="bg-white/10 rounded px-2 py-1 md:min-w-[40px]">
                          <span className="text-sm md:text-base text-white font-bold font-[Montserrat]">
                            {String(value).padStart(2, '0')}
                          </span>
                        </div>
                        <span className="text-[10px] md:text-xs text-white/70 font-[Montserrat] capitalize">
                          {unit}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-pink-500/20 rounded-lg">
                      <Ticket className="w-6 h-6 text-pink-400" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-3xl font-bold text-white font-[Montserrat]">
                      Pass 3 Jours
                    </h3>
                  </div>

                  <div className="space-y-4 md:space-y-6 mb-8">
                    <div className="flex items-center gap-4 text-white/90">
                      <Timer className="w-5 h-5 text-pink-400 flex-shrink-0" />
                      <div className="flex-1 p-3 bg-white/5 rounded-lg font-[Montserrat] text-sm md:text-base">
                        03 - 04 - 05 Juillet 2025
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-white/90">
                      <Timer className="w-5 h-5 text-pink-400 flex-shrink-0" />
                      <div className="flex-1 p-3 bg-white/5 rounded-lg font-[Montserrat] text-sm md:text-base">
                        Accès à tous les concerts
                      </div>
                    </div>
                  </div>

                  <motion.a
                    href="https://www.guichet.com/nostalgia-lovers-festival"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full relative group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="relative overflow-hidden rounded-full bg-gradient-to-r from-pink-500 to-purple-600 p-[2px]">
                      <div className="relative bg-gradient-to-r from-pink-500 to-purple-600 rounded-full px-4 md:px-6 py-3 text-center">
                        <span className="text-base md:text-lg font-bold text-white font-[Montserrat]">
                          RÉSERVER MAINTENANT
                        </span>
                      </div>
                    </div>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}