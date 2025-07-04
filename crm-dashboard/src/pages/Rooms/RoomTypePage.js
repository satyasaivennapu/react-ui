import React, { useState } from 'react';
import DataTable from '../../components/UI/DataTable';
import Modal from '../../components/UI/Modal';
import AddItemForm from '../../components/Forms/AddItemForm';
import { PlusCircle } from 'lucide-react';

const RoomTypePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [roomData, setRoomData] = useState([ // Example state for table data
    { room_id: 'R101', name: 'Alpha Suite', type: 'Suite', status: 'Available', current_occupancy: 0, selected_date: '2024-03-10', is_active: true },
    { room_id: 'R102', name: 'Beta Standard', type: 'Standard Double', status: 'Occupied', current_occupancy: 2, selected_date: '2024-03-12', is_active: true },
    { room_id: 'C201', name: 'Conference Gamma', type: 'Conference Hall', status: 'Booked', current_occupancy: 25, selected_date: '2024-03-15', is_active: true },
    { room_id: 'R103', name: 'Charlie Single', type: 'Standard Single', status: 'Available', current_occupancy: 0, selected_date: '2024-03-18', is_active: false },
  ]);

  // 'Room Name' from form is now 'Name'. Added 'Date Added', 'Is Active'.
  const columns = ['Room ID', 'Name', 'Type', 'Status', 'Current Occupancy', 'Date Added', 'Is Active'];

  const formattedData = roomData.map(item => ({
    'room id': item.room_id,
    name: item.name, // from form
    type: item.type,
    status: item.status,
    'current occupancy': item.current_occupancy,
    'date added': item.selected_date, // from form
    'is active': item.is_active ? 'Yes' : 'No' // from form
  }));

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleAddItem = (newItem) => {
    console.log('New Room Data:', newItem);
    // Adding to local state for demonstration
    const newEntry = {
      room_id: `R${Math.floor(Math.random() * 900) + 100}`, // Generate a mock ID
      name: newItem.name,
      type: 'Standard', // Example default, could be part of the form
      status: newItem.isActive ? 'Available' : 'Maintenance', // Example logic
      current_occupancy: 0,
      selected_date: newItem.selectedDate,
      is_active: newItem.isActive,
    };
    setRoomData(prevData => [...prevData, newEntry]);
    handleCloseModal();
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Room Management</h1>
        <button
          onClick={handleOpenModal}
          className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-150 ease-in-out"
        >
          <PlusCircle size={20} className="mr-2" />
          Add New Room
        </button>
      </div>

      <DataTable title="Room List & Status" columns={columns} data={formattedData} />

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title="Add New Room">
        <AddItemForm onSubmit={handleAddItem} onClose={handleCloseModal} />
      </Modal>
    </div>
  );
};

export default RoomTypePage;
