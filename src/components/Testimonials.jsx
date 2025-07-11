
import React from "react";
import { Star } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const testimonials = [
  {
    name: "Ashoo Samant",
    location: "Mumbai",
    treatment: "Smile Makeover",
    content:
      "Opus Dental specialities has been constant in terms of dental related issues of mine but this time I walked in for a cosmetic transformation. After feeling not so confident about my bad set of teeth I planned to undergo treatment at Opus and it was indeed a quick, planned and painless procedure. Huge shoutout to Dr. Burzin and his team of doctors for the great work they put in.",
    rating: 5,
  },
  {
    name: "Alvito D'Cunha",
    location: "Mumbai",
    treatment: "Root Canal",
    content:
      "My first consultation with Opus dental clinic is something that I'll always remember cause I remember being very late but Doctor Burzin Khan was patient and to my surprise it was the first time I saw a dentist wait for his patient. After which came the root canal treatment which was again worked on phenomenally by the team of dentists at Opus.",
    rating: 5,
  },
  {
    name: "Mazdiar",
    location: "Mumbai",
    treatment: "Cosmetic Treatment",
    content:
      "Just 1 day before an important Family function I happened to have an accidental fall due to which I lost 2 teeth of mine and I wanted to go for some temporary treatment so that I could attend the function with confidence and Dr Burzin Khan came to my rescue.",
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
    <p className="text-black  mb-4 flex-1">“{testimonial.content}”</p>
    <div className="flex items-center gap-1 text-themeGreen">
      {Array.from({ length: testimonial.rating }).map((_, idx) => (
        <Star key={idx} className="w-4 h-4 fill-themeGreen stroke-themeGreen" />
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
          What Our Happy Patients Say
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

