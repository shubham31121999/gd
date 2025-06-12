// import React from "react";
// import { Star } from "lucide-react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const testimonials = [
//   {
//     name: "Aparna S.",
//     location: "Bandra",
//     treatment: "Smile Makeover",
//     content:
//       "I was always afraid of dentists, but OPUS completely changed that. The procedure was painless and the staff was so comforting. Now I can’t stop smiling with confidence!",
//     rating: 5,
//   },
//   {
//     name: "Rahul M.",
//     location: "Fort",
//     treatment: "Implants",
//     content:
//       "Got my implants done here and I’m beyond satisfied. The precision, tech, and friendly care made the experience amazing.",
//     rating: 5,
//   },
//   {
//     name: "Sneha T.",
//     location: "Mumbai",
//     treatment: "Root Canal",
//     content:
//       "Booked an emergency appointment for a root canal. They handled everything so smoothly. Clean, modern and truly professional!",
//     rating: 5,
//   },
//   // Add more if needed
// ];

// const TestimonialCard = ({ testimonial }) => (
//   <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg hover:shadow-themeGreen/30 transition-all duration-300 ease-in-out transform hover:-translate-y-1 text-left">
//     <h4 className="text-md font-semibold text-themeGreen mb-1">{testimonial.name}</h4>
//     <p className="text-xs text-gray-500 mb-3">
//       {testimonial.location} • {testimonial.treatment}
//     </p>
//     <p className="text-gray-700 italic mb-4">“{testimonial.content}”</p>
//     <div className="flex items-center gap-1 text-yellow-500 mt-auto">
//       {Array.from({ length: testimonial.rating }).map((_, idx) => (
//         <Star key={idx} className="w-4 h-4 fill-yellow-400 stroke-yellow-500" />
//       ))}
//     </div>
//   </div>
// );

// const Testimonials = () => {
//   const sliderSettings = {
//     dots: false,
//     arrows: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <section className="w-full bg-themeGreen py-20 px-6 sm:px-8 text-white">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
//           What Our Patients Say
//         </h2>

//         {/* Mobile Slider */}
//         <div className="block sm:hidden">
//           <Slider {...sliderSettings}>
//             {testimonials.map((t, i) => (
//               <div key={i} className="px-6">
//                 <TestimonialCard testimonial={t} />
//               </div>
//             ))}
//           </Slider>
//         </div>

//         {/* Desktop Grid */}
//         <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  sm:px-4">
//           {testimonials.map((t, i) => (
//             <TestimonialCard testimonial={t} key={i} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
import React from "react";
import { Star } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ⭐ Testimonials array
const testimonials = [
  {
    name: "Aparna S.",
    location: "Bandra",
    treatment: "Smile Makeover",
    content:
      "I was always afraid of dentists, but OPUS completely changed that. The procedure was painless and the staff was so comforting. Now I can’t stop smiling with confidence!",
    rating: 5,
  },
  {
    name: "Rahul M.",
    location: "Fort",
    treatment: "Implants",
    content:
      "Got my implants done here and I’m beyond satisfied. The precision, tech, and friendly care made the experience amazing.",
    rating: 5,
  },
  {
    name: "Sneha T.",
    location: "Mumbai",
    treatment: "Root Canal",
    content:
      "Booked an emergency appointment for a root canal. They handled everything so smoothly. Clean, modern and truly professional!",
    rating: 5,
  },
];

// ⭐ Testimonial Card Component
const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg hover:shadow-themeGreen/30 transition-all duration-300 ease-in-out transform hover:-translate-y-1 text-left h-full flex flex-col">
    <h4 className="text-md font-semibold text-themeGreen mb-1">{testimonial.name}</h4>
    <p className="text-xs text-gray-500 mb-3">
      {testimonial.location} • {testimonial.treatment}
    </p>
    <p className="text-gray-700 italic mb-4 flex-1">“{testimonial.content}”</p>
    <div className="flex items-center gap-1 text-yellow-500">
      {Array.from({ length: testimonial.rating }).map((_, idx) => (
        <Star key={idx} className="w-4 h-4 fill-yellow-400 stroke-yellow-500" />
      ))}
    </div>
  </div>
);

// 👉 Custom Next Arrow
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

// ⭐ Testimonials Main Component
const Testimonials = () => {
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
    <section className="w-full bg-themeGreen py-20 px-6 sm:px-8 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
          What Our Patients Say
        </h2>

        {/* Mobile Slider */}
        {/* <div className="relative block sm:hidden-mx-3"> */}
        <div className="block sm:hidden px-4 relative">
          <Slider {...sliderSettings}>
            {testimonials.map((t, i) => (
              <div key={i} className="px-4">
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </Slider>
        </div>

        {/* Desktop Grid */}
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
          {testimonials.map((t, i) => (
            <TestimonialCard testimonial={t} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

