import React, { useState } from 'react';
import { Phone, MessageCircle, ReceiptText } from 'lucide-react';
import PopupForm from './PopupForm'; // Adjust the path if needed

function FloatingButtons() {
  const [showPopup, setShowPopup] = useState(false);

  const openForm = () => {
    setShowPopup(true);
  };

  const closeForm = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-center gap-3">
        {/* Call Button */}
        <a
        id="floating-call-button"
          href="tel:7045117623"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-themeLight text-darkGray border-2 border-darkGray shadow-lg hover:bg-white hover:text-black transition-all duration-200"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* Open Form Button */}
        <button
          onClick={openForm}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-darkGray text-white border-2 border-green-700 shadow-lg hover:bg-green-400 hover:text-darkGray transition-all duration-200"
        >
          <ReceiptText className="w-5 h-5" />
        </button>
      </div>

      {/* Popup Form */}
      {showPopup && <PopupForm onClose={closeForm} />}
    </>
  );
}

export default FloatingButtons;
