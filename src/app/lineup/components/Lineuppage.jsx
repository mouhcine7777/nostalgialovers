"use client";
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Music, Info } from 'lucide-react';

const artistData = {
  "3 Juillet": [
    { "name": "BONEY M EXPERIENCE", "image": "artist6.jpeg", "youtubeId": "FYGTT7YhywA", "genre": "Disco", "era": "70s", "description": "Version moderne du légendaire Boney M, célèbre pour Daddy Cool.", "additionalInfo": "Daddy Cool – Un tube disco légendaire et indémodable." },
    { "name": "THOMAS ANDRES", "image": "artist4.jpg", "youtubeId": "eNvUS-6PTbs", "genre": "Pop", "era": "80s", "description": "Voix mythique de Modern Talking, célèbre pour Cheri Cheri Lady.", "additionalInfo": "Cheri Cheri Lady – Un hit eurodance culte des années 80." },
    { "name": "BILLY CRAWFORD", "image": "artist2.jpg", "youtubeId": "qBfqcVUK8Q0", "genre": "Pop", "era": "2000s", "description": "Star pop et R&B, célèbre pour Trackin.", "additionalInfo": "*Trackin* – Un morceau pop-R&B ultra entraînant." },
    { "name": "SHOLA AMA", "image": "shola-ama.jpg", "youtubeId": "Kd0PD5MbMnE", "genre": "R&B", "era": "90s", "description": "Icône du R&B britannique avec des hits comme You Might Need Somebody.", "additionalInfo": "You Might Need Somebody – Un classique R&B des années 90." },
    { "name": "LONDONBEAT", "image": "LONDONBEAT.jpg", "youtubeId": "dGw3w_njQ4g", "genre": "Pop", "era": "90s", "description": "Groupe pop international, célèbre pour I've Been Thinking About You.",  "additionalInfo": "I've Been Thinking About You – Un incontournable pop des années 90." },
    { "name": "ROZALLA", "image": "rozalla.jpg", "youtubeId": "95_dAQHui94", "genre": "Dance", "era": "90s", "description": "Légende de la dance, avec l'hymne Everybody's Free (To Feel Good).", "additionalInfo": "Everybody’s Free (To Feel Good) – L’hymne dance de la liberté." },
    { "name": "3T BAND", "image": "3Tband.jpg", "youtubeId": "EBoX-wYhs-U", "genre": "Pop", "era": "90s", "description": "Fils de Tito Jackson, stars du R&B avec Anything.", "additionalInfo": "Anything – Une ballade R&B emblématique des 90s.", "additionalInfo": "I've Been Thinking About You – Un incontournable pop des années 90." },
    { "name": "DJ JENY PRESTON", "image": "jenypreston.jpg", "youtubeId": "WJoaUbctbJs", "genre": "EDM", "era": "2020s", "description": "DJ Jeny Preston – DJ électrisante, mixant les classiques des années 80 et 90 pour une ambiance explosive.", "additionalInfo": "Des hits des années 80 et 90, parfaits pour électriser la piste de danse." },
    { "name": "SANDRA", "image": "sandra.jpg", "youtubeId": "yUc5TvYynAs", "genre": "Pop", "era": "80s", "description": "Icône pop des années 80, connue pour Maria Magdalena.", "additionalInfo": "Maria Magdalena – Un hit new wave électrisant." }
  ],
  "4 Juillet": [
    { "name": "JENNY FROM ACE OF BASE", "image": "artist7.jpg", "youtubeId": "d73tiBBzvFM", "genre": "Pop", "era": "90s", "description": "Chanteuse principale des tubes légendaires All That She Wants et The Sign, icône de la pop 90s.", "additionalInfo": "All That She Wants – Ace of Base : Un hit planétaire aux sonorités reggae-pop uniques." },
    { "name": "LOU BEGA", "image": "artist3.jpg", "youtubeId": "EK_LN3XEcnw", "genre": "World Music", "era": "90s", "description": "Chanteur et showman reconnu pour son style swing et son tube intemporel Mambo No. 5.", "additionalInfo": "*Mambo No. 5 – Lou Bega : Un morceau festif qui a marqué toute une génération." },
    { "name": "LAS KETCHUP", "image": "las-ketchup.jpg", "youtubeId": "arZZw8NyPq8", "genre": "Latin Pop", "era": "2000s", "description": "Groupe espagnol célèbre pour The Ketchup Song (Aserejé), un phénomène musical mondial.", "additionalInfo": "The Ketchup Song (Aserejé) – Las Ketchup : Un titre ensoleillé au refrain inoubliable." },
    { "name": "LAYZEE AKA MR. PRESIDENT", "image": "Mr-president.jpg", "youtubeId": "EScLmWJs82I", "genre": "Eurodance", "era": "90s", "description": "Rappeur et voix charismatique du tube incontournable Coco Jamboo.", "additionalInfo": "Coco Jamboo – Mr. President : Un hymne dance au groove inimitable." },
    { "name": "DOUBLE YOU", "image": "doble-you.jpg", "youtubeId": "ujwm8YrEgI4", "genre": "Dance", "era": "90s", "description": "Groupe eurodance iconique connu pour sa reprise inoubliable de Please Don’t Go.", "additionalInfo": "Please Don’t Go – Double You : Une ballade dance émotionnelle devenue culte." },
    { "name": "MAXX", "image": "maxx.jpg", "youtubeId": "7uhWJATdXMA", "genre": "Eurodance", "era": "90s", "description": "Duo eurodance explosif à l’origine des hits Get-A-Way et No More (I Can’t Stand It).", "additionalInfo": "Get-A-Way – Maxx : Un hit dance puissant aux beats entraînants." },
    { "name": "KELLY O (CAPPELLA)", "image": "kellyo.jpg", "youtubeId": "y3KihWJRh6U", "genre": "Pop", "era": "90s", "description": "Chanteuse de Cappella et voix emblématique du titre U Got 2 Let the Music.", "additionalInfo": "U Got 2 Let the Music – Cappella : Un classique incontournable des clubs 90s." },
    { "name": "BELLINI", "image": "bellini.jpg", "youtubeId": "fhHKYR-v0UE", "genre": "Latin Pop", "era": "90s", "description": "Groupe culte ayant enflammé les pistes de danse avec Samba de Janeiro.", "additionalInfo": "Samba de Janeiro – Bellini : Un cocktail explosif de rythmes brésiliens." },
    { "name": "DJ KEVENATOR", "image": "djkevenator.jpg", "youtubeId": "SWyEzY21nIc", "genre": "EDM", "era": "2010s", "description": "DJ talentueux mixant les plus grands classiques des années 80 et 90 avec une touche moderne.", "additionalInfo": "Spécialiste des remix énergiques qui font vibrer les pistes de danse." },
    { "name": "WHIGFIELD", "image": "WHIGFIELD.webp", "youtubeId": "8DNQRtmIMxk", "genre": "Eurodance", "era": "90s", "description": "Icône de la dance 90s, connue pour l’hymne Saturday Night.", "additionalInfo": "Saturday Night – Whigfield* : Un hit festif qui a marqué toute une génération." },
    { "name": "TANIA EVANS", "image": "taniaevans.jpg", "youtubeId": "ZMtf_ouMTHw", "genre": "Dance", "era": "90s", "description": "Chanteuse officielle du hit Mr. Vain de Culture Beat, une voix puissante et inoubliable.", "additionalInfo": "Mr. Vain – Culture Beat : Un titre incontournable de la dance des années 90." }
  ],
  "5 Juillet": [
    { "name": "TECHNOTRONIQUE", "image": "artist5.jpg", "youtubeId": "9EcjWd-O4jI", "genre": "Techno", "era": "90s",  "description": "Pionnier de l’eurodance avec le tube Pump Up the Jam.","additionalInfo": "Pump Up the Jam : Eurodance iconique, un incontournable des clubs." },
    { "name": "MONTELL JORDAN", "image": "montell.jpg", "youtubeId": "0hiUuL5uTKc", "genre": "R&B", "era": "90s", "description": "Célèbre pour l’incontournable This Is How We Do It, un classique R&B des années 90.", "additionalInfo": "This Is How We Do It : Hymne R&B des années 90, parfait pour les soirées animées." },
    { "name": "LA MOVIDA IBIZA", "image": "movida.jpg", "youtubeId": "kuLyN9ZGSqQ", "genre": "House", "era": "2000s", "description": "Groupe dance festive inspiré par l’ambiance des soirées ibériques.","additionalInfo": "Dance énergique, capturant l'esprit des soirées d'Ibiza." },
    { "name": "SALOME DE BAHIA", "image": "salomedebahia.jpg", "youtubeId": "eCvCnCMmXRI", "genre": "Brazilian Jazz", "era": "2000s", "description": "Artiste brésilienne alliant samba et sons modernes, avec des hits comme Outro Lugar.", "additionalInfo": "Outro Lugar : Samba moderne et festive, un mélange vibrant de rythmes brésiliens." },
    { "name": "REEL 2 REEL", "image": "reel2reel.jpg", "youtubeId": "vuo8kD5zF5I", "genre": "Dance", "era": "90s", "description": "Groupe eurodance des années 90, avec le célèbre I Like to Move It.",  "additionalInfo": "I Like to Move It : Eurodance explosif, avec un refrain irrésistible." },
    { "name": "C + C MUSIC FACTORY", "image": "ccmusicfactory.jpg", "youtubeId": "LaTGrV58wec", "genre": "Dance Pop", "era": "90s", "description": "Légendes de la dance avec Gonna Make You Sweat et autres hits.", "additionalInfo": "Gonna Make You Sweat : Dance des années 90, entraînant et dynamique." },
    { "name": "GIBSON BROTHERS", "image": "gibsonbrothers.jpg", "youtubeId": "NKwsGIw9ASM", "genre": "Disco", "era": "70s", "description": "Groupe disco-salsa, célèbre pour Que Será Mi Vida, un incontournable des années 80.", "additionalInfo": "Que Será Mi Vida : Disco-salsa entraînant avec des rythmes latins enflammés." },
    ],
  };

  export default function LineupPage() {
    const [activeDay, setActiveDay] = useState('3 Juillet');
    const [selectedArtist, setSelectedArtist] = useState(null);
    const [showDescription, setShowDescription] = useState(false);
    const modalRef = useRef(null);
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
          setSelectedArtist(null);
          setShowDescription(false);
        }
      };
  
      if (selectedArtist) {
        document.addEventListener('mousedown', handleClickOutside);
      }
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [selectedArtist]);
  
    return (
      <main>
        <section 
          className="min-h-screen pt-36 py-12 relative overflow-hidden" 
          style={{ backgroundColor: '#7F0646' }}
        >
          <div className="container mx-auto px-4 relative z-10">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-center mb-8 font-[Montserrat] text-white"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              LINE-UP MYTHIQUE
              <p 
                className="text-base md:text-lg text-center mb-8 md:mb-9 font-[Montserrat] font-light px-4"
                style={{ color: '#FFFFFF' }}
              >
                Les stars des 80s & 90s, en live pour un show épique.
              </p>
            </motion.h1>
  
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-12 px-4">
              {Object.keys(artistData).map((day) => (
                <button
                  key={day}
                  onClick={() => setActiveDay(day)}
                  className={`px-6 sm:px-10 py-2 sm:py-3 rounded-full text-base sm:text-lg font-[Montserrat] font-bold transition-all duration-300 ease-in-out
                    ${
                      activeDay === day
                        ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg scale-105'
                        : 'bg-transparent border-2 border-pink-500 text-white hover:bg-pink-500/20 hover:shadow-md hover:scale-105'
                    }`}
                >
                  {day}
                </button>
              ))}
            </div>
  
            <motion.div
              key={activeDay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
            >
              {artistData[activeDay].map((artist, index) => (
                <motion.div 
                  key={index}
                  onClick={() => {
                    setSelectedArtist(artist);
                    setShowDescription(false);
                  }}
                  className="aspect-[3/4] rounded-lg overflow-hidden group relative shadow-2xl cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ 
                    scale: 1.05, 
                    rotateX: 5,
                    rotateY: -5,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white text-center font-[Montserrat]">
                      {artist.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
  
        <AnimatePresence>
        {selectedArtist && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={modalRef}
              className="w-full max-w-5xl bg-transparent relative"
              initial={{ scale: 0.9, opacity: 0, rotateX: 30 }}
              animate={{ 
                scale: 1, 
                opacity: 1, 
                rotateX: 0,
                transition: { 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20 
                }
              }}
              exit={{ scale: 0.9, opacity: 0, rotateX: 30 }}
            >
                <button 
                  onClick={() => {
                    setSelectedArtist(null);
                    setShowDescription(false);
                  }}
                  className="absolute -top-10 right-0 text-white hover:text-pink-500 z-50 bg-pink-600/30 rounded-full p-2"
                >
                  <X size={24} />
                </button>
  
                <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-2xl border-4 border-pink-600">
                  <div 
                    className="hidden md:block w-1/3 relative"
                    style={{
                      backgroundImage: `url(${selectedArtist.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white font-[Montserrat]">
                      <h2 className="text-2xl font-bold font-[Montserrat]">{selectedArtist.name}</h2>
                      <p className="text-sm opacity-80">{selectedArtist.genre} | {selectedArtist.era}</p>
                      {selectedArtist.description &&(
                        <motion.p 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-2 text-sm italic"
                        >
                          {selectedArtist.description}
                        </motion.p>
                      )}
                    </div>
                  </div>
  
                  <div 
                    className="md:hidden w-full h-64 relative"
                    style={{
                      backgroundImage: `url(${selectedArtist.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h2 className="text-2xl font-bold">{selectedArtist.name}</h2>
                      <p className="text-sm opacity-80">{selectedArtist.genre} | {selectedArtist.era}</p>
                      {selectedArtist.description && (
                        <motion.p 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-2 text-sm italic"
                        >
                          {selectedArtist.description}
                        </motion.p>
                      )}
                    </div>
                  </div>
  
                  <div className="w-full md:w-2/3 bg-black/90 p-4 md:p-6 flex flex-col">
                <div className="flex-grow">
                  <div className="w-full aspect-video border-2 border-pink-600 rounded-lg overflow-hidden">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${selectedArtist.youtubeId}?autoplay=1`}
                      title={`${selectedArtist.name} Video`}
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                  </div>
                </div>
  
                <motion.div 
                  className="mt-4 flex items-center justify-center space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center bg-pink-600/20 px-4 py-2 rounded-full">
                    <Music className="mr-2 text-pink-400" />
                    <span className="text-white">Top Hit</span>
                  </div>
                  {selectedArtist.additionalInfo &&(
                    <button
                      onClick={() => setShowDescription(!showDescription)}
                      className="flex items-center bg-pink-600/20 px-4 py-2 rounded-full hover:bg-pink-600/30 transition-colors"
                    >
                      <Info className="mr-2 text-pink-400" />
                      <span className="text-white">À propos</span>
                    </button>
                  )}
                </motion.div>
  
                <AnimatePresence>
                  {showDescription && selectedArtist.additionalInfo && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 bg-pink-600/10 rounded-lg p-4"
                    >
                      <p className="text-white text-center italic">
                        {selectedArtist.additionalInfo}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    );
  }