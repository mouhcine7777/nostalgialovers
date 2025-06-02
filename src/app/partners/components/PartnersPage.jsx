"use client";

import React from 'react';
import { motion } from 'framer-motion';

const partnersData = {
  producteur: {
    title: "PRODUCTEUR",
    color: "from-purple-600 to-pink-600",
    partners: [
      { src: '/logos/pe.png', name: 'Public Events', website: 'https://www.publicevents.ma' }
    ]
  },
  sponsors: {
    title: "SPONSORS OFFICIELS",
    color: "from-purple-600 to-pink-600",
    partners: [
      { src: '/logos/bmci.png', name: 'BMCI', website: 'https://www.bmci.ma' },
      { src: '/logos/soueast.png', name: 'Soueast', website: 'https://www.soueast-motor.com' }
    ]
  },
  institutionnel: {
    title: "PARTENAIRE INSTITUTIONNEL",
    color: "from-purple-600 to-pink-600",
    partners: [
      { src: '/logos/casablanca.png', name: 'Ville de Casablanca', website: 'https://www.wecasablanca.ma' }
    ]
  },
  transporteur: {
    title: "TRANSPORTEUR AÉRIEN",
    color: "from-purple-600 to-pink-600",
    partners: [
      { src: '/logos/rma.png', name: 'Royal Air Maroc', website: 'https://www.royalairmaroc.com/' }
    ]
  },
  media: {
    title: "PARTENAIRES MÉDIA",
    color: "from-purple-600 to-pink-600",
    partners: [
      { src: '/logos/uradio.png', name: 'U Radio', website: 'https://www.uradio.ma' },
      { src: '/logos/welovebuzz.png', name: 'We Love Buzz', website: 'https://www.welovebuzz.com' },
      { src: '/logos/megarama.png', name: 'Megarama', website: 'https://www.megarama.ma' },
      { src: '/logos/euromedia.png', name: 'Euro Media', website: 'https://www.euromedia.ma' }
    ]
  },
  mediaOfficiel: {
    title: "PARTENAIRE MÉDIA OFFICIEL",
    color: "from-purple-600 to-pink-600",
    partners: [
      { src: '/logos/2m.png', name: '2M TV', website: 'https://www.2m.ma' }
    ]
  },
  mediaInternational: {
    title: "PARTENAIRE MÉDIA INTERNATIONAL",
    color: "from-purple-600 to-pink-600",
    partners: [
      { src: '/logos/tv5.png', name: 'TV5 Monde', website: 'https://www.tv5monde.com' }
    ]
  }
};

const PartnerCard = ({ partner, index, category }) => (
  <motion.a
    href={partner.website}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
    whileHover={{ 
      scale: 1.1,
      transition: { duration: 0.2 }
    }}
    className="group flex items-center justify-center p-2"
  >
    <img 
      src={partner.src} 
      alt={partner.name}
      className={`object-contain transition-transform duration-300 ${
        // SPONSORS OFFICIELS - HUGE logos
        category === 'sponsors' 
          ? 'h-32 md:h-40 lg:h-48 w-auto max-w-full'
          : category === 'institutionnel' || category === 'transporteur'
          ? (partner.name === 'Soueast' ? 'max-h-32 max-w-full' : 'max-h-44 max-w-full')
          : (partner.name === 'Soueast' ? 'max-h-20 max-w-full' : 'max-h-24 max-w-full')
      }`}
    />
  </motion.a>
);

const CompactPartnerCategory = ({ category, data, isLeft = false }) => (
  <motion.div
    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="relative"
  >
    <div className="text-center mb-4">
      <h3 className={`text-xl md:text-2xl lg:text-3xl font-bold font-[Montserrat] bg-gradient-to-r ${data.color} bg-clip-text text-transparent mb-2`}>
        {data.title}
      </h3>
      <div className={`w-12 h-0.5 bg-gradient-to-r ${data.color} rounded-full mx-auto`}></div>
    </div>
    
    <div className={`grid gap-3 ${
      data.partners.length === 1 ? 'grid-cols-1' :
      data.partners.length === 2 ? 'grid-cols-2' :
      data.partners.length <= 4 ? 'grid-cols-2' :
      'grid-cols-2'
    }`}>
      {data.partners.map((partner, partnerIndex) => (
        <PartnerCard 
          key={partnerIndex} 
          partner={partner} 
          index={partnerIndex}
          category={category}
        />
      ))}
    </div>
  </motion.div>
);

const PartnersPageSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-40 w-80 h-80 bg-gradient-to-r from-pink-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-40 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Header with full-width colorful background */}
      <div className="relative py-16 overflow-hidden">
        <div className="absolute inset-0" style={{backgroundColor: '#611A4F'}}></div>
        
        <div className="relative z-10 container mx-auto px-4 max-w-7xl text-center pt-16">
            <motion.span 
              className="inline-block text-white font-semibold tracking-wider text-sm uppercase mb-4 drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              L'écosystème de la réussite
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-[Montserrat] text-white drop-shadow-2xl mb-6"
            >
              NOS PARTENAIRES
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base md:text-lg font-[Montserrat] font-light leading-relaxed text-white/90 max-w-3xl mx-auto drop-shadow-lg"
            >
              Découvrez l'écosystème exceptionnel qui fait de Nostalgia Lovers un festival unique.
            </motion.p>
        </div>
      </div>

      {/* Organized Partners Layout */}
      <div className="relative bg-gradient-to-br from-white via-pink-50/30 to-purple-50/30">
        <div className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            
            {/* Line 1: Sponsors Officiels - BIGGER CONTAINER */}
            <div className="grid grid-cols-1 gap-8 mb-12">
              <div className="max-w-4xl mx-auto">
                <CompactPartnerCategory
                  category="sponsors"
                  data={partnersData.sponsors}
                  isLeft={true}
                />
              </div>
            </div>

            {/* Line 2: Partenaire Institutionnel + Transporteur Aérien */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
              <CompactPartnerCategory
                category="institutionnel"
                data={partnersData.institutionnel}
                isLeft={true}
              />
              <CompactPartnerCategory
                category="transporteur"
                data={partnersData.transporteur}
                isLeft={false}
              />
            </div>

            {/* Line 3: Producteur (solo) - INCREASED SPACING */}
            <div className="grid grid-cols-1 gap-8 mb-20">
              <div className="max-w-lg mx-auto">
                <CompactPartnerCategory
                  category="producteur"
                  data={partnersData.producteur}
                  isLeft={false}
                />
              </div>
            </div>

            {/* Line 4: All Media Partners */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto">
              <CompactPartnerCategory
                category="media"
                data={partnersData.media}
                isLeft={true}
              />
              <CompactPartnerCategory
                category="mediaOfficiel"
                data={partnersData.mediaOfficiel}
                isLeft={false}
              />
              <CompactPartnerCategory
                category="mediaInternational"
                data={partnersData.mediaInternational}
                isLeft={true}
              />
            </div>

            {/* Partnership CTA - Compact version */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center mt-16 p-8 bg-gradient-to-r from-pink-100/70 via-purple-100/70 to-blue-100/70 rounded-2xl backdrop-blur-sm"
            >
              <h3 className="text-xl md:text-2xl font-bold font-[Montserrat] text-gray-800 mb-3">
                Rejoignez l'aventure
              </h3>
              <p className="font-[Montserrat] text-gray-600 mb-6 max-w-xl mx-auto text-sm md:text-base">
                Devenez partenaire de Nostalgia Lovers et découvrez les opportunités de collaboration.
              </p>
              <motion.a
                href="mailto:contact@nostalgialovers.ma"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="font-[Montserrat] bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 inline-block text-sm md:text-base"
              >
                Devenir Partenaire
              </motion.a>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersPageSection;