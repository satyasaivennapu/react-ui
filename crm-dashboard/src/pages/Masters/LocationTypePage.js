import React from 'react';
import DataTable from '../../components/UI/DataTable';

const LocationTypePage = () => {
  const columns = ['ID', 'Type Name', 'Description', 'Created At'];
  const data = [
    { id: 'LT001', type_name: 'Warehouse', description: 'Storage and distribution facility', created_at: '2023-01-15' },
    { id: 'LT002', type_name: 'Office', description: 'Administrative and business operations', created_at: '2023-02-20' },
    { id: 'LT003', type_name: 'Retail Outlet', description: 'Customer-facing sales point', created_at: '2023-03-10' },
  ];
  // Correcting data keys to match DataTable's expectation (lowercase_with_underscores)
  const formattedData = data.map(item => ({
    id: item.id,
    'type name': item.type_name, // DataTable will look for 'type_name'
    description: item.description,
    'created at': item.created_at // DataTable will look for 'created_at'
  }));


  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Manage Location Types</h1>
      <DataTable title="Location Types" columns={columns} data={formattedData} />
    </div>
  );
};

export default LocationTypePage;
