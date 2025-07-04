// Simulates API calls with a short delay
const simulateApiCall = (data, delay = 500) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
};

// --- Dashboard Data ---

export const getSummaryCounts = () => {
  const data = {
    lockers: { total: 150, available: 75 },
    rooms: { total: 50, available: 12 },
    parking: { total: 200, available: 50 },
    revenueYTD: 125670,
    occupancyRate: 78, // percentage
    maintenanceTickets: 12,
  };
  return simulateApiCall(data);
};

export const getMonthlyRevenue = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Revenue ($)',
        data: [12000, 19000, 15000, 21000, 18000, 25000, 22000, 23000, 20000, 26000, 28000, 30000],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        borderRadius: 5,
        hoverBackgroundColor: 'rgba(54, 162, 235, 0.8)',
      },
    ],
  };
  return simulateApiCall(data);
};

export const getExpenseData = () => {
  const data = {
    labels: ['Marketing', 'Operations', 'Salaries', 'Utilities', 'Maintenance', 'Software'],
    datasets: [
      {
        label: 'Expenses',
        data: [3500, 5200, 15500, 2100, 1200, 1800],
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(255, 159, 64, 0.7)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1,
        hoverOffset: 4,
      },
    ],
  };
  return simulateApiCall(data);
};

// --- Generic Table Data ---

const generateGenericTableData = (columns, numRows) => {
  const data = [];
  for (let i = 1; i <= numRows; i++) {
    const row = {};
    columns.forEach((col, index) => {
      const key = col.toLowerCase().replace(/\s+/g, '_');
      row[key] = `Sample ${col} Data ${i}`;
      if (key === 'id' || key.includes('_id')) row[key] = `${key.slice(0,2).toUpperCase()}${100+i}`;
      if (key === 'status') row[key] = i % 3 === 0 ? 'Inactive' : (i % 2 === 0 ? 'Pending' : 'Active');
      if (key.includes('name')) row[key] = `${col.split(' ')[0]} ${String.fromCharCode(65+i-1)}`;
      if (key.includes('count') || key.includes('value') || key.includes('rate') || key.includes('fee')) row[key] = Math.floor(Math.random() * 100) + 1;
    });
    data.push(row);
  }
  return data;
};

export const getLocationsData = () => {
  const columns = ['ID', 'Name', 'Address', 'City', 'Status'];
  return simulateApiCall(generateGenericTableData(columns, 8));
};

export const getLocationTypesData = () => {
  const columns = ['ID', 'Type Name', 'Description', 'Created At'];
  const data = [
    { id: 'LT001', type_name: 'Warehouse', description: 'Storage and distribution facility', created_at: '2023-01-15' },
    { id: 'LT002', type_name: 'Office', description: 'Administrative and business operations', created_at: '2023-02-20' },
    { id: 'LT003', type_name: 'Retail Outlet', description: 'Customer-facing sales point', created_at: '2023-03-10' },
    { id: 'LT004', type_name: 'Showroom', description: 'Product display area', created_at: '2023-04-05' },
  ];
  return simulateApiCall(data);
};

// --- NEW LIVE API CALL ---

export const getSatyaMessageData = (name) => {
  return new Promise((resolve, reject) => {
    fetch(`http://192.168.1.121:3300/api/satya?name=${encodeURIComponent(name)}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => resolve(data))
      .catch(error => {
        console.error('Fetch error:', error);
        reject(error);
      });
  });
};

console.log('✅ Mock Data Service Initialized');
