{/*Charts: Here I created multiple chart components */}

import { CategoryScale } from "chart.js";
import { Bar, Bubble, Line, Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";

Chart.register(CategoryScale);

// Cars data
const info = localStorage.getItem("carsInfo");
const parseInfo = info && JSON.parse(info);

// Analytics

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
    <div className="w-[45%] p-2 shadow-xl">
        <h2 className="text-[3vmin] text-center mb-3 border italic font-bold">Vehicle status</h2>
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
            label: '',
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
    <div className="w-[45%] p-2 shadow-xl">
        <h2 className="text-[3vmin] text-center mb-3 border italic font-bold">Highest price</h2>
        <Bar data={barChartData}/>  
    </div>
  )
}

{/* Line Chart */}
export const LineChart = () => {
    const lineChartData = {
        labels: parseInfo && parseInfo.map((item: { name: string }) => item.name), 
        datasets: [
          {
            label: '',
            data: parseInfo && parseInfo.map((data: { soldunits: number }) => data.soldunits),
            backgroundColor: [
              "#0939b3",
              "#0863bd",
              "#0095df",
              "#81b6e8"
            ],
            borderColor: "black",
            borderWidth: 2,
          }
        ]
      }

  return (
    <div className="w-[45%] p-5 shadow-xl">
        <h2 className="text-[3vmin] text-center mb-3 border italic font-bold">Best sellers</h2>
        <Line data={lineChartData} />  
    </div>
  )
}

{/* Bubble Chart */}
export const TotalSells = () => {
return (
  <div className="p-5 mb-4 shadow-md shadow-[#0939b396] m-auto mt-11 text-center">
      <h1 className="text-[4vmin]">Ganancia total: </h1>  
  </div>
)
}