// src/Dashboard.js
import React, { useState, useEffect } from 'react';
import SidebarComponent from './sidebar';
import Piechart from './pie';
import Doughnutchart from './doughnut';
import LineChart from './line';
import HorizontalChart from './horizontal';
import BarGroupChart from './bargroup';
import DisposalBarChart from './disposalbar'
import { Bar, Line } from 'react-chartjs-2';
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

const Dashboard = () => {
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
        label: 'Total Volume of Waste Collected',
        data: [197.44, 191.74, 311.89, 285.8, 244.61, 272.61,248.12],
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
      y: {
        beginAtZero: true, max: 400, // Set maximum value for y-axis 
        ticks: { stepSize: 100, // Customize interval 
        },
        
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
  const data2 = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
    datasets: [
      {
        label: ' Green House Gas Emissions Reduced (kg CO₂e)',
        data: [1103.78, 809.25, 961.83, 1225.98, 460.4],
        backgroundColor: ['rgba(0, 50, 0, 1)'],
        borderColor: ['rgba(0, 50, 0, 1)'],
        borderWidth: 2,
        // fill: false,
        //pointStyle: 'disc',
      //pointRadius: 2,
      //pointBorderColor: 'rgb(0, 0, 0)'
      },
      {
        label: 'Carbon Emissions Reduced (kg)',
        data: [807.16, 789.8, 687.13, 996.27, 327.5],
        backgroundColor: ['rgba(0, 128, 0, 0.5)'],
        borderColor: ['rgba(0, 128, 0, 0.5)'],
        borderWidth: 2,
        // fill: false,
       // pointStyle: 'disc',
      ////pointRadius: 2,
      //pointWidth:2,
      //pointBorderColor: 'rgb(0, 0, 0)'
      },
    ],
  };

  const options2 = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true, max: 1250, // Set maximum value for y-axis 
        ticks: { stepSize: 250, // Customize interval 
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
      datalabels: {
        display: false, // Hide data labels
      },
    }
  };


  return (
    <div>
      {/* <div classNameName="container mx-auto p-4">
        <h1 classNameName="text-2xl font-bold mb-4">Sustainability Dashboard</h1>
        <div classNameName="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div classNameName="bg-white p-4 rounded shadow">
            <Bar data={data} options={options} />
          </div>
          <div classNameName="bg-white p-4 rounded shadow">
            <Line data={data} options={options} />
          </div>
          <div classNameName="bg-white p-4 rounded shadow">
            <Doughnut data={data} options={options} />
          </div>
          <div classNameName="bg-white p-4 rounded shadow">
            <Pie data={data} />
          </div>
        </div>
        <div classNameName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
           <div classNameName="bg-white p-4 rounded shadow">
            <Line data={data} options={options} />
          </div>
           <div classNameName="bg-white p-4 rounded shadow">
            <Pie data={data} />
          </div>
        </div>
      </div> */}

      <div className="antialiased">
      
      <SidebarComponent />

      <main className="flex flex-col gap-4 md:gap-5 px-4 lg:px-5 lg:ml-56 h-auto pt-20 pb-5">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow text-center">
            <div className="bg-white p-4 rounded shadow mb-4">
                <h6 className="text-xl font-bold mb-4 text-green-600">Number of E-Waste Collection Jobs Fulfilled</h6>
                <p className="font-bold">100</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
              <h6 className="text-xl font-bold text-green-600 mb-4">Average disposal fee for Collection jobs</h6>
              <p className="font-bold">27.0583</p>
              </div>
            
          </div>
          <div className="bg-white p-4 rounded shadow">
            
            <Line data={data2} options={options2} />
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h5 className="text-xl font-bold mb-4">Percentage of Waste Category Distribution</h5>
            <Doughnutchart />
          </div>
          {/* <div classNameName="bg-white p-4 rounded shadow">
            <Pie data={data} />
          </div> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <Bar data={data} options={options} width={canvasWidth} 
            height={canvasHeight} />
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h5 className="text-xl font-bold mb-4">Weekly Job Completion Trend</h5>
            <LineChart />
          </div>
          <div className="bg-white p-4 rounded shadow">
          <h5 className="text-xl font-bold mb-4">Energy Conserved by each Service type in Week 4</h5>
            <HorizontalChart />
          </div>
          
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <Piechart />
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h5 className="text-xl font-bold mb-4">Weekly Job Completion Trend</h5>
            <BarGroupChart />
          </div>
          <div className="bg-white p-4 rounded shadow">
          <h5 className="text-xl font-bold mb-4">Percentage of Toxic Substances Safely Disposed by service type</h5>
            <DisposalBarChart />
          </div>
          
        </div>
      </main>
      </div>
    </div>
  );
};

export default Dashboard;
