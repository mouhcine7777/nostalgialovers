"use client";
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Camera, Gamepad, Leaf, ArrowRight } from 'lucide-react';

export default function Cards() {
  const containerRef = useRef(null);
  const [hoveredSection, setHoveredSection] = useState(null);
  const [expandedSection, setExpandedSection] = useState(null);

  const sections = [
    {
      id: 'food-court',
      title: 'Food Court',
      description: 'Découvrez une expérience culinaire unique avec nos food trucks soigneusement sélectionnés, offrant une variété de cuisines du monde entier.',
      icon: <Coffee className="w-6 h-6 md:w-8 md:h-8" />,
      imageSrc: 'foodcourt.webp',
      color: '#FF6B6B',
      stats: ['12 Food Trucks', '4 Bars', '200 Places Assises']
    },
    {
      id: 'instagram',
      title: 'Espaces Instagrammables',
      description: 'Des décors spectaculaires et des installations artistiques créent des moments parfaits pour vos photos Instagram.',
      icon: <Camera className="w-6 h-6 md:w-8 md:h-8" />,
      imageSrc: 'instagramspace.webp',
      color: '#4ECDC4',
      stats: ['8 Photo Spots', '3 Light Shows', 'Miroirs Infinis']
    },
    {
      id: 'gaming',
      title: 'Gaming Zone',
      description: 'Une zone dédiée aux jeux vidéo avec les dernières consoles et des tournois excitants.',
      icon: <Gamepad className="w-6 h-6 md:w-8 md:h-8" />,
      imageSrc: 'gamingzone.webp',
      color: '#45B7D1',
      stats: ['20 Consoles', '4 VR Stations', 'Tournois Live']
    },
    {
      id: 'zen',
      title: 'Zen Corner',
      description: 'Un espace de détente pour se ressourcer entre les concerts avec yoga et méditation.',
      icon: <Leaf className="w-6 h-6 md:w-8 md:h-8" />,
      imageSrc: 'zencorner.webp',
      color: '#96CEB4',
      stats: ['Yoga Sessions', 'Meditation Space', 'Massage Zone']
    }
  ];

  return (
    <section className="relative z-10 px-4 md:px-8 py-12 md:py-20" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-8 md:gap-12">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              className={`relative ${expandedSection === section.id ? 'z-20' : 'z-10'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className={`cursor-pointer relative rounded-2xl md:rounded-3xl overflow-hidden
                  ${expandedSection === section.id ? 'h-[400px] md:h-[600px]' : 'h-[200px] md:h-[300px]'}
                  transition-all duration-500`}
                style={{
                  backgroundColor: section.color,
                }}
                onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
                onMouseEnter={() => setHoveredSection(section.id)}
                onMouseLeave={() => setHoveredSection(null)}
                layoutId={`container-${section.id}`}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"
                  initial={false}
                  animate={{
                    opacity: hoveredSection === section.id ? 0.8 : 0.6
                  }}
                />

                <motion.img
                  src={section.imageSrc}
                  alt={section.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  layoutId={`image-${section.id}`}
                />

                <div className="relative z-10 h-full">
                  <div className="p-4 md:p-8 flex flex-col h-full">
                    <motion.div 
                      className="flex items-center space-x-3 md:space-x-4"
                      initial={false}
                      animate={{
                        x: hoveredSection === section.id ? 10 : 0
                      }}
                    >
                      <div 
                        className="p-2 md:p-3 rounded-lg md:rounded-xl text-white"
                        style={{ backgroundColor: section.color }}
                      >
                        {section.icon}
                      </div>
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-[Montserrat]">
                        {section.title}
                      </h2>
                    </motion.div>

                    <AnimatePresence>
                      {expandedSection === section.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          className="mt-4 md:mt-8 text-white/90"
                        >
                          <p className="text-base md:text-xl mb-4 md:mb-8">{section.description}</p>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6">
                            {section.stats.map((stat, i) => (
                              <motion.div
                                key={stat}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/10 rounded-lg md:rounded-xl p-3 md:p-4 backdrop-blur-sm"
                              >
                                <p className="text-base md:text-lg font-semibold text-center">{stat}</p>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <motion.div 
                      className="mt-auto flex items-center space-x-2"
                      initial={false}
                      animate={{
                        x: hoveredSection === section.id ? 10 : 0
                      }}
                    >
                      <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      <span className="text-white/80 text-base md:text-lg">
                        {expandedSection === section.id ? 'Réduire' : 'Explorer'}
                      </span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}