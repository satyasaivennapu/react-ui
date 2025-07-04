import React from 'react';
import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 p-4 transition-opacity duration-300 ease-in-out"
      onClick={onClose} // Close on backdrop click
    >
      <div
        className="bg-white rounded-lg shadow-xl w-full max-w-md p-0 transform transition-all duration-300 ease-in-out scale-95 opacity-0 animate-modalFadeInScale"
        onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside modal content
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-700">{title || 'Modal Title'}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="px-6 py-5">
          {children}
        </div>

        {/* Modal Footer (Optional - can be added via children if more complex buttons are needed) */}
        {/* Example:
        <div className="px-6 py-4 border-t border-gray-200 flex justify-end space-x-2">
          <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-md">Cancel</button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md">Submit</button>
        </div>
        */}
      </div>
      {/* Animation is defined in src/index.css */}
    </div>
  );
};

export default Modal;
