import React, { useEffect, useState } from "react";

const CTASection = () => {
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
      date,
      time,
    };

    try {
      const response = await fetch(
        "https://hooks.zapier.com/hooks/catch/22908877/uy461gm",
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
    <section className="bg-themeGreen text-white py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-darkGray sm:text-4xl font-bold mb-4">
            Ready to meet a top dentist near you?
          </h2>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Book your Appointment Now!
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-green w-full sm:w-1/2"
>
            {/* Hidden Fields for Tracking */}
            <input type="hidden" name="gclid" value={gclid} />
            <input type="hidden" name="date" value={date} />
            <input type="hidden" name="time" value={time} />

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

          {/* CTA Box */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-center lg:text-left">
            <div className="bg-white text-themeLight rounded-lg shadow-md px-8 py-10 w-full">
              <h3 className="text-2xl font-bold mb-4">📞 Prefer to Speak Directly?</h3>
              <p className="mb-4 text-lg text-darkGray">
                Call us and we’ll help you book your consultation right away.
              </p>
              <a
                href="tel:7045117623"
                className="inline-block border-2 border-black bg-themeLight text-darkGray font-semibold px-6 py-3 rounded hover:bg-darkGray hover:text-white transition"
              >
                7045117623
              </a>
            </div>

            {/* Clinic Info Grid */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              <div className="bg-white text-themeLight rounded-lg shadow-md p-6 text-center">
                <h4 className="text-xl font-bold mb-2">Clinic Timings</h4>
                <p className="text-gray-700 text-xs">
                  <strong>Mon - Sat:</strong> 10:00 AM – 6:00 PM<br />
                  <strong>Sunday:</strong> Closed
                </p>
              </div>

              <div className="bg-white text-themeLight rounded-lg shadow-md p-6 text-center">
                <h4 className="text-xl font-bold mb-2">Bandra Clinic</h4>
                <p className="text-gray-700 text-xs">
                  301, Grace Chambers, Above YES Bank,<br />
                  Hill Road, Bandra West,<br />
                  Mumbai - 400050
                </p>
              </div>

              <div className="bg-white text-themeLight rounded-lg shadow-md p-6 text-center">
                <h4 className="text-xl font-bold mb-2">Fort Clinic</h4>
                <p className="text-gray-700 text-xs">
                  1st Floor, Meher Building,<br />
                  Above McDonald's, Near Flora Fountain,<br />
                  Fort, Mumbai - 400001
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
