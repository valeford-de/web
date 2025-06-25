"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bars3Icon,
  XMarkIcon,
  VideoCameraIcon,
  VideoCameraSlashIcon,
} from "@heroicons/react/24/outline";
import { useVideo } from "@/app/contexts/VideoContext";

const navigation = [
  { name: "Strategy", href: "/strategy" },
  { name: "Platform", href: "/platform" },
  { name: "Ventures", href: "/ventures" },
  { name: "Team", href: "/team" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { videoEnabled, toggleVideo } = useVideo();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/20 backdrop-blur-md border-b border-white/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="container-wide" aria-label="Global">
        <div className="flex items-center py-5">
          {/* Logo */}
          <div className="mr-12">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="text-xl font-black text-white tracking-tight">
                VALEFORD
              </span>
            </Link>
          </div>

          {/* Desktop navigation - Left aligned */}
          <div className="hidden lg:flex lg:gap-x-10 flex-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors relative ${
                  pathname === item.href
                    ? "text-white"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-px bg-white"
                    layoutId="activeTab"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right side controls */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Video Toggle Button */}
            <button
              onClick={toggleVideo}
              className="p-2 text-white/80 hover:text-white transition-colors rounded-md hover:bg-white/10"
              title={
                videoEnabled
                  ? "Disable video background"
                  : "Enable video background"
              }
            >
              {videoEnabled ? (
                <VideoCameraSlashIcon className="h-5 w-5" />
              ) : (
                <VideoCameraIcon className="h-5 w-5" />
              )}
            </button>

            {/* Contact CTA */}
            <Link
              href="/contact"
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden ml-auto">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center p-2.5 text-white/80 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu panel */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
            >
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="text-xl font-black text-gray-900 tracking-tight">
                    VALEFORD
                  </span>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 p-2.5 text-institutional-600 hover:text-gray-900 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              <div className="mt-8 flow-root">
                <div className="-my-6 divide-y divide-institutional-200">
                  <div className="space-y-1 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`-mx-3 block px-3 py-3 text-base font-medium leading-7 transition-colors ${
                          pathname === item.href
                            ? "text-gray-900 bg-institutional-50"
                            : "text-institutional-600 hover:text-gray-900 hover:bg-institutional-50"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6">
                    <Link
                      href="/contact"
                      className="-mx-3 block px-3 py-3 text-base font-medium text-institutional-600 hover:text-gray-900 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Get in Touch
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
