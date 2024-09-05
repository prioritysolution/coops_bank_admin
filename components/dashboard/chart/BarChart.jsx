"use client";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Monthly Users",
        data: [120, 150, 170, 140, 180, 210, 190, 220, 240, 230, 260, 280],
        backgroundColor: "rgba(24, 171, 86, 0.2)",
        borderColor: "rgb(24, 171, 86)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Users Over the Year",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Month",
        },
        barPercentage: 0.5,
        categoryPercentage: 0.5,
      },
      y: {
        title: {
          display: true,
          text: "Number of Users",
        },
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
