import React from "react";
import { Users, Microscope, SmilePlus, MapPin } from "lucide-react";

const pillars = [
  {
    icon: <Users className="w-8 h-8 text-themeGreen" />,
    title: "Expert Team",
    desc: "Led by Dr. Burzin Khan (MDS Prosthodontics), with 30+ years of experience and a team of top specialists.",
  },
  {
    icon: <Microscope className="w-8 h-8 text-themeGreen" />,
    title: "Advanced Technology",
    desc: "We use 3D CBCT scans, laser dentistry, and digital smile design for world-class precision and comfort.",
  },
  {
    icon: <SmilePlus className="w-8 h-8 text-themeGreen" />,
    title: "Patient-Centric Care",
    desc: "Pain-free treatments with ISO-certified hygiene, entertainment, and anxiety-free techniques.",
  },
  {
    icon: <MapPin className="w-8 h-8 text-themeGreen" />,
    title: "Convenience & Accessibility",
    desc: "Clinics in Bandra & Fort, open 6 days a week, with easy scheduling and on-site parking.",
  },
];

const WhyChoose = () => {
  return (
    <section className="w-full bg-darkGray py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
  <h2 className="text-3xl sm:text-4xl font-bold text-themeLight mb-12">
    Why Thousands Trust OPUS Dental
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {pillars.map((pillar, index) => (
      <div
        key={index}
        className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-green transition-shadow duration-200 text-left"
      >
        <div className="mb-4">{pillar.icon}</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{pillar.title}</h3>
        <p className="text-sm text-gray-600">{pillar.desc}</p>
      </div>
    ))}
  </div>
</div>

    </section>
  );
};

export default WhyChoose;
