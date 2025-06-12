import React from 'react'
import { Layers, UserCheck, ScanLine, MapPin,Star,SmilePlus } from "lucide-react";

const KeyValue = () => {
  return (
    <section className="w-full bg-white px-4 sm:px-6 md:px-20 py-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-darkGray mb-12 text-center">
          Why <span className='text-themeLight'>Thousands</span> Trust OPUS Dental
        </h2>
  <div className="max-w-7xl mx-auto">
    

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {/* Point 1 */}
      <div className="flex items-start gap-4 bg-darkGray border-4 border-gray-200 p-4 rounded-lg shadow-sm">
        <Layers className="w-6 h-6 text-themeGreen mt-1" />
        <p className="text-themeLight font-medium">
          <strong>Multispecialty Dentistry:</strong> All Services Under One Roof – General, Cosmetic, Implants, Kids & more.
        </p>
      </div>

      {/* Point 2 */}
      <div className="flex items-start gap-4 bg-darkGray border-4 border-gray-200 p-4 rounded-lg shadow-sm">
        <UserCheck className="w-6 h-6 text-themeLight mt-1" />
        <p className="text-themeLight font-medium">
          <strong>30+ Years Experience:</strong> Trusted by thousands of patients in Mumbai.
        </p>
      </div>

      {/* Point 3 */}
      <div className="flex items-start gap-4  bg-darkGray border-4 border-gray-200 p-4 rounded-lg shadow-sm">
        <ScanLine className="w-6 h-6 text-themeGreen mt-1" />
        <p className="text-themeLight font-medium">
          <strong>Advanced Technology:</strong> 3D Scans, Lasers & Painless Treatments for superior care.
        </p>
      </div>

      {/* Point 4 */}
      <div className="flex items-start gap-4  bg-darkGray border-4 border-gray-200 p-4 rounded-lg shadow-sm">
        <MapPin className="w-6 h-6 text-themeGreen mt-1" />
        <p className="text-themeLight font-medium">
          <strong>Convenient Locations:</strong> See a dentist in Bandra without the wait. Clinics in Bandra & Fort for your ease.
        </p>
      </div>
      <div className="flex items-start gap-4  bg-darkGray border-4 border-gray-200 p-4 rounded-lg shadow-sm">
        <Star className="w-6 h-6 text-themeGreen mt-1" />
        <p className="text-themeLight font-medium">
          <strong>4.9★ Google rating:</strong> recognised as the best dentist in Bandra
        </p>
      </div>
      <div className="flex items-start gap-4  bg-darkGray border-4 border-gray-200 p-4 rounded-lg shadow-sm">
        <SmilePlus className="w-6 h-6 text-themeGreen mt-1" />
        <p className="text-themeLight font-medium">
          <strong>Patient-Centric Care:</strong> Pain-free treatments with ISO-certified hygiene, entertainment, and anxiety-free techniques.
        </p>
      </div>
    </div>
  </div>
</section>
  )
}

export default KeyValue