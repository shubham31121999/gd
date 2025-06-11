import React from 'react'
import { Layers, UserCheck, ScanLine, MapPin } from "lucide-react";
const KeyValue = () => {
  return (
    <section className="w-full bg-darkGray px-4 sm:px-6 md:px-12 py-12">
  <div className="max-w-8xl mx-auto">
    

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {/* Point 1 */}
      <div className="flex items-start gap-4 bg-white border-4 border-gray-200 p-4 rounded-lg shadow-sm">
        <Layers className="w-6 h-6 text-themeGreen mt-1" />
        <p className="text-gray-700 font-medium">
          <strong>Multispecialty Dentistry:</strong> All Services Under One Roof – General, Cosmetic, Implants, Kids & more.
        </p>
      </div>

      {/* Point 2 */}
      <div className="flex items-start gap-4 bg-white border-4 border-gray-200 p-4 rounded-lg shadow-sm">
        <UserCheck className="w-6 h-6 text-themeGreen mt-1" />
        <p className="text-gray-700 font-medium">
          <strong>30+ Years Experience:</strong> Trusted by thousands of patients in Mumbai.
        </p>
      </div>

      {/* Point 3 */}
      <div className="flex items-start gap-4  bg-white border-4 border-gray-200 p-4 rounded-lg shadow-sm">
        <ScanLine className="w-6 h-6 text-themeGreen mt-1" />
        <p className="text-gray-700 font-medium">
          <strong>Advanced Technology:</strong> 3D Scans, Lasers & Painless Treatments for superior care.
        </p>
      </div>

      {/* Point 4 */}
      <div className="flex items-start gap-4  bg-white border-4 border-gray-200 p-4 rounded-lg shadow-sm">
        <MapPin className="w-6 h-6 text-themeGreen mt-1" />
        <p className="text-gray-700 font-medium">
          <strong>Convenient Locations:</strong> Clinics in Bandra & Fort for your ease.
        </p>
      </div>
    </div>
  </div>
</section>
  )
}

export default KeyValue