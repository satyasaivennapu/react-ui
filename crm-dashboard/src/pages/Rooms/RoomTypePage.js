import React from 'react';
import DataTable from '../../components/UI/DataTable';

const RoomTypePage = () => {
  // This page is for "Rooms -> Room Type"
  // It might show instances of rooms based on their types or manage room types themselves.
  // For this placeholder, let's assume it lists available rooms categorized by type.
  const columns = ['Room ID', 'Room Name', 'Type', 'Status', 'Current Occupancy'];
  const data = [
    { room_id: 'R101', room_name: 'Alpha Suite', type: 'Suite', status: 'Available', current_occupancy: 0 },
    { room_id: 'R102', room_name: 'Beta Standard', type: 'Standard Double', status: 'Occupied', current_occupancy: 2 },
    { room_id: 'C201', room_name: 'Conference Gamma', type: 'Conference Hall', status: 'Booked', current_occupancy: 25 },
    { room_id: 'R103', room_name: 'Charlie Single', type: 'Standard Single', status: 'Available', current_occupancy: 0 },
  ];
  const formattedData = data.map(item => ({
    'room id': item.room_id,
    'room name': item.room_name,
    type: item.type,
    status: item.status,
    'current occupancy': item.current_occupancy
  }));

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Room Management (by Type)</h1>
      <DataTable title="Room List & Status" columns={columns} data={formattedData} />
    </div>
  );
};

export default RoomTypePage;
