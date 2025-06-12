import React from 'react';
import desktopBanner from '../assets/Banner3.webp';
import mobileBanner from '../assets/banner4.webp';

function Banner() {
  return (
    <div className="w-full overflow-hidden">
      {/* Desktop Image */}
      <img
        src={desktopBanner}
        alt="Desktop Banner"
        className="hidden sm:block w-full h-full object-cover"
      />

      {/* Mobile Image */}
      <img
        src={mobileBanner}
        alt="Mobile Banner"
        className="block sm:hidden w-full h-full object-cover"
      />
    </div>
  );
}

export default Banner;

