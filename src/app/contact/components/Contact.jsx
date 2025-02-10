"use client";
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Disc } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="py-12 md:py-20 relative" style={{ backgroundColor: '#7F0646' }}>
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto px-4 pt-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10 text-center mb-8">
              <h2 className="text-4xl md:text-6xl font-bold font-[Montserrat] text-white mb-4">
                CONTACTEZ-NOUS
              </h2>
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
                      <Disc className="w-6 h-6 text-pink-400 animate-spin-slow" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-3xl font-bold text-white font-[Montserrat]">
                      CONNECTEZ-VOUS À L'EXPÉRIENCE
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white/5 rounded-lg p-6 text-center">
                      <Phone className="w-10 h-10 text-pink-400 mx-auto mb-4" />
                      <h4 className="text-xl font-bold text-white mb-2 font-[Montserrat]">
                        Téléphone
                      </h4>
                      <p className="text-white/70 font-[Montserrat]">
                        +212 (0)1 23 45 67 89
                      </p>
                    </div>

                    <div className="bg-white/5 rounded-lg p-6 text-center">
                      <Mail className="w-10 h-10 text-purple-400 mx-auto mb-4" />
                      <h4 className="text-xl font-bold text-white mb-2 font-[Montserrat]">
                        Email
                      </h4>
                      <p className="text-white/70 font-[Montserrat]">
                        contact@nostalgialovers.ma
                      </p>
                      <p className="text-white/70 font-[Montserrat] text-sm">
                        Réponse sous 24h
                      </p>
                    </div>

                    <div className="bg-white/5 rounded-lg p-6 text-center">
                      <MapPin className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
                      <h4 className="text-xl font-bold text-white mb-2 font-[Montserrat]">
                        Adresse
                      </h4>
                      <p className="text-white/70 font-[Montserrat]">
                        Parc du Vélodrome
                      </p>
                      <p className="text-white/70 font-[Montserrat] text-sm">
                        Casablanca
                      </p>
                    </div>
                  </div>

                  <motion.a
                    href="mailto:contact@nostalgialovers.ma"
                    className="block w-full relative group mt-8"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="relative overflow-hidden rounded-full bg-gradient-to-r from-pink-500 to-purple-600 p-[2px]">
                      <div className="relative bg-gradient-to-r from-pink-500 to-purple-600 rounded-full px-4 md:px-6 py-3 text-center">
                        <span className="text-base md:text-lg font-bold text-white font-[Montserrat]">
                          ENVOYEZ-NOUS UN MESSAGE
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