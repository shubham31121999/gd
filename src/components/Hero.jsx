import React, { useState } from "react";
import { ShieldCheck, Medal } from "lucide-react";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    console.log(event, "event");
    if (!fullName || !email || !phone) {
      alert("Please fill in all fields before submitting.");
      return; // Stop execution if validation fails
    }

    const formData = {
      fullName: fullName,
      email: email,
      phone: phone,
      // timestamp: new Date().toISOString(), // Add a timestamp
    };

    try {
      const response = await fetch(
        "https://hooks.zapier.com/hooks/catch/22908877/uy461gm/",
        {
          method: "POST",
          // headers: {
          //   "Content-Type": "application/json",
          // },
          body: JSON.stringify(formData),
        }
      );

      console.log(response, "response");
       navigate("/thankyou");
    } catch (error) {
      console.error("Error during API call:", error);
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
          <h3 className="text-xl md:text-xl font-bold mb-8 leading-tight text-center text-darkGray"><span className="text-themeGreen">Relief</span> Starts Today! <br></br> Book Your Appointment Here</h3>
<form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-green w-full">
            <div>
              <label className="block text-sm text-darkGray font-medium"> Full Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 text-black rounded px-3 py-2 mt-1"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm text-darkGray font-medium">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 text-black rounded px-3 py-2 mt-1"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm text-darkGray font-medium">Phone</label>
              <input
                type="tel"
                className="mb-3 w-full border border-gray-300 px-4 py-2 rounded text-darkGray focus:outline-none focus:ring-2 focus:ring-themeGreen"
                placeholder="Your Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-10/12  bg-themeLight text-darkGray py-3 rounded font-semibold border-2 border-darkGray hover:bg-darkGray hover:text-white transition"
              >
                Book Appointment Now
              </button>
            </div>
          </form>

  

  

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;