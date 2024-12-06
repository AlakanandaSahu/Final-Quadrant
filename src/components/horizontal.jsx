// src/Dashboard.js
import React, { useState, useEffect } from 'react';
import {Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';

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
  Legend
);

const HorizontalChart = () => {
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
  
  const data = {
    labels: ['Battery Disposal', 'Desktop Recycling', 'Laptop Recycling', 'Miscellaneous', 'Mobile Phone Recycling', 'Printer Recycling', 'TV Recycling'],
    datasets: [
      {
        label: 'Energy Conserved  (kWh) in Week 4',
        data: [397.6, 172.01, 520.2, 635.82, 326.36 , 1008.59,167.99],
        backgroundColor: ['rgba(0, 128, 0, 0.5)'],
        borderColor: ['rgba(0, 128, 0, 0.5)'],
        borderWidth: 1,
        // fill: false,
        pointStyle: 'rectRot',
      pointRadius: 5,
      pointBorderColor: 'rgb(0, 0, 0)'
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true, max: 400, // Set maximum value for y-axis 
        ticks: { stepSize: 100, // Customize interval 
        },
        
      },
      
      
    },
    indexAxis: 'y',
    plugins: {
      
      legend: {
        labels: {
          usePointStyle: true,
        },
      },
      datalabels: {
        display: false, // Hide data labels
      },
    }
  };


  return (
    <div >
          <Bar data={data} options={options}  width={canvasWidth} 
            height={canvasHeight} />
     </div>
  );
};

export default HorizontalChart;
