{/*Charts: Here I created multiple chart components */}

import { CategoryScale } from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";

export interface PieChartsTypes {
    status?: string;
}

Chart.register(CategoryScale);
const info = localStorage.getItem("carsInfo");
const parseInfo = info && JSON.parse(info);

{/* Pie chart */}
export const PieChart = () => {
    const usedStatus = parseInfo && parseInfo.filter((data: { status: string }) => { return data.status === 'used'});
    const newStatus = parseInfo && parseInfo.filter((data: { status: string }) => { return data.status === 'new'});
    
    const totalUsedUnits = usedStatus.reduce((acc: number, item: { units: number }) => acc + item.units, 0);
    const totalNewUnits = newStatus.reduce((acc: number, item: { units: number }) => acc + item.units, 0);

    const statusArray = [
        {"units": totalUsedUnits},
        {"units": totalNewUnits}
    ];

    const pieChartData = {
        labels: ['new', 'used'], 
        datasets: [
          {
            data: statusArray && statusArray.map((data: { units: number }) => data.units),
            backgroundColor: [
              "#0939b3",
              "#2475c6",
            ],
            borderColor: "black",
            borderWidth: 2
          }
        ]
      }

  return (
    <div className="w-[35%] p-2 shadow-xl">
        <Pie data={pieChartData}/>  
    </div>
  )
}

{/* Bar Chart */}
export const BarChart = () => {
    const barChartData = {
        labels: parseInfo && parseInfo.map((item: { name: string }) => item.name), 
        datasets: [
          {
            data: parseInfo && parseInfo.map((data: { price: number }) => data.price),
            backgroundColor: [
              "#0939b3",
              "#0863bd",
              "#0095df",
              "#81b6e8"
            ],
            borderColor: "black",
            borderWidth: 2
          }
        ]
      }

  return (
    <div className="w-[35%] p-2 shadow-xl">
        <Bar data={barChartData}/>  
    </div>
  )
}
