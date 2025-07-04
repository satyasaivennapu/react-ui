import React from 'react';
import DataTable from '../../components/UI/DataTable';

const NormalLockerPage = () => {
  const columns = ['Locker ID', 'Size', 'Status', 'Location', 'Occupied Since'];
  const data = [
    { locker_id: 'NL101', size: 'Medium', status: 'Occupied', location: 'Corridor 1, Bank A', occupied_since: '2024-07-01' },
    { locker_id: 'NL102', size: 'Small', status: 'Available', location: 'Corridor 1, Bank B', occupied_since: 'N/A' },
    { locker_id: 'NL103', size: 'Large', status: 'Occupied', location: 'Corridor 2, Bank A', occupied_since: '2024-06-15' },
  ];
  const formattedData = data.map(item => ({
    'locker id': item.locker_id,
    size: item.size,
    status: item.status,
    location: item.location,
    'occupied since': item.occupied_since
  }));

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Normal Lockers</h1>
      <DataTable title="Normal Locker Availability" columns={columns} data={formattedData} />
    </div>
  );
};

export default NormalLockerPage;
