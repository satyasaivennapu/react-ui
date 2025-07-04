import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ data, options, title }) => {
  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: title || 'Bar Chart',
        font: {
          size: 18,
          weight: 'bold',
        },
        color: '#333'
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(200, 200, 200, 0.2)',
        },
        ticks: {
          color: '#555'
        }
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#555'
        }
      }
    },
    animation: {
      duration: 1000,
      easing: 'easeInOutQuart'
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 h-96"> {/* Added h-96 for default height */}
      <Bar data={data} options={{ ...defaultOptions, ...options }} />
    </div>
  );
};

export default BarChart;
