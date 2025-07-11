

// // import React, { useState } from 'react';
// // import PopupForm from './PopupForm'; // adjust path based on your project
// // import desktopBanner from '../assets/Banner3.webp';
// // import mobileBanner from '../assets/banner4.webp';

// // function Banner() {
// //   const [showForm, setShowForm] = useState(false);

// //   const toggleForm = () => {
// //     setShowForm((prev) => !prev);
// //   };

// //   return (
// //     <div className="relative w-full overflow-hidden">
// //       {/* Clickable Banner */}
// //       <div onClick={toggleForm} className="cursor-pointer">
// //         {/* Desktop Image */}
// //         <img
// //           src={desktopBanner}
// //           alt="Desktop Banner"
// //           className="hidden sm:block w-full h-full object-cover"
// //           fetchpriority="high"
// //         />
// //         {/* Mobile Image */}
// //         <img
// //           src={mobileBanner}
// //           alt="Mobile Banner"
// //           className="block sm:hidden w-full h-full object-cover"
// //           fetchpriority="high"
// //         />
// //       </div>

// //       {/* Popup Form */}
// //       {showForm && <PopupForm onClose={toggleForm} />}
// //     </div>
// //   );
// // }

// // export default Banner;
// import React, { useState } from 'react';

// import desktopBanner from '../assets/Banner3.webp';
// import mobileBanner from '../assets/banner4.webp';
// import { Suspense, lazy } from 'react'; // ✅ both

// // Lazy-load PopupForm only when needed (improves initial load)
// const PopupForm = lazy(() => import('./PopupForm'));

// function Banner() {
//   const [showForm, setShowForm] = useState(false);

//   const toggleForm = () => setShowForm(prev => !prev);

//   return (
//     <div className="relative w-full overflow-hidden">
//       {/* Clickable Banner */}
//       <div
//         onClick={toggleForm}
//         onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleForm()}
//         role="button"
//         tabIndex={0}
//         className="cursor-pointer outline-none"
//         aria-label="Open form"
//       >
//         <picture>
//           {/* Desktop first, fallback is mobile — this helps browsers preload correct image faster */}
//           <source
//             srcSet={desktopBanner}
//             media="(min-width: 640px)"
//             type="image/webp"
//           />
//           <img
//   src={mobileBanner}
//   width={800}
//   height={500}
//   alt="Promotional Banner"
//   className="w-full h-auto object-cover"
//   fetchpriority="high"
//   loading="eager"
// />

//         </picture>
//       </div>

//       {/* Popup Form */}
//       {showForm && <PopupForm onClose={toggleForm} />}
//     </div>
//   );
// }

// export default Banner;

import React, { useState } from 'react';
import gd from  '../assets/gd.jpg'; // Adjust the path as necessary

import gd1 from '../assets/gd1.jpg'; // Adjust the path as necessary
function Banner() {
  const [PopupForm, setPopupForm] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const toggleForm = async () => {
    if (!PopupForm) {
      const mod = await import('./PopupForm');
      setPopupForm(() => mod.default);
    }
    setShowForm((prev) => !prev);
  };

  return (
<section className="relative w-full overflow-hidden">
  {/* ✅ Banner Clickable Area */}
  <div
    onClick={toggleForm}
    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleForm()}
    role="button"
    tabIndex={0}
    aria-label="Open form"
    className="cursor-pointer outline-none"
  >
    {/* ✅ Responsive, Pre-sized, Priority Image */}
    <picture className="block w-full">
  <source
    srcSet={gd1}
    media="(max-width: 639px)"
    type="image/jpg"
  />
  <source
    srcSet={gd}
    media="(min-width: 640px)"
    type="image/jpg"
  />
  <img
    src={gd}
    alt="Promotional Dental Banner"
    className="w-full h-auto"
    loading="eager"
    fetchPriority="high"
    decoding="async"
  />
</picture>




  </div>

  {/* ✅ Lazy-loaded Popup Form */}
  {PopupForm && showForm && <PopupForm onClose={toggleForm} />}
</section>

  );
}

export default Banner;
