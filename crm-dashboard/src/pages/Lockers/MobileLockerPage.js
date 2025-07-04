import React from 'react';
import DataTable from '../../components/UI/DataTable';

const MobileLockerPage = () => {
  const columns = ['Locker ID', 'Status', 'Current Location', 'Last User'];
  const data = [
    { locker_id: 'ML001', status: 'Available', current_location: 'Dock A', last_user: 'User 123' },
    { locker_id: 'ML002', status: 'In Use', current_location: 'Zone B', last_user: 'User 456' },
    { locker_id: 'ML003', status: 'Maintenance', current_location: 'Service Bay', last_user: 'N/A' },
  ];
  const formattedData = data.map(item => ({
    'locker id': item.locker_id,
    status: item.status,
    'current location': item.current_location,
    'last user': item.last_user
  }));

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Mobile Lockers</h1>
      <DataTable title="Mobile Locker Status" columns={columns} data={formattedData} />
    </div>
  );
};

export default MobileLockerPage;
