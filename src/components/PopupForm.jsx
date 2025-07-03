import React, { useState, useEffect } from "react";
import { ShieldCheck, Medal } from "lucide-react";

const PopupForm = ({ onClose }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gclid, setGclid] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window?.location.search);
    const gclidParam = urlParams.get("gclid");
    if (gclidParam) {
      setGclid(gclidParam);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!fullName || !email || !phone) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    const now = new Date();
    const date = now.toLocaleDateString("en-GB"); // DD/MM/YYYY
    const time = now.toLocaleTimeString("en-GB"); // HH:MM:SS

    const formData = {
      fullName,
      email,
      phone,
      date,
      time,
      gclid_field: gclid || "", // Include gclid if available
    };

    try {
      const response = await fetch(
        "https://hooks.zapier.com/hooks/catch/22908877/uy461gm/",
        {
          method: "POST",
          body: JSON.stringify(formData),
        }
      );
      window.location.href = "/dentistry/thankyou.html";
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white p-6 md:p-8 rounded-xl shadow-2xl w-[90%] max-w-lg relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-black text-2xl"
        >
          &times;
        </button>

        <h3 className="text-xl md:text-2xl font-bold mb-6 leading-tight text-center text-darkGray">
          <span className="text-themeGreen">Relief</span> Starts Today!
          <br /> Book Your Appointment Here
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4" id="popup-form">
          <div>
            <label className="block text-sm text-darkGray font-medium">Full Name</label>
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
              className="w-full border border-gray-300 text-black rounded px-3 py-2 mt-1"
              placeholder="Your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <input type="hidden" name="gclid_field" value={gclid} />

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-10/12 bg-themeLight text-darkGray py-3 rounded font-semibold border-2 border-darkGray hover:bg-darkGray hover:text-white transition"
            >
              Book Appointment Now
            </button>
          </div>
        </form>

        {/* Optional: Trust badges below form */}
        <div className="mt-6 flex justify-center gap-6 text-themeGreen text-sm font-medium">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" />
            30+ Years Experience
          </div>
          <div className="flex items-center gap-2">
            <Medal className="w-4 h-4" />
            Certified Safety Protocols
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupForm;
