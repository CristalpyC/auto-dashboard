import React from 'react'
import { BarChart, PieChart } from './PieChart'

export const Charts = () => {
  return (
    <div className='flex justify-center items-center mt-3 gap-4'>
        <PieChart />
        <BarChart />
    </div>
  )
}
