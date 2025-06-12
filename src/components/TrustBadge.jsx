import React from 'react';
import { ShieldCheck, Medal } from "lucide-react";
function TrustBadge() {
  return (
    <div>
      <section className="w-full  bg-[url('/images/hero.png')] bg-cover bg-center   text-white">
  {/* Optional overlay for readability */}
  <div className="bg-black bg-opacity-60 p-6 md:p-10 rounded-lg">
    <div className="flex flex-col md:flex-row items-center justify-between gap-10">
      
      {/* Left Half - Text Content */}
      <div className=" w-full  text-center ">
        <h2 className=" text-2xl md:text-4xl font-bold mb-4 fontFamily-primary">
          Don't wait for symptoms to get worse 
        </h2>
        <h2 className=" text-2xl md:text-4xl font-bold mb-4 fontFamily-primary">
          Schedule your consultation with an expert now
        </h2>

        {/* Trust Badges */}
        <div className="flex items-center justify-center  gap-4 mb-6">
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

      {/* Right Half - Form */}
      
    </div>
  </div>
</section>
    </div>
  );
}

export default TrustBadge;
