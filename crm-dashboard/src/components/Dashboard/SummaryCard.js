import React from 'react';

const SummaryCard = ({ title, value, available, icon, color = 'blue' }) => {
  const IconComponent = icon; // Icon is expected to be a Lucide React icon component

  // Define color classes based on the 'color' prop
  const colorClasses = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    yellow: 'bg-yellow-500',
    red: 'bg-red-500',
    purple: 'bg-purple-500',
    pink: 'bg-pink-500',
  };

  const bgColorClass = colorClasses[color] || colorClasses['blue'];

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 flex items-center space-x-4 transform hover:scale-105 transition-transform duration-200">
      {IconComponent && (
        <div className={`p-3 rounded-full ${bgColorClass} text-white`}>
          <IconComponent size={28} />
        </div>
      )}
      <div>
        <p className="text-sm text-gray-500 font-medium">{title}</p>
        <p className="text-3xl font-bold text-gray-800">{value}</p>
        {available !== undefined && (
          <p className="text-xs text-green-600 font-semibold">{available} Available</p>
        )}
      </div>
    </div>
  );
};

export default SummaryCard;
