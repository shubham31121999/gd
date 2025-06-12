import React from "react";
import logo from "../assets/logo.png"; // Adjust the path as necessary
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
        href="tel:70451 17623"
        className="inline-flex items-center gap-2 px-4 py-2 text-sm sm:text-base bg-themeLight text-darkGray font-medium rounded hover:bg-opacity-90 transition duration-200"
      >
        <Phone className="w-5 h-5 animate-vibrate" />
        70451 17623
      </a>
    </div>
</header>

  );
};

export default Navbar;
