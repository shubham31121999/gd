import React from "react";

const CTASection = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      await fetch("https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTY4MDYzMTA0MzE1MjY0NTUzNDUxMzYi_pc", {
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
      {/* <form onSubmit={handleSubmit} className="md:w-1/2 flex flex-col space-y-6">
              <label className="flex flex-col">
                <span className="mb-1 font-semibold">Name</span>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-orange-400 transition"
                />
              </label>

              <label className="flex flex-col">
                <span className="mb-1 font-semibold">Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your.email@example.com"
                  className="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-orange-400 transition"
                />
              </label>

              <label className="flex flex-col">
                <span className="mb-1 font-semibold">Message</span>
                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder="Write your message..."
                  className="p-3 rounded bg-gray-800 border border-gray-700 resize-none focus:outline-none focus:border-orange-400 transition"
                />
              </label>

              <button
                type="submit"
                className="bg-transparent font-bold text-orange-400 border-2 border-orange-400 rounded-md px-6 py-3 hover:bg-cyan-400 hover:text-black transition duration-300"
              >
                Send Message
              </button>
        </form> */}
        <script src='https://forms.pabbly.com/embed/1ydO-722613692?w=350'></script>

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
