import React from "react";
import logo from "../assets/logo.webp"; // Adjust the path as necessary
import { Phone } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="w-full px-6 sm:px-6 md:px-8 py-3 bg-darkGray shadow-md flex items-center justify-between">
  {/* Logo */}
  <div className="flex items-center">
    <img
      src={logo}
      alt="Logo"
      className="h-20 w-auto object-contain"
    />
  </div>

  {/* Contact Button */}
  <div>
      <a
        href="tel:7045117623"
        className="inline-flex items-center gap-2 px-4 py-2 text-md sm:text-base bg-themeLight text-darkGray  rounded hover:bg-white transition duration-200 font-bold"
      >
        <Phone className="w-5 h-5 animate-vibrate" />
        7045117623
      </a>
    </div>
</header>

  );
};

export default Navbar;
