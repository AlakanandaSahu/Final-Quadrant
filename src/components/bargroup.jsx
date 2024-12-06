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

const BarGroupChart = () => {
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
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
    datasets: [
      {
        label: 'Large',
        data: [107.97, 165.38, 520.2, 635.82, ],
        backgroundColor: ['rgba(0, 128, 0, 0.5)'],
        borderColor: ['rgba(0, 128, 0, 0.5)'],
        borderWidth: 1,
        // fill: false,
        pointStyle: 'rectRot',
      pointRadius: 5,
      pointBorderColor: 'rgb(0, 0, 0)'
      },
      {
        label: 'Medium',
        data: [218.21, 183.84, 270.25, 340.89, ],
        backgroundColor: ['rgba(0, 50, 0, 1)'],
        borderColor: ['rgba(0, 50, 0, 1)'],
        borderWidth: 1,
        // fill: false,
        pointStyle: 'rectRot',
      pointRadius: 5,
      pointBorderColor: 'rgb(0, 0, 0)'
      },
      {
        label: 'Small',
        data: [24.72, 40.84, 43.09, 43.02],
        backgroundColor: ['rgba(128, 128, 0, 1)'],
        borderColor: ['rgba(128, 128, 0, 1)'],
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
      y: {
        stacked: true,
        beginAtZero: true, max: 1500, // Set maximum value for y-axis 
        ticks: { stepSize: 300, // Customize interval 
        },
        
      },
      x: {
        stacked: true,
      },
      
      
    },
    
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

export default BarGroupChart;
