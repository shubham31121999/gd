import React, { useState } from "react";
import { ShieldCheck, Medal } from "lucide-react";

function Hero() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
    };

    try {
      await fetch("https://hooks.zapier.com/hooks/catch/22908877/uycgz9d/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      alert("Thanks for contacting! I will get back to you soon.");
      e.target.reset();
    } catch (err) {
      alert("Failed to send. Please try again.");
      console.error(err);
    }
  };

  return (
    <section className="w-full bg-primary text-white py-10" id="hero-form">
      <div className="max-w-6xl mx-auto p-6 md:p-10 rounded-lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Half */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-black text-4xl md:text-5xl font-bold mb-4 fontFamily-primary leading-tight">
              Your Top Dentist in Bandra – <span className="text-themeGreen">30+ Years</span> of Smiles
            </h1>
            <p className="fontFamily-primary text-black text-lg mb-6">
              From routine check-ups to complete smile makeovers, enjoy{" "}
              <span className="text-themeGreen">painless, state-of-the-art dentistry</span> – all under one roof. If
              you’ve been searching for a dental clinic near me, discover why families across Mumbai choose{" "}
              <span className="text-themeGreen">OPUS Dental</span>.
            </p>
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
            <form onSubmit={handleSubmit} id="consultationForm" class="bg-white p-6 rounded shadow-lg w-full">
  <label  class="block text-gray-700 font-medium mb-1">Name</label>
  <input
     type="text"
              name="name"
              required
    placeholder="Enter your full name"
    
    class="mb-3 w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-themeGreen text-darkGray"
  />

  <label  class="block text-gray-700 font-medium mb-1">Email</label>
  <input
    type="email"
              name="email"
              required
    placeholder="Enter your email"
    
    class="mb-3 w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-themeGreen text-darkGray"
  />

  <label  class="block text-gray-700 font-medium mb-1">Phone</label>
  <input
    name="phone"
    
    type="tel"
    placeholder="Enter your mobile number"
    required
    class="mb-3 w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-themeGreen text-darkGray"
  />

  
    <button
      type="submit"
      
      class="w-10/12 bg-themeLight text-darkGray py-3 rounded font-semibold border-2 border-darkGray hover:bg-darkGray hover:text-white transition"
    >
      Book Consultation Now
    </button>
  

  
</form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;