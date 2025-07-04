import React from 'react';
import DataTable from '../../components/UI/DataTable';

const TaxTypePage = () => {
  const columns = ['ID', 'Tax Name', 'Rate (%)', 'Applicable To'];
  const data = [
    { id: 'TX001', tax_name: 'VAT', rate: 10, applicable_to: 'Goods & Services' },
    { id: 'TX002', tax_name: 'Service Tax', rate: 5, applicable_to: 'Services' },
    { id: 'TX003', tax_name: 'Property Tax', rate: 2, applicable_to: 'Real Estate' },
  ];
  const formattedData = data.map(item => ({
    id: item.id,
    'tax name': item.tax_name,
    'rate (%)': item.rate,
    'applicable to': item.applicable_to
  }));

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Manage Tax Types</h1>
      <DataTable title="Tax Types" columns={columns} data={formattedData} />
    </div>
  );
};

export default TaxTypePage;
