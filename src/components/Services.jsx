import React from "react";
import {
  ShieldCheck,
  CheckCircle,
  Smile,
  AlignHorizontalJustifyCenter,
  Baby,
  HeartPulse,
} from "lucide-react";

// Services Data
const services = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-themeGreen" />,
    title: "General & Preventive Care",
    desc: "Routine Check-ups, Cleanings (Polishing & EMS Airflow), Fillings, Gum Disease Prevention",
  },
  {
    icon: <Smile className="w-8 h-8 text-themeGreen" />,
    title: "Advanced Restorative",
    desc: "Root Canal Therapy, Crowns & Bridges, Dentures, Dental Implants",
  },
  {
    icon: <AlignHorizontalJustifyCenter className="w-8 h-8 text-themeGreen" />,
    title: "Cosmetic Dentistry",
    desc: "Teeth Whitening, Smile Makeovers & Veneers, Bonding.",
  },
  {
    icon: <Baby className="w-8 h-8 text-themeGreen" />,
    title: "Pediatric Dentistry",
    desc: "Child-friendly care alongside comprehensive preventive care for kids to promote their long term health.",
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-themeGreen" />,
    title: "Specialty Treatments",
    desc: "Periodontal (Gum) Therapies, TMJ Disorder Treatment, Laser Dentistry, Full Mouth Rehabilitation",
  },
  {
    icon: <HeartPulse className="w-8 h-8 text-themeGreen" />,
    title: "Dental Implants",
    desc: "Permanent, natural-looking teeth solutions to replace missing teeth.",
  },
];

// Service Card Component
const ServiceCard = ({ icon, title, desc }) => (
  <div className="w-full sm:w-[300px] h-[200px] bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 flex flex-col justify-between text-center">
    <div>
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="font-semibold text-xl text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{desc}</p>
    </div>
  </div>
);

// Services Section
const Services = () => {
  return (
    <section className="w-full bg-themeGreen py-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto relative flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
          Our Dental Services
        </h2>

        {/* Grid Layout for Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
