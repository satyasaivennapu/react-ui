import React from 'react';
import DataTable from '../../components/UI/DataTable';

const LocationsPage = () => {
  const columns = ['ID', 'Name', 'Address', 'City', 'Status'];
  const data = [
    { id: 1, name: 'Main Warehouse', address: '123 Industrial Rd', city: 'Metropolis', status: 'Active' },
    { id: 2, name: 'Downtown Office', address: '456 Business Ave', city: 'Metropolis', status: 'Active' },
    { id: 3, name: 'North Hub', address: '789 Distribution St', city: 'Gotham', status: 'Inactive' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Manage Locations</h1>
      <DataTable title="Locations List" columns={columns} data={data} />
    </div>
  );
};

export default LocationsPage;
