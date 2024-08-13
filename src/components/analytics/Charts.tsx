import React from 'react'
import { BarChart, LineChart, PieChart, TotalSells } from './AllCharts';

export const Charts = () => {
  return (
    <div className='p-11 '>
    <TotalSells />

    <div className='flex flex-wrap justify-center items-center mt-3 gap-4'>
        <BarChart />
        <LineChart />
        <PieChart />
    </div>
    </div>
  )
}
