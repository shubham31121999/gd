import React, { useEffect, useState } from "react";
import { ShieldCheck, Medal } from "lucide-react";

function TrustBadge() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gclid, setGclid] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const gclidParam = urlParams.get("gclid");
    if (gclidParam) setGclid(gclidParam);

    const now = new Date();
    setDate(now.toLocaleDateString("en-GB")); // DD/MM/YYYY
    setTime(now.toLocaleTimeString("en-GB")); // HH:MM:SS
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!fullName || !email || !phone) {
      alert("Please fill in all fields.");
      return;
    }

    const formData = {
      fullName,
      email,
      phone,
      gclid,
      date,
      time,
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
      console.error("Submission error:", error);
    }
  };

  return (
    <section className="max-w-7xl mx-auto bg-white text-darkGray px-4 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
          <h2 className="text-2xl md:text-4xl font-bold font-primary">
            Don't wait for symptoms to get <span className="text-themeLight">worse.</span>
          </h2>
          <h2 className="text-2xl md:text-4xl font-bold font-primary">
            Schedule your consultation with an expert now.
          </h2>

          {/* <div className="flex justify-center md:justify-start gap-6 mt-6 text-themeGreen text-sm font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" />
              30+ Years Experience
            </div>
            <div className="flex items-center gap-2">
              <Medal className="w-5 h-5" />
              Certified Safety Protocols
            </div>
          </div> */}
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2">
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-green w-full border border-gray-200">
            {/* Hidden fields */}
            <input type="hidden" name="gclid" value={gclid} />
            <input type="hidden" name="date" value={date} />
            <input type="hidden" name="time" value={time} />

            <div className="mb-4">
              <label className="block text-sm font-medium text-darkGray">Full Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 text-black rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-themeGreen"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-darkGray">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 text-black rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-themeGreen"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-darkGray">Phone</label>
              <input
                type="tel"
                className="w-full border border-gray-300 px-4 py-2 rounded text-darkGray focus:outline-none focus:ring-2 focus:ring-themeGreen"
                placeholder="Your Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-10/12 bg-themeLight text-darkGray py-3 rounded font-semibold border-2 border-darkGray hover:bg-darkGray hover:text-white transition"
              >
                Book My Consultation
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default TrustBadge;
