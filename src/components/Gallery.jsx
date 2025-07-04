// import React from 'react';
// import img1 from '../assets/img1.webp';
// import img2 from '../assets/img2.webp';
// import img3 from '../assets/img3.webp';
// import img4 from '../assets/img4.webp';
// import img5 from '../assets/img5.webp';
// import img6 from '../assets/img6.webp';

// const images = [
//   img1,img2,img3,img4,img5,img6
// ];

// function Gallery() {
//   return (
//     <div className="py-10 px-4 max-w-6xl mx-auto">
//       <h2 className="text-3xl font-bold mb-6 text-center">Clinic Gallery</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {images.map((src, index) => (
//           <div key={index} className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transform transition duration-300">
//             <img
//               src={src}
//               alt={`Gallery Image ${index + 1}`}
//               className="w-full h-60 object-cover"
//               loading="lazy"
//               decoding="async"
//               fetchpriority="low"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Gallery;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import img1 from '../assets/img1.webp';
import img2 from '../assets/img2.webp';
import img3 from '../assets/img3.webp';
import img4 from '../assets/img4.webp';
import img5 from '../assets/img5.webp';
import img6 from '../assets/img6.webp';

const images = [img1, img2, img3, img4, img5, img6];

function Gallery() {
  return (
    <div className="py-10 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Clinic Gallery</h2>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transform transition duration-300">
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-60 object-cover"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Gallery;
