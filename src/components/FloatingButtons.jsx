import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

function FloatingButtons() {
  return (
    <div className="fixed bottom-4 left-4 z-50 flex flex-col items-center gap-3">
      {/* Call Button */}
      <a
        href="tel:7045117623"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-themeLight text-darkGray border-2 border-darkGray shadow-lg hover:bg-darkGray hover:text-white transition-all duration-200"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917045117623"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-white border-2 border-green-700 shadow-lg hover:bg-green-700 transition-all duration-200"
      >
        <MessageCircle className="w-5 h-5" />
      </a>
    </div>
  );
}

export default FloatingButtons;

