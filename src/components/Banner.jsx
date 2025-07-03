// import React from 'react';
// import desktopBanner from '../assets/Banner3.webp';
// import mobileBanner from '../assets/banner4.webp';

// function Banner() {
//   return (
//     <div className="w-full overflow-hidden">
//       {/* Desktop Image */}
//       <img
//       rel="preload"
//         src={desktopBanner}
//         alt="Desktop Banner"
//         className="hidden sm:block w-full h-full object-cover"
//         fetchpriority="high"
//       />

//       {/* Mobile Image */}
//       <img
//       rel="preload"
//         src={mobileBanner}
//         alt="Mobile Banner"
//         className="block sm:hidden w-full h-full object-cover"
//         fetchpriority="high"
//       />
//     </div>
//   );
// }

// export default Banner;

import React, { useState } from 'react';
import PopupForm from './PopupForm'; // adjust path based on your project
import desktopBanner from '../assets/Banner3.webp';
import mobileBanner from '../assets/banner4.webp';

function Banner() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm((prev) => !prev);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Clickable Banner */}
      <div onClick={toggleForm} className="cursor-pointer">
        {/* Desktop Image */}
        <img
          src={desktopBanner}
          alt="Desktop Banner"
          className="hidden sm:block w-full h-full object-cover"
          fetchpriority="high"
        />
        {/* Mobile Image */}
        <img
          src={mobileBanner}
          alt="Mobile Banner"
          className="block sm:hidden w-full h-full object-cover"
          fetchpriority="high"
        />
      </div>

      {/* Popup Form */}
      {showForm && <PopupForm onClose={toggleForm} />}
    </div>
  );
}

export default Banner;
