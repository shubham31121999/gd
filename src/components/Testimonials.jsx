import { Star } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Aparna S.",
    location: "Bandra",
    treatment: "Smile Makeover",
    content:
      "I was always afraid of dentists, but OPUS completely changed that. The procedure was painless and the staff was so comforting. Now I can’t stop smiling with confidence!",
    rating: 5,
    image: "/patients/aparna.jpg",
  },
  {
    name: "Rahul M.",
    location: "Fort",
    treatment: "Implants",
    content:
      "Got my implants done here and I’m beyond satisfied. The precision, tech, and friendly care made the experience amazing.",
    rating: 5,
    image: "/patients/rahul.jpg",
  },
  {
    name: "Sneha T.",
    location: "Mumbai",
    treatment: "Root Canal",
    content:
      "Booked an emergency appointment for a root canal. They handled everything so smoothly. Clean, modern and truly professional!",
    rating: 5,
    image: "/patients/sneha.jpg",
  },
  {
    name: "Aparna S.",
    location: "Bandra",
    treatment: "Smile Makeover",
    content:
      "I was always afraid of dentists, but OPUS completely changed that. The procedure was painless and the staff was so comforting. Now I can’t stop smiling with confidence!",
    rating: 5,
    image: "/patients/aparna.jpg",
  },
  {
    name: "Rahul M.",
    location: "Fort",
    treatment: "Implants",
    content:
      "Got my implants done here and I’m beyond satisfied. The precision, tech, and friendly care made the experience amazing.",
    rating: 5,
    image: "/patients/rahul.jpg",
  },
  {
    name: "Sneha T.",
    location: "Mumbai",
    treatment: "Root Canal",
    content:
      "Booked an emergency appointment for a root canal. They handled everything so smoothly. Clean, modern and truly professional!",
    rating: 5,
    image: "/patients/sneha.jpg",
  },
  
  
];

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-md mx-auto text-left flex flex-col items-start">
    <div className="flex items-center gap-4 mb-4">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-14 h-14 rounded-full object-cover"
      />
      <div>
        <h4 className="text-md font-semibold text-themeGreen">{testimonial.name}</h4>
        <p className="text-xs text-gray-500">{testimonial.location} • {testimonial.treatment}</p>
      </div>
    </div>

    <p className="text-gray-700 italic mb-4">“{testimonial.content}”</p>

    <div className="flex items-center gap-1 text-yellow-500 mt-auto">
      {Array.from({ length: testimonial.rating }).map((_, idx) => (
        <Star key={idx} className="w-4 h-4 fill-yellow-400 stroke-yellow-500" />
      ))}
    </div>
  </div>
);

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-themeGreen py-24 px-4 text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-4xl font-bold text-white mb-4">
          What Our Patients Say
        </h2>
        <p className="text-black mb-10 text-xl">
          ★ 4.8/5 average rating on Google – from 500+ smiles transformed.
        </p>

        {/* Desktop Grid */}
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard testimonial={t} key={i} />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="sm:hidden">
          <TestimonialCard testimonial={testimonials[current]} />
          <div className="flex justify-center mt-6 gap-6">
            <button className="text-white font-bold text-2xl" onClick={prevSlide}>‹</button>
            <button className="text-white font-bold text-2xl" onClick={nextSlide}>›</button>
          </div>
        </div>

        
        
      </div>
    </section>
  );
};

export default Testimonials;


