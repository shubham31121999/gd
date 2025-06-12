import React from "react";
import { ShieldCheck, Medal } from "lucide-react"; // Use lucide for icons or swap as needed


const Hero = () => {
  return (
   <section className="w-full bg-primary text-white" id="hero-form">
  {/* Optional overlay for readability */}
  <div className=" p-6 md:p-10 rounded-lg">
    <div className="flex flex-col md:flex-row items-center justify-between gap-10">
      
      {/* Left Half - Text Content */}
      <div className=" w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-black text-3xl md:text-4xl font-bold mb-4 fontFamily-primary">
          Your Top Dentist in Bandra -

        </h1>
        <h1 className="text-black text-3xl md:text-4xl font-bold mb-4 fontFamily-primary">
          30+ Years of Smiles

        </h1>
        <p className="fontFamily-primary text-black text-lg  mb-6">
          From routine check-ups to complete smile makeovers, enjoy painless, state-of-the-art dentistry - all under one roof. If you’ve been searching for a dental clinic near me, discover why families across Mumbai choose OPUS Dental.

        </p>

        {/* Trust Badges */}
        <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                <div className="fontFamily-primary flex items-center gap-2 text-themeGreen font-medium">
                    <ShieldCheck className="w-5 h-5" />
                    30+ Years Experience
                </div>
                <div className="fontFamily-primary flex items-center gap-2 text-themeGreen font-medium">
                    <Medal className="w-5 h-5" />
                    Certified Safety Protocols
                </div>
                </div>
      </div>

      {/* Right Half - Form */}
      <div className="w-full md:w-1/2">
        <form className="bg-white p-6 rounded shadow-green w-full">
   

    <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name</label>
    <input
      id="name"
      type="text"
      placeholder="Enter your name"
      className="fontFamily-primary mb-3 w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-themeGreen"
    />

    <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
    <input
      id="email"
      type="email"
      placeholder="Enter your email"
      className="fontFamily-primary mb-3 w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-themeGreen"
    />

    <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">Phone</label>
    <input
      id="phone"
      type="tel"
      placeholder="Enter your phone"
      className="mb-3 w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-themeGreen"
    />

    <div className="flex justify-center">
          <button
          type="submit"
          className="w-10/12  bg-themeLight text-darkGray py-3 rounded font-semibold border-2 border-darkGray hover:bg-darkGray hover:text-white transition"
        >
          Book Consultation Now
        </button>
        </div>
  </form>
      </div>
    </div>
  </div>
</section>

  );
};

export default Hero;
// 