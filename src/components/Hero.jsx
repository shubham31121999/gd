// import React, { useEffect, useState } from "react";
// import { ShieldCheck, Medal } from "lucide-react";

// const Hero = () => {
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [gclid, setGclid] = useState("");
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");

//   useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const gclidParam = urlParams.get("gclid");
//     if (gclidParam) {
//     localStorage.setItem("gclid", gclidParam); // ✅ save it for later
//     setGclid(gclidParam);
//   } else {
//     const storedGclid = localStorage.getItem("gclid");
//     if (storedGclid) setGclid(storedGclid); // ✅ restore it if URL doesn't have it
//   }
//     const now = new Date();
//     setDate(now.toLocaleDateString("en-GB"));
//     setTime(now.toLocaleTimeString("en-GB"));
//   }, []);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!fullName || !email || !phone) {
//       alert("Please fill in all fields before submitting.");
//       return;
//     }

//     const formData = {
//       fullName,
//       email,
//       phone,
//       gclid,
//       date,
//       time,
//     };

//     try {
//       await fetch("https://hooks.zapier.com/hooks/catch/22908877/uy461gm/", {
//       method: "POST",
//       body: JSON.stringify(formData),
//     });
      
//       window.location.href = "/dentistry/thankyou.html";
//     } catch (error) {
//       console.error("Error during API call:", error);
//     }
//   };

//   return (
//     <section className="w-full bg-primary text-white py-10" id="hero-form">
//       <div className="max-w-6xl mx-auto p-6 md:p-10 rounded-lg">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-10">
//           {/* Left Side */}
//           <div className="w-full md:w-1/2 text-center md:text-left">
//             <h1 className="text-black text-4xl md:text-5xl font-bold mb-4 fontFamily-primary leading-tight">
//               Your Top Dentist in Bandra and Fort for Over{" "} 
//               <span className="text-themeGreen">30+ Years</span> of Smiles
//             </h1>
//             <p className="fontFamily-primary text-black text-lg mb-6">
//               From routine check-ups to complete smile makeovers, enjoy{" "}
//               <span className="text-themeGreen">painless, state-of-the-art dentistry</span>  all under one roof.
//               If you’ve been searching for a dental clinic near me, discover why families across Mumbai choose{" "}
//               <span className="text-themeGreen">OPUS Dental</span>.
//             </p>
//             <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
//               <div className="fontFamily-primary flex items-center gap-2 text-themeGreen font-medium">
//                 <ShieldCheck className="w-5 h-5" />
//                 30+ Years Experience
//               </div>
//               <div className="fontFamily-primary flex items-center gap-2 text-themeGreen font-medium">
//                 <Medal className="w-5 h-5" />
//                 Certified Safety Protocols
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Form */}
//           <div className="w-full md:w-1/2">
//             <h3 className="text-xl md:text-xl font-bold mb-8 leading-tight text-center text-darkGray">
//               <span className="text-themeGreen">Relief</span> Starts Today!
//               <br /> Book Your Appointment Here
//             </h3>

//             <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-green w-full">
//               {/* Hidden tracking fields */}
//               <input type="hidden" name="gclid" value={gclid} />
//               <input type="hidden" name="date" value={date} />
//               <input type="hidden" name="time" value={time} />

//               <div>
//                 <label className="block text-sm text-darkGray font-medium">Full Name</label>
//                 <input
//                   type="text"
//                   className="w-full border border-gray-300 text-black rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-themeGreen"
//                   placeholder="Full Name"
//                   value={fullName}
//                   onChange={(e) => setFullName(e.target.value)}
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm text-darkGray font-medium">Email</label>
//                 <input
//                   type="email"
//                   className="w-full border border-gray-300 text-black rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-themeGreen"
//                   placeholder="Your Email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm text-darkGray font-medium">Phone</label>
//                 <input
//                   type="tel"
//                   className="mb-3 w-full border border-gray-300 px-4 py-2 rounded text-darkGray focus:outline-none focus:ring-2 focus:ring-themeGreen"
//                   placeholder="Your Phone Number"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                 />
//               </div>

//               <div className="flex justify-center">
//                 <button
//                   type="submit"
//                   className="w-10/12 bg-themeLight text-darkGray py-3 rounded font-semibold border-2 border-darkGray hover:bg-darkGray hover:text-white transition"
//                 >
//                   Book Appointment Now
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import React, { useEffect, useState } from "react";
import { ShieldCheck, Medal } from "lucide-react";

const Hero = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gclid, setGclid] = useState("");
  const [utmSource, setUtmSource] = useState("");
  const [utmMedium, setUtmMedium] = useState("");
  const [utmCampaign, setUtmCampaign] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const gclidParam = params.get("gclid");
    const utm_source = params.get("utm_source");
    const utm_medium = params.get("utm_medium");
    const utm_campaign = params.get("utm_campaign");

    if (gclidParam) {
      localStorage.setItem("gclid", gclidParam);
      setGclid(gclidParam);
    } else {
      const storedGclid = localStorage.getItem("gclid");
      if (storedGclid) setGclid(storedGclid);
    }

    if (utm_source) {
      localStorage.setItem("utm_source", utm_source);
      setUtmSource(utm_source);
    } else {
      const stored = localStorage.getItem("utm_source");
      if (stored) setUtmSource(stored);
    }

    if (utm_medium) {
      localStorage.setItem("utm_medium", utm_medium);
      setUtmMedium(utm_medium);
    } else {
      const stored = localStorage.getItem("utm_medium");
      if (stored) setUtmMedium(stored);
    }

    if (utm_campaign) {
      localStorage.setItem("utm_campaign", utm_campaign);
      setUtmCampaign(utm_campaign);
    } else {
      const stored = localStorage.getItem("utm_campaign");
      if (stored) setUtmCampaign(stored);
    }

    const now = new Date();
    setDate(now.toLocaleDateString("en-GB"));
    setTime(now.toLocaleTimeString("en-GB"));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!fullName || !email || !phone) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    const formData = {
      fullName,
      email,
      phone,
      gclid,
      utm_source: utmSource,
      utm_medium: utmMedium,
      utm_campaign: utmCampaign,
      date,
      time,
    };

    try {
      const res = await fetch("https://hooks.zapier.com/hooks/catch/22908877/uy461gm/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        window.location.href = "/dentistry/thankyou.html";
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <section className="w-full bg-primary text-white py-10" id="hero-form">
      <div className="max-w-6xl mx-auto p-6 md:p-10 rounded-lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Side */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-black text-4xl md:text-5xl font-bold mb-4 fontFamily-primary leading-tight">
              Your Top Dentist in Bandra and Fort for Over{" "}
              <span className="text-themeGreen">30+ Years</span> of Smiles
            </h1>
            <p className="fontFamily-primary text-black text-lg mb-6">
              From routine check-ups to complete smile makeovers, enjoy{" "}
              <span className="text-themeGreen">painless, state-of-the-art dentistry</span> all under one roof.
              If you’ve been searching for a dental clinic near me, discover why families across Mumbai choose{" "}
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

          {/* Right Side - Form */}
          <div className="w-full md:w-1/2">
            <h3 className="text-xl md:text-xl font-bold mb-8 leading-tight text-center text-darkGray">
              <span className="text-themeGreen">Relief</span> Starts Today!
              <br /> Book Your Appointment Here
            </h3>

            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-green w-full">
              {/* Hidden tracking fields */}
              <input type="hidden" name="gclid" value={gclid} />
              <input type="hidden" name="utm_source" value={utmSource} />
              <input type="hidden" name="utm_medium" value={utmMedium} />
              <input type="hidden" name="utm_campaign" value={utmCampaign} />
              <input type="hidden" name="date" value={date} />
              <input type="hidden" name="time" value={time} />

              <div>
                <label className="block text-sm text-darkGray font-medium">Full Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 text-black rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-themeGreen"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm text-darkGray font-medium">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 text-black rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-themeGreen"
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
                  className="w-10/12 bg-themeLight text-darkGray py-3 rounded font-semibold border-2 border-darkGray hover:bg-darkGray hover:text-white transition"
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
};

export default Hero;
