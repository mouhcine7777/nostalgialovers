"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link"; // Import the Link component

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "LINEUP", href: "/lineup" },
    { name: "ÉDITION 2024", href: "/2024edition" },
    { name: "PARTNERS", href: "/partners" },
    { name: "CONTACTS", href: "/contact" },
  ];

  return (
    <>
      {/* Main Navigation */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/20 backdrop-blur-md py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="md:w-6">
              <motion.div
                layout
                className={`transition-all duration-300 md:hidden ${
                  isScrolled ? "scale-75" : "scale-100"
                }`}
              >
                <Link href="/"> {/* Wrap the Image with Link */}
                  <Image
                    src="/logo.webp"
                    alt="Nostalgia Lovers Festival Logo"
                    width={60}
                    height={60}
                    className="transition-all duration-300"
                  />
                </Link>
              </motion.div>
            </div>

            <motion.div
              layout
              className={`transition-all duration-300 hidden md:block ${
                isScrolled ? "scale-75" : "scale-100"
              }`}
            >
              <Link href="/"> {/* Wrap the Image with Link */}
                <Image
                  src="/logo.webp"
                  alt="Nostalgia Lovers Festival Logo"
                  width={isScrolled ? 60 : 100}
                  height={isScrolled ? 60 : 100}
                  className="transition-all duration-300"
                />
              </Link>
            </motion.div>

            <Button
              variant="ghost"
              size="icon"
              className="text-white z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Refined Side Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "tween", duration: 0.4, ease: "easeOut" }}
              className="fixed right-0 top-0 bottom-0 z-40 w-full md:w-96 bg-gradient-to-br from-purple-950/95 via-indigo-950/95 to-blue-950/95 shadow-2xl"
            >
              {/* Decorative Elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-purple-400/10 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-blue-400/10 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:24px_24px]" />
              </div>

              {/* Content Container */}
              <div className="relative h-full flex flex-col justify-center items-center px-8">
                <motion.div 
                  className="flex flex-col items-center space-y-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        delay: index * 0.1 + 0.4,
                        duration: 0.6,
                        ease: [0.215, 0.610, 0.355, 1.000]
                      }}
                      className="relative"
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="relative block"
                      >
                        <span className="block text-4xl font-[Montserrat] font-black text-white text-center tracking-wider">
                          {item.name}
                        </span>
                        <span className="block h-1 w-0 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 mt-1 transition-all duration-300 group-hover:w-full" />
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Bottom Decoration */}
              <div className="absolute bottom-8 left-0 w-full flex justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="w-12 h-1 rounded-full bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400"
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;