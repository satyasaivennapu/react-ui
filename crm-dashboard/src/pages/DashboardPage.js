import React, { useEffect, useState } from 'react';
import SummaryCard from '../components/Dashboard/SummaryCard';
import BarChart from '../components/Charts/BarChart';
import PieChart from '../components/Charts/PieChart';
import { Lock, BedDouble, CarFront, DollarSign, TrendingUp, AlertTriangle } from 'lucide-react'; // Changed TrendingDown to AlertTriangle
import { getSummaryCounts, getMonthlyRevenue, getExpenseData } from '../services/mockDataService';

const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-32">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

const DashboardPage = () => {
  const [summaryData, setSummaryData] = useState(null);
  const [revenueData, setRevenueData] = useState(null);
  const [expensesData, setExpensesData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [summary, revenue, expenses] = await Promise.all([
          getSummaryCounts(),
          getMonthlyRevenue(),
          getExpenseData(),
        ]);
        setSummaryData(summary);
        setRevenueData(revenue);
        setExpensesData(expenses);
      } catch (error) {
        console.error("Failed to fetch dashboard data:", error);
        // Optionally set some error state here to display to the user
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard Overview</h1>
        <LoadingSpinner />
      </div>
    );
  }

  // Default empty structures for charts if data isn't loaded yet, to prevent errors
  const emptyChartData = { labels: [], datasets: [{ data: [] }] };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard Overview</h1>

      {/* Summary Cards Section */}
      {summaryData && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <SummaryCard
            title="Total Lockers"
            value={summaryData.lockers.total.toString()}
            available={summaryData.lockers.available.toString()}
            icon={Lock}
            color="blue"
          />
          <SummaryCard
            title="Total Rooms"
            value={summaryData.rooms.total.toString()}
            available={summaryData.rooms.available.toString()}
            icon={BedDouble}
            color="green"
          />
          <SummaryCard
            title="Total Parking"
            value={summaryData.parking.total.toString()}
            available={summaryData.parking.available.toString()}
            icon={CarFront}
            color="yellow"
          />
        </div>
      )}

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3">
          {revenueData ? (
            <BarChart data={revenueData} title="Monthly Revenue" />
          ) : (
            <div className="bg-white shadow-lg rounded-xl p-6 h-96 flex justify-center items-center text-gray-500">No revenue data available.</div>
          )}
        </div>
        <div className="lg:col-span-2">
          {expensesData ? (
            <PieChart data={expensesData} title="Expenses Breakdown" />
          ) : (
            <div className="bg-white shadow-lg rounded-xl p-6 h-96 flex justify-center items-center text-gray-500">No expense data available.</div>
          )}
        </div>
      </div>

      {/* Additional placeholder cards for future use */}
      {summaryData && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SummaryCard
            title="Revenue YTD"
            value={`$${new Intl.NumberFormat('en-US').format(summaryData.revenueYTD)}`}
            icon={DollarSign}
            color="purple"
          />
          <SummaryCard
            title="Occupancy Rate"
            value={`${summaryData.occupancyRate}%`}
            icon={TrendingUp}
            color="pink"
          />
          <SummaryCard
            title="Maintenance Tickets"
            value={`${summaryData.maintenanceTickets} Active`}
            icon={AlertTriangle}
            color="red"
          />
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
