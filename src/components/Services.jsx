import React from "react";
import {
  ShieldCheck,
  CheckCircle,
  Smile,
  AlignHorizontalJustifyCenter,
  Baby,
  HeartPulse,
  Bell,
} from "lucide-react";

const services = [
  { icon: <ShieldCheck className="w-8 h-8 text-themeGreen" />, title: "General Care", desc: "Routine checkups, cleanings, fillings." },
  { icon: <Smile className="w-8 h-8 text-themeGreen" />, title: "Cosmetic Dentistry", desc: "Whitening, veneers, smile makeovers." },
  { icon: <AlignHorizontalJustifyCenter className="w-8 h-8 text-themeGreen" />, title: "Orthodontics Dentistry", desc: "Braces & clear aligners." },
  { icon: <Baby className="w-8 h-8 text-themeGreen" />, title: "Pediatric Dentistry", desc: "Child-friendly dental care." },
  { icon: <CheckCircle className="w-8 h-8 text-themeGreen" />, title: "Implants & Restorative", desc: "Crowns, bridges, implants." },
  { icon: <HeartPulse className="w-8 h-8 text-themeGreen" />, title: "Specialty Treatments", desc: "TMJ, Laser Dentistry." },
];

const ServiceCard = ({ icon, title, desc }) => (
  <div className="w-72 sm:w-80 md:w-96 min-h-[160px] bg-white p-6 rounded-lg shadow text-center hover:shadow-lg transition-shadow duration-200 flex flex-col justify-between">
    <div>
      <div className="flex justify-center mb-2">{icon}</div>
      <h3 className="font-semibold text-xl sm:text-2xl text-gray-800">{title}</h3>
      <p className="text-sm sm:text-base text-gray-600 mt-1">{desc}</p>
    </div>
  </div>
);


const Services = () => {
  return (
    <section className="w-full bg-themeGreen py-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto relative flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
          Our Dental Services     </h2>
        {/* Top Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-8 mb-6">
          <div className="flex justify-end">
            <ServiceCard {...services[0]} />
          </div>
          <div className="flex justify-start">
            <ServiceCard {...services[1]} />
          </div>
        </div>

        {/* Middle Row with more vertical spacing */}
        <div className="flex flex-col sm:flex-row justify-center items-center sm:gap-52 gap-8 mt-12 mb-12">
          <div className="flex justify-end">
            <ServiceCard {...services[2]} />
          </div>
          <div className="flex justify-start">
            <ServiceCard {...services[3]} />
          </div>
        </div>

        {/* Bottom Row with reduced spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
          <div className="flex justify-end">
            <ServiceCard {...services[4]} />
          </div>
          <div className="flex justify-start">
            <ServiceCard {...services[5]} />
          </div>
        </div>

        {/* Center Tooth Icon */}
        <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 ">
            <Bell className="w-40 h-40 text-white opacity-90" />
        </div>

      </div>
    </section>
  );
};

export default Services;
