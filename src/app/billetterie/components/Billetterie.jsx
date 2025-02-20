"use client";
import { motion } from 'framer-motion';
import { Ticket, Timer, Calendar, Music, Star, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';

const TicketCard = ({ title, date, price, features, disabled, timeLeft, isEarlyBird }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="relative w-full md:w-96"
  >
    <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-xl overflow-hidden backdrop-blur-sm">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 to-purple-500" />
      
      <div className="p-6">
        {timeLeft && isEarlyBird && (
          <div className="absolute top-4 right-4 flex gap-2 scale-90 origin-top-right">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="text-center">
                <div className="bg-white/10 rounded px-2 py-1">
                  <span className="text-sm text-white font-bold font-[Montserrat]">
                    {String(value).padStart(2, '0')}
                  </span>
                </div>
                <span className="text-[10px] text-white/70 font-[Montserrat] capitalize">
                  {unit}
                </span>
              </div>
            ))}
          </div>
        )}

        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-pink-500/20 rounded-lg">
            <Ticket className="w-6 h-6 text-pink-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white font-[Montserrat]">
              {title}
            </h3>
            <div className="flex items-center gap-2">
              <p className="text-pink-400 font-[Montserrat] text-lg">{price} DH</p>
              {isEarlyBird && (
                <span className="text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded-full">
                  Early Bird
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-4 text-white/90">
            <Calendar className="w-5 h-5 text-pink-400 flex-shrink-0" />
            <div className="flex-1 p-3 bg-white/5 rounded-lg font-[Montserrat] text-sm">
              {date}
            </div>
          </div>
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4 text-white/90">
              {index === 0 ? <Music className="w-5 h-5 text-pink-400 flex-shrink-0" /> :
               index === 1 ? <Star className="w-5 h-5 text-pink-400 flex-shrink-0" /> :
               <MapPin className="w-5 h-5 text-pink-400 flex-shrink-0" />}
              <div className="flex-1 p-3 bg-white/5 rounded-lg font-[Montserrat] text-sm">
                {feature}
              </div>
            </div>
          ))}
        </div>

        <motion.button
          disabled={disabled}
          className={`w-full relative ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          whileHover={disabled ? {} : { scale: 1.02 }}
          whileTap={disabled ? {} : { scale: 0.98 }}
        >
          <div className="relative overflow-hidden rounded-full bg-gradient-to-r from-pink-500 to-purple-600 p-[2px]">
            <div className="relative bg-gradient-to-r from-pink-500 to-purple-600 rounded-full px-6 py-3 text-center">
              <span className="text-base font-bold text-white font-[Montserrat]">
                {disabled ? 'BIENTÔT DISPONIBLE' : 'RÉSERVER MAINTENANT'}
              </span>
            </div>
          </div>
        </motion.button>
      </div>
    </div>
  </motion.div>
);

export default function Billetterie() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0
  });

  useEffect(() => {
    const endDate = new Date('2025-03-01T23:59:59').getTime();

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

  const tickets = [
    {
      title: 'Pass 3 Jours',
      date: '03 - 04 - 05 Juillet 2025',
      price: 1149,
      features: [
        'Accès à tous les concerts pendant 3 jours',
        'File prioritaire à l\'entrée'
      ],
      disabled: false,
      timeLeft: timeLeft,
      isEarlyBird: true
    },
    {
      title: 'Pass Jeudi',
      date: '03 Juillet 2025',
      price: 499,
      features: [
        'Accès aux concerts du Jeudi',
        'Accès à l\'espace restauration'
      ],
      disabled: true,
      isEarlyBird: false
    },
    {
      title: 'Pass Vendredi',
      date: '04 Juillet 2025',
      price: 499,
      features: [
        'Accès aux concerts du Vendredi',
        'Accès à l\'espace restauration'
      ],
      disabled: true,
      isEarlyBird: false
    },
    {
      title: 'Pass Samedi',
      date: '05 Juillet 2025',
      price: 499,
      features: [
        'Accès aux concerts du Samedi',
        'Accès à l\'espace restauration'
      ],
      disabled: true,
      isEarlyBird: false
    }
  ];

  return (
    <section className="pt-32 pb-20 relative min-h-screen" style={{ backgroundColor: '#7F0646' }}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-0 w-60 h-60 bg-purple-500/20 rounded-full blur-3xl" />
      </div>
      
      {/* Decorative palm images */}
      <img src="/palmleft.png" alt="Palm Left" className="absolute bottom-0 left-0 w-40 md:w-64 opacity-75" />
      <img src="/palmright.png" alt="Palm Right" className="absolute bottom-0 right-0 w-40 md:w-64 opacity-75" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold font-[Montserrat] text-white mb-6">
            BILLETTERIE
          </h1>
          
          <p className="text-white/80 max-w-2xl mx-auto mb-8 font-[Montserrat]">
            Choisissez le pass qui vous convient le mieux et rejoignez-nous pour une expérience musicale inoubliable
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {tickets.map((ticket, index) => (
            <TicketCard key={index} {...ticket} />
          ))}
        </div>
      </div>
    </section>
  );
}