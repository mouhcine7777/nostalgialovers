"use client";
import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Coffee, Camera, Gamepad, Leaf, ArrowRight } from 'lucide-react';

export default function Edition2024Page() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);
  const containerRef = useRef(null);
  
  const [hoveredSection, setHoveredSection] = useState(null);
  const [expandedSection, setExpandedSection] = useState(null);

  const sections = [
    {
      id: 'food-court',
      title: 'FOOD COURT',
      description: 'Burgers, pizzas, snacks et bien plus… De quoi reprendre des forces entre deux shows et profiter de chaque instant du festival !',
      icon: <Coffee className="w-6 h-6 md:w-8 md:h-8" />,
      imageSrc: 'foodcourt.webp',
      color: '#FF6B6B'
    },
    {
      id: 'instagram',
      title: 'ESPACES INSTAGRAMMABLES',
      description: 'Chaque coin du festival a son ambiance propre, trouvez le vôtre, capturez votre moment et laissez les photos raconter votre soirée.',
      icon: <Camera className="w-6 h-6 md:w-8 md:h-8" />,
      imageSrc: 'instagramspace.webp',
      color: '#4ECDC4'
    },
    {
      id: 'gaming',
      title: 'GAMING ZONE',
      description: 'Un espace fun pour petits et grands, idéal pour une pause en famille ou entre amis avant de retrouver l’ambiance du festival.',
      icon: <Gamepad className="w-6 h-6 md:w-8 md:h-8" />,
      imageSrc: 'gamingzone.webp',
      color: '#45B7D1'
    },
    {
      id: 'zen',
      title: 'ZEN CORNER',
      description: 'Un espace calme pour savourer un café, discuter ou vous relaxer, parfait pour reprendre des forces en toute tranquillité.',
      icon: <Leaf className="w-6 h-6 md:w-8 md:h-8" />,
      imageSrc: 'zencorner.webp',
      color: '#96CEB4'
    }
  ];

  return (
    <main className="bg-gradient-to-b from-pink-900 to-purple-900 min-h-screen">
      {/* Hero Section */}
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
            ÉDITION 2024 UN MOMENT HORS DU TEMPS
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white-200 font-[Montserrat]">
              De la nostalgie, des frissons et des hits qui ont fait chanter toute une génération.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Sections */}
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
                    ${expandedSection === section.id ? 'h-[300px] md:h-[400px]' : 'h-[200px] md:h-[300px]'}
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
                    <div className="p-4 sm:p-6 md:p-8 flex flex-col h-full">
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
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-[Montserrat] tracking-wide">
                          {section.title}
                        </h2>
                      </motion.div>

                      <AnimatePresence>
                        {expandedSection === section.id && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            className="mt-4 sm:mt-6 md:mt-8"
                          >
                            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8">
                              <p className="text-base sm:text-lg md:text-xl text-white font-[Montserrat] leading-relaxed">
                                {section.description}
                              </p>
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
                        <span className="text-white text-sm sm:text-base md:text-lg font-medium">
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
    </main>
  );
}