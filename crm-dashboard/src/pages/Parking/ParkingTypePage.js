import React from 'react';
import DataTable from '../../components/UI/DataTable';

const ParkingTypePage = () => {
  // This page is for "Parking -> Parking Type"
  // Similar to rooms, this could list parking spots categorized by type.
  const columns = ['Spot ID', 'Parking Area', 'Type', 'Status', 'Vehicle No.'];
  const data = [
    { spot_id: 'P001', parking_area: 'Garage A1', type: 'Covered Garage', status: 'Occupied', vehicle_no: 'XYZ 123' },
    { spot_id: 'P002', parking_area: 'Lot B5', type: 'Open Lot', status: 'Available', vehicle_no: 'N/A' },
    { spot_id: 'P003', parking_area: 'Valet Zone 1', type: 'Valet', status: 'Occupied', vehicle_no: 'ABC 789' },
    { spot_id: 'P004', parking_area: 'Garage A2', type: 'Covered Garage', status: 'Reserved', vehicle_no: 'N/A' },
  ];
  const formattedData = data.map(item => ({
    'spot id': item.spot_id,
    'parking area': item.parking_area,
    type: item.type,
    status: item.status,
    'vehicle no.': item.vehicle_no
  }));

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Parking Management (by Type)</h1>
      <DataTable title="Parking Spot Status" columns={columns} data={formattedData} />
    </div>
  );
};

export default ParkingTypePage;
