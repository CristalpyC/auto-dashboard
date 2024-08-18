import React from 'react'
import { BarChart, LineChart, PieChart, ScatterChart, TotalSells } from './AllCharts';
import { Alert } from '@mui/material';

export const Charts = () => {
  const info = localStorage.getItem("carsInfo");
  const parseInfo = info && JSON.parse(info);

  return (
    <div className='p-11'>
      <TotalSells />

      {
        !parseInfo 
        ? <Alert color="error" sx={{ padding:'2rem' }}>Firebase server is not responding. Please check back later.</Alert>
        : 
        <div className='flex flex-wrap justify-center items-center mt-3 gap-4'>
          <BarChart />
          <LineChart />
          <PieChart />
          <ScatterChart />
        </div>
    }
    </div>
  )
}
