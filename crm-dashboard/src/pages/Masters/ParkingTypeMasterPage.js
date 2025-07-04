import React from 'react';
import DataTable from '../../components/UI/DataTable';

const ParkingTypeMasterPage = () => {
  const columns = ['ID', 'Type Name', 'Fee (per hour)', 'Description'];
  const data = [
    { id: 'PTM01', type_name: 'Covered Garage', fee: 5, description: 'Multi-level covered parking' },
    { id: 'PTM02', type_name: 'Open Lot', fee: 2, description: 'Outdoor parking area' },
    { id: 'PTM03', type_name: 'Valet', fee: 15, description: 'Valet parking service' },
  ];
  const formattedData = data.map(item => ({
    id: item.id,
    'type name': item.type_name,
    'fee (per hour)': item.fee,
    description: item.description
  }));

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Master: Parking Types</h1>
      <DataTable title="Parking Types (Master List)" columns={columns} data={formattedData} />
    </div>
  );
};

export default ParkingTypeMasterPage;
