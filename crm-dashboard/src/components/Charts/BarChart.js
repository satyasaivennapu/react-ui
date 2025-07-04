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
  // Make sure each month has a different color
  const colors = [
    '#4F46E5', '#16A34A', '#F97316', '#DC2626', '#9333EA',
    '#0EA5E9', '#F59E0B', '#10B981', '#BE185D', '#3B82F6',
    '#6D28D9', '#EA580C'
  ];

  // Modify data to apply individual colors
  const customData = {
    ...data,
    datasets: data.datasets.map(dataset => ({
      ...dataset,
      backgroundColor: colors.slice(0, dataset.data.length),
      borderRadius: 6,
      barThickness: 28,
      maxBarThickness: 25,
    }))
  };

  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // hides legend for cleaner look
      },
      title: {
        display: !!title,
        text: title || 'Monthly Revenue',
        font: {
          size: 16,
          weight: 'bold',
        },
        color: '#333',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(200, 200, 200, 0.2)',
        },
        ticks: {
          color: '#555',
          font: {
            size: 12,
          }
        }
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#555',
          font: {
            size: 12,
          }
        }
      }
    },
    animation: {
      duration: 800,
      easing: 'easeOutQuart',
    }
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-4 h-80 sm:h-96">
      <Bar data={customData} options={{ ...defaultOptions, ...options }} />
    </div>
  );
};

export default BarChart;
