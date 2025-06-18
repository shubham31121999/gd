
import { ShieldCheck, Medal } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function TrustBadge() {
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
          "https://hooks.zapier.com/hooks/catch/22908877/uy461gm",
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
    <div>
      <section className="w-full  bg-white bg-cover bg-center   text-darkGray">
  {/* Optional overlay for readability */}
  <div className=" p-6 md:p-10 rounded-lg">
    <div className="flex flex-col md:flex-row items-center justify-between gap-10">
      
      {/* Left Half - Text Content */}
      <div className=" w-full md:w-1/2 text-center md:text-left">
        <h2 className=" text-2xl md:text-4xl font-bold mb-4 font-primary">
          Don't wait for symptoms to get <span className='text-themeLight'>worse.</span>
        </h2>
        <h2 className=" text-2xl md:text-4xl font-bold mb-4 font-primary">
          Schedule your consultation with an expert now.
        </h2>

        {/* Trust Badges */}
        {/* <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
        <div className="fontFamily-primary flex items-center gap-2 text-themeGreen font-medium">
            <ShieldCheck className="w-5 h-5" />
            30+ Years Experience
        </div>
        <div className="fontFamily-primary flex items-center gap-2 text-themeGreen font-medium">
            <Medal className="w-5 h-5" />
            Certified Safety Protocols
        </div>
        </div> */}
      </div>

      {/* Right Half - Form */}
      <div className="w-full md:w-1/2">
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
                Book My Consultation
              </button>
            </div>
          </form>

      </div>
    </div>
  </div>
</section>
    </div>
  );
}

export default TrustBadge;
