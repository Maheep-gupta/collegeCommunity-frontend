import React from 'react';
import { FaTimes } from 'react-icons/fa';
import QRCode from 'react-qr-code';

const QRView = ({ value, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="relative bg-white rounded-2xl shadow-xl p-6 w-[500px] h-[500px] flex flex-col items-center space-y-5">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition"
        >
          <FaTimes size={18} />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800">Scan QR Code</h2>

        {/* QR Code */}
        <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-inner">
          <QRCode value={value} size={300} />
        </div>

        {/* Text below QR (optional) */}
        <p className=" text-gray-500 text-center">
          Scan this code to mark attendance
        </p>
      </div>
    </div>
  );
};

export default QRView;
