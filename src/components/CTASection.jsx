import React from "react";

const CTASection = () => {
  return (
    <section className="bg-themeGreen text-white py-20 px-4">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl text-darkGray sm:text-4xl font-bold mb-4">
       Ready to meet a top dentist near you? 

      </h2>
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">
       Book your Appointment Now!

      </h2>
      
    </div>

    {/* Flex Container for Form + CTA */}
    <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
      {/* Contact Form */}
      <form className="bg-white p-6 rounded-lg shadow-md text-left text-gray-800 w-full lg:w-1/2">
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Name</label>
          <input
            type="text"
            placeholder="Your full name"
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Phone</label>
          <input
            type="tel"
            placeholder="Mobile number"
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="flex justify-center">
          <button
          type="submit"
          className="w-10/12  bg-themeLight text-darkGray py-3 rounded font-semibold border-2 border-darkGray hover:bg-darkGray hover:text-white transition"
        >
          Book Consultation Now
        </button>
        </div>
        
      </form>

      {/* Call-To-Action Box */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-center lg:text-left">
        <div className="bg-white text-themeLight rounded-lg shadow-md px-8 py-10 w-full">
          <h3 className="text-2xl font-bold mb-4">📞 Prefer to Speak Directly?</h3>
          <p className="mb-4 text-lg text-darkGray">
            Call us and we’ll help you book your consultation right away.
          </p>
          <a
            href="tel:7045117623"
            className="inline-block border-2 border-black bg-themeLight text-darkGray font-semibold px-6 py-3 rounded hover:bg-darkGray  hover:text-white transition"
          >
            7045117623
          </a>
        </div>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
  {/* Clinic Timing */}
            <div className="bg-white text-themeLight rounded-lg shadow-md p-6 text-center">
                <h4 className="text-xl font-bold mb-2">Clinic Timings</h4>
                <p className="text-gray-700 text-xs">
                <strong>Mon - Sat:</strong> 10:00 AM – 6:00 PM<br />
                <strong>Sunday:</strong> Closed
                </p>
            </div>

            {/* Bandra Address */}
            <div className="bg-white text-themeLight rounded-lg shadow-md p-6 text-center">
                <h4 className="text-xl font-bold mb-2 ">Bandra Clinic</h4>
                <p className="text-gray-700 text-xs">
                301, Grace Chambers, Above YES Bank,<br />
                Hill Road, Bandra West,<br />
                Mumbai - 400050
                </p>
            </div>

            {/* Fort Address */}
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
