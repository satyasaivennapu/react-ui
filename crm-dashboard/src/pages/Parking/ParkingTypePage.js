import React, { useState } from 'react';
import DataTable from '../../components/UI/DataTable';
import Modal from '../../components/UI/Modal';
import AddItemForm from '../../components/Forms/AddItemForm';
import { PlusCircle } from 'lucide-react';

const ParkingTypePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [parkingData, setParkingData] = useState([ // Example state for table data
    { spot_id: 'P001', name: 'Spot A1', parking_area: 'Garage A1', type: 'Covered Garage', status: 'Occupied', vehicle_no: 'XYZ 123', selected_date: '2024-02-20', is_active: true },
    { spot_id: 'P002', name: 'Spot B5', parking_area: 'Lot B5', type: 'Open Lot', status: 'Available', vehicle_no: 'N/A', selected_date: '2024-02-22', is_active: true },
    { spot_id: 'P003', name: 'Valet Spot 1', parking_area: 'Valet Zone 1', type: 'Valet', status: 'Occupied', vehicle_no: 'ABC 789', selected_date: '2024-02-25', is_active: true },
    { spot_id: 'P004', name: 'Spot A2', parking_area: 'Garage A2', type: 'Covered Garage', status: 'Reserved', vehicle_no: 'N/A', selected_date: '2024-02-28', is_active: false },
  ]);

  // Added 'Name' (for the spot itself), 'Date Added', 'Is Active'.
  const columns = ['Spot ID', 'Name', 'Parking Area', 'Type', 'Status', 'Vehicle No.', 'Date Added', 'Is Active'];

  const formattedData = parkingData.map(item => ({
    'spot id': item.spot_id,
    name: item.name, // from form
    'parking area': item.parking_area,
    type: item.type,
    status: item.status,
    'vehicle no.': item.vehicle_no,
    'date added': item.selected_date, // from form
    'is active': item.is_active ? 'Yes' : 'No' // from form
  }));

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleAddItem = (newItem) => {
    console.log('New Parking Spot Data:', newItem);
    // Adding to local state for demonstration
    const newEntry = {
      spot_id: `P${Math.floor(Math.random() * 900) + 100}`, // Generate a mock ID
      name: newItem.name, // This will be the "Spot Name"
      parking_area: 'General Lot', // Example default
      type: 'Standard', // Example default
      status: newItem.isActive ? 'Available' : 'Unavailable', // Example logic
      vehicle_no: 'N/A',
      selected_date: newItem.selectedDate,
      is_active: newItem.isActive,
    };
    setParkingData(prevData => [...prevData, newEntry]);
    handleCloseModal();
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Parking Management</h1>
        <button
          onClick={handleOpenModal}
          className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-150 ease-in-out"
        >
          <PlusCircle size={20} className="mr-2" />
          Add New Parking Spot
        </button>
      </div>

      <DataTable title="Parking Spot Status" columns={columns} data={formattedData} />

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title="Add New Parking Spot">
        <AddItemForm onSubmit={handleAddItem} onClose={handleCloseModal} />
      </Modal>
    </div>
  );
};

export default ParkingTypePage;
