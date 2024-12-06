// src/Dashboard.js
import React, { useState, useEffect } from 'react';
import {Line } from 'react-chartjs-2';
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

const LineChart = () => {
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
  
  const data2 = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
    datasets: [
      {
        label: 'Weekly Job Completion Trend',
        data: [20, 20, 22, 28, 10],
        backgroundColor: ['rgba(0, 50, 0, 1)'],
        borderColor: ['rgba(0, 50, 0, 1)'],
        borderWidth: 2,
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options2 = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true, max: 50, // Set maximum value for y-axis 
        ticks: { stepSize: 10, // Customize interval 
        },
        
      },
      
      
    },
    
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
      filler:{
        drawTime:'beforeDraw',
      },
      datalabels: {
        display: false, // Hide data labels
      },
    }
  };


  return (
    <div >
          <Line data={data2} options={options2}  width={canvasWidth} 
            height={canvasHeight} />
     </div>
  );
};

export default LineChart;
