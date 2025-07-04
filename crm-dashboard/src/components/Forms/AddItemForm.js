import React, { useState } from 'react';

const AddItemForm = ({ onSubmit, onClose, initialData = {} }) => {
  const [name, setName] = useState(initialData.name || '');
  const [isActive, setIsActive] = useState(initialData.isActive === undefined ? true : initialData.isActive);
  const [selectedDate, setSelectedDate] = useState(initialData.selectedDate || new Date().toISOString().split('T')[0]); // Default to today

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, isActive, selectedDate });
    // Optionally reset form or close modal after submission - parent component can handle close
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="itemName" className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          type="text"
          id="itemName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="itemDate" className="block text-sm font-medium text-gray-700 mb-1">
          Selected Date
        </label>
        <input
          type="date"
          id="itemDate"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      <div className="flex items-center">
        <input
          id="itemActive"
          type="checkbox"
          checked={isActive}
          onChange={(e) => setIsActive(e.target.checked)}
          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <label htmlFor="itemActive" className="ml-2 block text-sm text-gray-900">
          Active
        </label>
      </div>

      <div className="flex justify-end space-x-3 pt-2 border-t border-gray-200 mt-6">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddItemForm;
