"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles/navigation.module.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock/unlock body scroll when mobile menu is opened/closed
  useEffect(() => {
    if (isOpen) {
      // Lock scroll
      document.body.style.overflow = 'hidden';
    } else {
      // Unlock scroll
      document.body.style.overflow = '';
    }

    // Cleanup function to ensure we remove the lock if component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Animation variants for staggered animation of menu items
  const menuVariants = {
    hidden: { 
      opacity: 0,
      y: -20,
    },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: 0.1 + custom * 0.1,
        duration: 0.5,
        ease: "easeOut" 
      }
    }),
    exit: { 
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 md:px-8 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <span className="text-xl font-bold tracking-tight text-gray-900 font-['Raleway']">
              Valeford
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={styles.navLink}>
              Home
            </Link>
            <Link href="/about" className={styles.navLink}>
              About
            </Link>
            <Link href="/projects" className={styles.navLink}>
              Projects
            </Link>
            <Link href="/contact" className={styles.navLink}>
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-gray-500 focus:outline-none relative z-50"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={`fixed inset-0 z-40 md:hidden flex flex-col ${styles.mobileMenuOverlay}`}
          >
            <div className="flex-1 flex items-center justify-center">
              <div className="flex flex-col items-center space-y-8 py-12">
                <motion.div
                  custom={0}
                  variants={menuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className={styles.menuItem}
                >
                  <Link 
                    href="/" 
                    className={`${styles.navLink} py-3 px-8 text-center text-base`}
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                </motion.div>

                <motion.div
                  custom={1}
                  variants={menuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className={styles.menuItem}
                >
                  <Link 
                    href="/about" 
                    className={`${styles.navLink} py-3 px-8 text-center text-base`}
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                </motion.div>

                <motion.div
                  custom={2}
                  variants={menuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className={styles.menuItem}
                >
                  <Link 
                    href="/projects" 
                    className={`${styles.navLink} py-3 px-8 text-center text-base`}
                    onClick={() => setIsOpen(false)}
                  >
                    Projects
                  </Link>
                </motion.div>

                <motion.div
                  custom={3}
                  variants={menuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className={styles.menuItem}
                >
                  <Link 
                    href="/contact" 
                    className={`${styles.navLink} py-3 px-8 text-center text-base`}
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
