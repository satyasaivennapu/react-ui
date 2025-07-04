import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title
);

const PieChart = ({ data, options, title }) => {
  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          boxWidth: 12,
          padding: 10,
          color: '#555',
          font: {
            size: 12
          }
        }
      },
      title: {
        display: !!title,
        text: title || 'Expenses Breakdown',
        font: {
          size: 16,
          weight: 'bold',
        },
        color: '#333'
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.label || '';
            if (label) label += ': ';
            if (context.parsed !== null) {
              label += new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
              }).format(context.parsed);
            }
            return label;
          }
        }
      }
    },
    animation: {
      duration: 800,
      easing: 'easeOutQuart',
    },
    cutout: '40%' // optional: makes it look like doughnut
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-4 h-80 sm:h-96">
      <Pie data={data} options={{ ...defaultOptions, ...options }} />
    </div>
  );
};

export default PieChart;
