import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import thankyou from '../assets/Thnakyou.webp'

const ThankYouPage = () => {
  return (
    <div>
        <Navbar />
        <section className=" flex flex-col lg:flex-row items-center justify-center px-6 pb-14 bg-white text-center lg:text-left">
      {/* Left: Image */}
      <div className="flex-1 flex justify-center mb-10 lg:mb-0">
        <img
          src={thankyou}
          alt="Success"
          // className="w-40 sm:w-56 md:w-64 lg:w-72 xl:w-80"
          className="w-48 sm:w-64 md:w-72 lg:w-80 xl:w-[22rem]"

        />
      </div>

      {/* Right: Text Content */}
      <div className="flex-1 max-w-xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Thank You For Booking An <br /> Appointment With Us!
        </h1>
        <p className="text-base sm:text-lg text-gray-700 font-medium">
          We have received your request for an appointment. Our team is
          checking for availability & will get back to you soon for confirmation.
        </p>
      </div>
    </section>
      <Footer />
    </div>
  )
}

export default ThankYouPage

