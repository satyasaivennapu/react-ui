import React from 'react';
import DataTable from '../../components/UI/DataTable';

const RoomTypeMasterPage = () => {
  const columns = ['ID', 'Type Name', 'Capacity', ' Amenities'];
  const data = [
    { id: 'RTM01', type_name: 'Standard Single', capacity: 1, amenities: 'Wi-Fi, TV' },
    { id: 'RTM02', type_name: 'Standard Double', capacity: 2, amenities: 'Wi-Fi, TV, Mini-bar' },
    { id: 'RTM03', type_name: 'Conference Hall', capacity: 50, amenities: 'Projector, AV System' },
  ];
  const formattedData = data.map(item => ({
    id: item.id,
    'type name': item.type_name,
    capacity: item.capacity,
    amenities: item.amenities
  }));

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Master: Room Types</h1>
      <DataTable title="Room Types (Master List)" columns={columns} data={formattedData} />
    </div>
  );
};

export default RoomTypeMasterPage;
