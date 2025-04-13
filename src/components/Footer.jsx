import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaGoogle, FaEnvira, FaBeer } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center text-center">
          {/* Logo and Tagline */}
          <div className="mb-8">
            <h2 className="text-4xl font-bold tracking-wider mb-2">SAPRINAA</h2>
            <p className="text-xl text-amber-400"><span className='text-white'>—</span> REST & CAFE —</p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mb-8 text-amber-400">
            <a href="#" className="hover:text-amber-300 transition-colors">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="#" className="hover:text-amber-300 transition-colors">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="#" className="hover:text-amber-300 transition-colors">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="#" className="hover:text-amber-300 transition-colors">
              <FaGoogle className="text-2xl" />
            </a>
            <a href="#" className="hover:text-amber-300 transition-colors">
              <FaEnvira className="text-2xl" />
            </a>
            <a href="#" className="hover:text-amber-300 transition-colors">
              <FaBeer className="text-2xl" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            <p>Copyright © 2025 - Saprinaa by Developed</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;