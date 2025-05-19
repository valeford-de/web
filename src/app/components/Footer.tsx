"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Company Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-gray-800 font-medium mb-2">Valeford UG</h3>
            <p className="text-gray-500 text-sm text-center md:text-left">
              Micro-app studio crafting scalable iOS products from Germany.
            </p>
          </div>

          {/* Middle Column - Navigation Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-gray-800 font-medium mb-4">Navigation</h3>
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                className="!text-gray-600 hover:!text-gray-500 !no-underline transition-colors duration-300 text-sm"
              >
                Home
              </Link>
              <Link
                href="/#approach"
                className="!text-gray-600 hover:!text-gray-500 !no-underline transition-colors duration-300 text-sm"
              >
                Approach
              </Link>
              <Link
                href="/#projects"
                className="!text-gray-600 hover:!text-gray-500 !no-underline transition-colors duration-300 text-sm"
              >
                Projects
              </Link>
              <Link
                href="/#work-with-us"
                className="!text-gray-600 hover:!text-gray-500 !no-underline transition-colors duration-300 text-sm"
              >
                Work With Us
              </Link>
            </div>
          </div>

          {/* Right Column - Legal Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-gray-800 font-medium mb-4">Legal</h3>
            <div className="flex flex-col space-y-2">
              <Link
                href="/impressum"
                className="!text-gray-600 hover:!text-gray-500 !no-underline transition-colors duration-300 text-sm"
              >
                Legal Notice
              </Link>
              <Link
                href="/datenschutz"
                className="!text-gray-600 hover:!text-gray-500 !no-underline transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/kontakt"
                className="!text-gray-600 hover:!text-gray-500 !no-underline transition-colors duration-300 text-sm"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-100 text-center md:text-left">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Valeford UG (haftungsbeschränkt)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
