import React from 'react';
import logo from '../assets/logo.png';
import { Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-darkGray text-white py-10 px-4">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
        
        {/* Desktop View: Logo */}
        <div className="hidden lg:block lg:w-1/4">
          <img src={logo} alt="Logo" className="h-30 w-auto object-contain" />
        </div>

        {/* iFrame Always Visible at Top on Mobile, Middle on Desktop */}
        <div className="w-full lg:w-1/2 h-64 order-1 lg:order-none">
          <iframe
            title="OPUS Dental Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.755134774481!2d72.82716917595364!3d19.07598998212045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf2b1e1e4e13%3A0x8984a61e0ec60ae3!2sBandra%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1717923344468!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded shadow-md"
          ></iframe>
        </div>

        {/* Desktop View: Call Button */}
        <div className="hidden lg:flex lg:w-1/4 justify-end">
          <a
            href="tel:7045117623"
            className="flex items-center gap-2 bg-themeLight text-black font-md font-bold px-6 py-3 rounded hover:text-black hover:bg-white transition"
          >
            <Phone className="w-5 h-5 animate-vibrate" />
            7045117623
          </a>
        </div>

        {/* Mobile View: Logo + Call Button Together Under iframe */}
        <div className="flex lg:hidden w-full justify-between items-center mt-6">
          {/* Logo */}
          <img src={logo} alt="Logo" className="h-14 w-auto object-contain" />

          {/* Call Button */}
          <a
            href="tel:7045117623"
            className="flex items-center gap-2 font-md bg-themeLight text-black font-bold px-4 py-2 rounded hover:text-black hover:bg-white transition"
          >
            <Phone className="w-5 h-5 animate-vibrate" />
            7045117623
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
