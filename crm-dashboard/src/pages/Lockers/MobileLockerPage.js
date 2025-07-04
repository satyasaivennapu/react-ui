import React, { useEffect, useState } from 'react';
import DataTable from '../../components/UI/DataTable';
import { getSatyaMessageData } from '../../services/mockDataService';

const MobileLockerPage = () => {
  const columns = ['Locker ID', 'Status', 'Current Location', 'Last User'];
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // fallback static data if API fails
  const fallbackData = [
    { locker_id: 'ML001', status: 'Available', current_location: 'Dock A', last_user: 'User 123' },
    { locker_id: 'ML002', status: 'In Use', current_location: 'Zone B', last_user: 'User 456' },
    { locker_id: 'ML003', status: 'Maintenance', current_location: 'Service Bay', last_user: 'N/A' },
  ];

  useEffect(() => {
    getSatyaMessageData('MobileLocker')
      .then(apiData => {
        console.log('API Data:', apiData);
        
        // here, adjust apiData format if needed
        // for demo, let's assume API returns array of locker objects like our fallback
        const formattedData = apiData.map(item => ({
          'locker id': item.locker_id,
          status: item.status,
          'current location': item.current_location,
          'last user': item.last_user
        }));

        setData(formattedData);
        setLoading(false);
      })
      .catch(error => {
        console.error('API error:', error);
        // use fallback
        const formattedData = fallbackData.map(item => ({
          'locker id': item.locker_id,
          status: item.status,
          'current location': item.current_location,
          'last user': item.last_user
        }));
        setData(formattedData);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Mobile Lockers</h1>
      {loading ? (
        <p className="text-gray-500">Loading mobile locker data...</p>
      ) : (
        <DataTable title="Mobile Locker Status" columns={columns} data={data} />
      )}
    </div>
  );
};

export default MobileLockerPage;
