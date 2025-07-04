import React, { useState } from 'react';
import DataTable from '../../components/UI/DataTable';
import Modal from '../../components/UI/Modal';
import AddItemForm from '../../components/Forms/AddItemForm';
import { PlusCircle } from 'lucide-react';

const MobileLockerPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lockerData, setLockerData] = useState([ // Example state for table data
    { locker_id: 'ML001', status: 'Available', current_location: 'Dock A', last_user: 'User 123', name: 'Mobile Locker 1', selected_date: '2024-01-10', is_active: true },
    { locker_id: 'ML002', status: 'In Use', current_location: 'Zone B', last_user: 'User 456', name: 'Mobile Locker 2', selected_date: '2024-01-12', is_active: true },
    { locker_id: 'ML003', status: 'Maintenance', current_location: 'Service Bay', last_user: 'N/A', name: 'Mobile Locker 3', selected_date: '2024-01-15', is_active: false },
  ]);

  const columns = ['Locker ID', 'Name', 'Status', 'Current Location', 'Last User', 'Added Date', 'Is Active'];

  // Format data for DataTable
  const formattedData = lockerData.map(item => ({
    'locker id': item.locker_id,
    name: item.name, // Added from form
    status: item.status,
    'current location': item.current_location,
    'last user': item.last_user,
    'added date': item.selected_date, // Added from form
    'is active': item.is_active ? 'Yes' : 'No' // Added from form
  }));


  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleAddItem = (newItem) => {
    console.log('New Mobile Locker Data:', newItem);
    // Here you would typically send data to a backend or update global state
    // For now, just adding to local state for demonstration
    const newEntry = {
      locker_id: `ML${Math.floor(Math.random() * 900) + 100}`, // Generate a mock ID
      name: newItem.name,
      status: newItem.isActive ? 'Available' : 'Inactive', // Example logic
      current_location: 'Pending Assignment', // Example default
      last_user: 'N/A',
      selected_date: newItem.selectedDate,
      is_active: newItem.isActive,
    };
    setLockerData(prevData => [...prevData, newEntry]);
    handleCloseModal();
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Mobile Lockers</h1>
        <button
          onClick={handleOpenModal}
          className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-150 ease-in-out"
        >
          <PlusCircle size={20} className="mr-2" />
          Add New Mobile Locker
        </button>
      </div>

      <DataTable title="Mobile Locker Status" columns={columns} data={formattedData} />
0
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title="Add New Mobile Locker">
        <AddItemForm onSubmit={handleAddItem} onClose={handleCloseModal} />
      </Modal>
    </div>
  );
};

export default MobileLockerPage;
