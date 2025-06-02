"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
    { name: "ACCUEIL", href: "/" },
    { name: "LINEUP", href: "/lineup" },
    { name: "ÉDITION 2024", href: "/2024edition"},
    { name: "PARTENAIRES  ", href: "/partners" },
    { name: "CONTACT", href: "/contact" },
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
          <div className="flex items-center">
            {/* Logo Container - Left on mobile, centered on desktop */}
            <div className="md:flex-1 md:flex md:justify-center">
              <motion.div
                layout
                className={`transition-all duration-300 ${
                  isScrolled ? "scale-75" : "scale-100"
                }`}
              >
                <Link href="/">
                  <Image
                    src="/Logo.webp"
                    alt="Nostalgia Lovers Festival Logo"
                    width={isScrolled ? 60 : 100}
                    height={isScrolled ? 60 : 100}
                    className="transition-all duration-300 max-w-[80px] md:max-w-none"
                  />
                </Link>
              </motion.div>
            </div>

            {/* Updated Burger Menu Button with Accessibility Improvements */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <Button
                variant="ghost"
                size="lg"
                className="text-white z-50 p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMenuOpen ? (
                  <X className="h-8 w-8 stroke-[3]" aria-hidden="true" />
                ) : (
                  <Menu className="h-8 w-8 stroke-[3]" aria-hidden="true" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Side Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md"
              aria-hidden="true"
            />
            
            <motion.div
              id="mobile-menu"
              role="navigation"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "tween", duration: 0.6, ease: "anticipate" }}
              className="fixed right-0 top-0 bottom-0 z-40 w-full md:w-96 bg-gradient-to-br from-purple-950/95 via-indigo-950/95 to-blue-950/95 shadow-2xl"
            >
              {/* Decorative Elements */}
              <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
                <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-purple-400/10 to-transparent animate-pulse" />
                <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-blue-400/10 to-transparent animate-pulse" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:24px_24px]" />
              </div>

              {/* Content Container */}
              <div className="relative h-full flex flex-col justify-center items-center px-8 py-12">
                <motion.div 
                  className="flex flex-col items-center space-y-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  role="menu"
                >
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        delay: index * 0.1 + 0.1,
                        duration: 0.1,
                        ease: [0.215, 0.610, 0.355, 1.000]
                      }}
                      className="relative transform transition-transform duration-300 hover:scale-105"
                      role="menuitem"
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="relative block group"
                      >
                        <span className="block text-4xl font-[Montserrat] font-black text-white text-center tracking-wider">
                          {item.name}
                        </span>
                        <span className="block h-1 w-0 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 mt-1 transition-all duration-300 group-hover:w-full" aria-hidden="true" />
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Bottom Decoration */}
              <div className="absolute bottom-8 left-0 w-full flex justify-center" aria-hidden="true">
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