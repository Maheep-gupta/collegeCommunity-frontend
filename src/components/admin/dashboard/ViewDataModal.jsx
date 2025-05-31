import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';  // React Icon for close button

const Modal = ({ isOpen, onClose, modalData, modalTitle }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter modal data based on the search query
  const filteredData = modalData.filter(item => {
    const nameMatches = item.name && item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const rollMatches = item.roll && item.roll.toLowerCase().includes(searchQuery.toLowerCase());
    return nameMatches || rollMatches;
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300">
      <div className="bg-white bg-opacity-60 backdrop-blur-md rounded-xl shadow-xl max-w-md w-full transform transition-all duration-500 ease-in-out p-6 relative">
        {/* Close Button in Top-Right */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-all text-xl"
        >
          <MdClose /> {/* React Icon for close button */}
        </button>

        <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">{modalTitle}</h3>
        
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by name or roll number..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mb-6 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-gray-500"
        />
        
        {/* Display filtered modal data */}
        <ul className="max-h-64 overflow-y-auto space-y-2">
          {filteredData.length === 0 ? (
            <li className="text-center text-gray-500">No results found</li>
          ) : (
            filteredData.map((item, index) => (
              <li key={index} className="border-b py-2 rounded-lg px-2 hover:bg-gray-100 transition-all">
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-800">{item.name}</span>
                  <span className="text-sm text-gray-500">{item.roll}</span> {/* Display the roll number */}
                </div>
                {item.marks !== undefined && (
                  <div className="text-sm text-gray-500">Marks: {item.marks}</div>
                )}
                {/* {item.submitted !== undefined && (
                  <div className="text-sm text-gray-600 mt-1">{item.submitted ? 'Submitted' : 'Not Submitted'}</div>
                )} */}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Modal;
