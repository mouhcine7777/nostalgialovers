"use client";
import { motion } from 'framer-motion';
import { Ticket, Timer, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function TicketsSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0
  });
  
  const [selectedTicket, setSelectedTicket] = useState('full');

  useEffect(() => {
    const endDate = new Date('2025-04-06T23:59:59').getTime();

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

  const ticketOptions = [
    { 
      id: 'full', 
      name: 'Festival Pass', 
      description: 'Accès à tous les concerts + Tombola Moto', 
      price: '1590DH',
      link: 'https://guichet.com/ma-fr/event/festivals/nostalgia-lovers-festival-2eme-edition-pass-3-soirees-tombola-moto-4581'
    },
    { 
      id: 'day1', 
      name: 'Jour 1', 
      description: '03 Juillet 2025', 
      price: '590 DH',
      link: 'https://guichet.com/ma-fr/event/festivals/nostalgia-lovers-festival-2eme-edition-pass-jeudi-03-25'
    },
    { 
      id: 'day2', 
      name: 'Jour 2', 
      description: '04 Juillet 2025', 
      price: '590 DH',
      link: 'https://guichet.com/ma-fr/event/festivals/nostalgia-lovers-festival-2eme-edition-pass-vendredi-04-25'
    },
    { 
      id: 'day3', 
      name: 'Jour 3', 
      description: '05 Juillet 2025', 
      price: '590 DH',
      link: 'https://guichet.com/ma-fr/event/festivals/nostalgia-lovers-festival-2eme-edition-pass-samedi-05-4457'
    }
  ];

  // Get the current ticket object based on selection
  const currentTicket = ticketOptions.find(ticket => ticket.id === selectedTicket);

  return (
    <section className="py-12 md:py-20 relative" style={{ backgroundColor: '#611A4F' }}>
      
      {/* Decorative palm images */}
      <img src="/palmleft.png" alt="Palm Left" className="absolute bottom-0 left-0 w-40 md:w-64 opacity-75" />
      <img src="/palmright.png" alt="Palm Right" className="absolute bottom-0 right-0 w-40 md:w-64 opacity-75" />
      
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto px-4">
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
                    JOIN THE FESTIVAL
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
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-pink-500/20 rounded-lg">
                      <Ticket className="w-6 h-6 text-pink-400" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-3xl font-bold text-white font-[Montserrat]">
                      CHOOSE YOUR FESTIVAL DAYS
                    </h3>
                  </div>

                  {/* Ticket Selection Options */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {ticketOptions.map((ticket) => (
                      <div 
                        key={ticket.id}
                        onClick={() => setSelectedTicket(ticket.id)}
                        className={`
                          relative p-4 rounded-lg cursor-pointer transition-all duration-300
                          ${selectedTicket === ticket.id 
                            ? 'bg-gradient-to-r from-pink-500/30 to-purple-500/30 border border-pink-500/50' 
                            : 'bg-white/5 border border-white/10 hover:bg-white/10'}
                        `}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                            selectedTicket === ticket.id ? 'bg-pink-500' : 'border-2 border-white/30'
                          }`}>
                            {selectedTicket === ticket.id && (
                              <div className="w-2 h-2 rounded-full bg-white" />
                            )}
                          </div>
                          <div>
                            <h4 className="text-white font-bold font-[Montserrat]">{ticket.name}</h4>
                            <p className="font-[Montserrat] text-white/70 text-sm">{ticket.description}</p>
                          </div>
                          <div className="ml-auto">
                            <span className="font-[Montserrat] text-lg font-light text-pink-400">{ticket.price}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4 md:space-y-6 mb-8">
                    <div className="flex items-center gap-4 text-white/90">
                      <Calendar className="w-5 h-5 text-pink-400 flex-shrink-0" />
                      <div className="flex-1 p-3 bg-white/5 rounded-lg font-[Montserrat] text-sm md:text-base">
                        03 - 04 - 05 Juillet 2025
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-white/90">
                      <Timer className="w-5 h-5 text-pink-400 flex-shrink-0" />
                      <div className="flex-1 p-3 bg-white/5 rounded-lg font-[Montserrat] text-sm md:text-base">
                        {selectedTicket === 'full' 
                          ? 'Accès à tous les concerts' 
                          : `Accès à la soirée du ${selectedTicket === 'day1' ? '03' : selectedTicket === 'day2' ? '04' : '05'} Juillet uniquement`}
                      </div>
                    </div>
                  </div>

                  <motion.a
                    href={currentTicket.link}
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