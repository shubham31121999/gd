// import React from "react";
// import { Users, Microscope, SmilePlus, MapPin } from "lucide-react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const pillars = [
//   {
//     icon: <Users className="w-8 h-8 text-themeGreen" />,
//     title: "Expert Team",
//     desc: "Led by Dr. Burzin Khan (MDS Prosthodontics), with 30+ years of experience and a team of top specialists.",
//   },
//   {
//     icon: <Microscope className="w-8 h-8 text-themeGreen" />,
//     title: "Advanced Technology",
//     desc: "We use 3D CBCT scans, laser dentistry, and digital smile design for world-class precision and comfort.",
//   },
//   {
//     icon: <SmilePlus className="w-8 h-8 text-themeGreen" />,
//     title: "Patient-Centric Care",
//     desc: "Pain-free treatments with ISO-certified hygiene, entertainment, and anxiety-free techniques.",
//   },
//   {
//     icon: <MapPin className="w-8 h-8 text-themeGreen" />,
//     title: "Convenience & Accessibility",
//     desc: "Clinics in Bandra & Fort, open 6 days a week, with easy scheduling and on-site parking.",
//   },
// ];

// const PillarCard = ({ icon, title, desc }) => (
//   <div className="bg-gray-50 p-5 rounded-xl shadow-md hover:shadow-lg hover:shadow-themeGreen/30 transition-all duration-300 ease-in-out transform hover:-translate-y-1 text-left">
//     <div className="mb-3">{icon}</div>
//     <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
//     <p className="text-sm text-gray-600">{desc}</p>
//   </div>
// );

// const WhyChoose = () => {
//   const sliderSettings = {
//     dots: false,
//     arrows: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <section className="w-full bg-darkGray py-20 px-6 sm:px-8">
//       <div className="max-w-5xl mx-auto">
//         <h2 className="text-3xl sm:text-4xl font-bold text-themeLight mb-12 text-center">
//           Why Thousands Trust OPUS Dental
//         </h2>

//         {/* Mobile Slider */}
//         <div className="block sm:hidden">
//           <Slider {...sliderSettings}>
//             {pillars.map((pillar, index) => (
//               <div key={index} className="px-4">
//                 <PillarCard {...pillar} />
//               </div>
//             ))}
//           </Slider>
//         </div>

//         {/* Desktop Grid */}
//         <div className="hidden sm:grid grid-cols-2 gap-6">
//           {pillars.map((pillar, index) => (
//             <PillarCard key={index} {...pillar} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChoose;
import React from "react";
import { Users, Microscope, SmilePlus, MapPin } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const pillars = [
  {
    icon: <Users className="w-8 h-8 text-themeGreen" />,
    title: "Expert Team",
    desc: "Led by Dr. Burzin Khan (MDS Prosthodontics), with 30+ years of experience and a team of top specialists.",
  },
  {
    icon: <Microscope className="w-8 h-8 text-themeGreen" />,
    title: "Advanced Technology",
    desc: "We use 3D CBCT scans, laser dentistry, and digital smile design for world-class precision and comfort.",
  },
  {
    icon: <SmilePlus className="w-8 h-8 text-themeGreen" />,
    title: "Patient-Centric Care",
    desc: "Pain-free treatments with ISO-certified hygiene, entertainment, and anxiety-free techniques.",
  },
  {
    icon: <MapPin className="w-8 h-8 text-themeGreen" />,
    title: "Convenience & Accessibility",
    desc: "Clinics in Bandra & Fort, open 6 days a week, with easy scheduling and on-site parking.",
  },
];

// Custom arrow components
const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute right-[-10px] sm:right-0 top-1/2 transform -translate-y-1/2 z-10 
               bg-white text-themeGreen hover:bg-themeGreen hover:text-white 
               p-2 rounded-full shadow-md cursor-pointer"
  >
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute left-[-10px] sm:left-0 top-1/2 transform -translate-y-1/2 z-10 
               bg-white text-themeGreen hover:bg-themeGreen hover:text-white 
               p-2 rounded-full shadow-md cursor-pointer"
  >
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  </div>
);

const PillarCard = ({ icon, title, desc }) => (
  <div className="bg-darkGray p-5 rounded-xl shadow-md hover:shadow-lg hover:shadow-themeGreen/30 transition-all duration-300 ease-in-out transform hover:-translate-y-1 text-center">
    <div className="mb-3 flex justify-center">{icon}</div>

    <h3 className="text-lg font-semibold text-themeLight mb-1">{title}</h3>
    <p className="text-sm text-themeLight">{desc}</p>
  </div>
);

const WhyChoose = () => {
  const sliderSettings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="w-full bg-white py-20 px-6 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-darkGray mb-12 text-center">
          Why Thousands Trust OPUS Dental
        </h2>

        {/* Mobile Slider */}
        <div className="block sm:hidden px-4 relative">
          <Slider {...sliderSettings}>
            {pillars.map((pillar, index) => (
              <div key={index} className="px-2">
                <PillarCard {...pillar} />
              </div>
            ))}
          </Slider>
        </div>

        {/* Desktop Grid */}
        <div className="hidden sm:grid grid-cols-2 gap-6">
          {pillars.map((pillar, index) => (
            <PillarCard key={index} {...pillar} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
