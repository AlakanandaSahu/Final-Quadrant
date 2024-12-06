// src/Dashboard.js
import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
// Register the necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const Doughnutchart = () => {
  const [canvasWidth, setCanvasWidth] = useState(window.innerWidth * 0.3);  // 80% of window width
  const [canvasHeight, setCanvasHeight] = useState(400);

  useEffect(() => {
    const handleResize = () => {
      setCanvasWidth(window.innerWidth * 0.3);  // Recalculate width based on window size
      setCanvasHeight(400);  // You can adjust this height dynamically as well
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);  // Cleanup the event listener
    };
  }, []);

  const datapai = {
    labels: ['Large', 'Medium', 'Small'],
    datasets: [
      {
        label: 'Total Volume of Waste Collected',
        data: [15, 64, 21],
        backgroundColor: ['rgba(0, 50, 0, 1)', 'rgba(144, 238, 144, 0.5)', 'rgba(128, 128, 0, 1)' ],
        
      },
    ],
  };

  const optionspai = {
    responsive: true,
    maintainAspectRatio: false, 
    plugins: {
      legend: {
        generateLabels: (chart) => {
          const original = ChartJS.overrides.plugins.legend.labels.generateLabels;
          const labels = original.call(this, chart);
          labels.forEach(label => {
            label.text = label.text.split(' ').join('\n'); // Split label text into two lines
          });
          return labels;
        },
        labels: {
          usePointStyle: true,
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `Value: ${tooltipItem.raw}`; // Custom label format for tooltips
          },
        },
      },
      datalabels: {
        color: 'white', // Text color for the labels
        formatter: (value, ctx) => {
          const total = ctx.dataset.data.reduce((sum, val) => sum + val, 0); // Calculate total sum of data
          const percentage = ((value / total) * 100).toFixed(2); // Calculate percentage
          return `${percentage}%`; // Return the percentage
        },
        font: {
          weight: 'bold',
          size: 14, // Font size of the percentage labels
        },
        anchor: 'center', // Center the labels in the middle of the pie segments
        align: 'center', // Align the labels in the center
      },
    }
  };

  return (
    <div >
          <Doughnut data={datapai} options={optionspai}  width={canvasWidth} 
            height={canvasHeight} />
     </div>
  );
};

export default Doughnutchart;
