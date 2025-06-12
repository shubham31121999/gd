import React from 'react';
import desktopBanner from '../assets/Banner3.webp';
import mobileBanner from '../assets/banner4.webp';

function Banner() {
  return (
    <div className="w-full overflow-hidden">
      {/* Desktop Image */}
      <img
      rel="preload"
        src={desktopBanner}
        alt="Desktop Banner"
        className="hidden sm:block w-full h-full object-cover"
        fetchpriority="high"
      />

      {/* Mobile Image */}
      <img
      rel="preload"
        src={mobileBanner}
        alt="Mobile Banner"
        className="block sm:hidden w-full h-full object-cover"
        fetchpriority="high"
      />
    </div>
  );
}

export default Banner;

