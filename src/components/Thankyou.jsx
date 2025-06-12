import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Thankyou = () => {
  return (
    <>
      <Navbar />
          <div className="text-center mt-20">
            <h1 className="text-3xl font-bold text-green-600">Thank you for your submission!</h1>
            <p className="text-gray-700 mt-2">We’ll get back to you shortly.</p>
          </div>
      <Footer />
    </>
  );
};

export default Thankyou;
