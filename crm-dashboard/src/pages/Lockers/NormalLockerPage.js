import React, { useState } from 'react';
import DataTable from '../../components/UI/DataTable';
import Modal from '../../components/UI/Modal';
import AddItemForm from '../../components/Forms/AddItemForm';
import { PlusCircle } from 'lucide-react';

const NormalLockerPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lockerData, setLockerData] = useState([ // Example state for table data
    { locker_id: 'NL101', size: 'Medium', status: 'Occupied', location: 'Corridor 1, Bank A', occupied_since: '2024-07-01', name: 'Locker A101', selected_date: '2024-01-01', is_active: true },
    { locker_id: 'NL102', size: 'Small', status: 'Available', location: 'Corridor 1, Bank B', occupied_since: 'N/A', name: 'Locker B102', selected_date: '2024-01-05', is_active: true },
    { locker_id: 'NL103', size: 'Large', status: 'Occupied', location: 'Corridor 2, Bank A', occupied_since: '2024-06-15', name: 'Locker C103', selected_date: '2024-02-10', is_active: false },
  ]);

  // Added 'Name', 'Added Date', 'Is Active' to columns
  const columns = ['Locker ID', 'Name', 'Size', 'Status', 'Location', 'Occupied Since', 'Added Date', 'Is Active'];

  const formattedData = lockerData.map(item => ({
    'locker id': item.locker_id,
    name: item.name, // from form
    size: item.size,
    status: item.status,
    location: item.location,
    'occupied since': item.occupied_since,
    'added date': item.selected_date, // from form
    'is active': item.is_active ? 'Yes' : 'No' // from form
  }));

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleAddItem = (newItem) => {
    console.log('New Normal Locker Data:', newItem);
    // Adding to local state for demonstration
    const newEntry = {
      locker_id: `NL${Math.floor(Math.random() * 900) + 100}`, // Generate a mock ID
      name: newItem.name,
      size: 'Medium', // Example default, could be part of the form if needed
      status: newItem.isActive ? 'Available' : 'Out of Service', // Example logic
      location: 'To be determined', // Example default
      occupied_since: 'N/A',
      selected_date: newItem.selectedDate,
      is_active: newItem.isActive,
    };
    setLockerData(prevData => [...prevData, newEntry]);
    handleCloseModal();
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Normal Lockers</h1>
        <button
          onClick={handleOpenModal}
          className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-150 ease-in-out"
        >
          <PlusCircle size={20} className="mr-2" />
          Add New Normal Locker
        </button>
      </div>

      <DataTable title="Normal Locker Availability" columns={columns} data={formattedData} />

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title="Add New Normal Locker">
        <AddItemForm onSubmit={handleAddItem} onClose={handleCloseModal} />
      </Modal>
    </div>
  );
};

export default NormalLockerPage;
