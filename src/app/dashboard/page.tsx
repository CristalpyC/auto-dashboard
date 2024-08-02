"use client"
import { Menu } from '@/components/Menu'
import TableComponent from '@/components/dashboard-components/Table';
import './style.css';
import { ActionComponents } from '@/components/dashboard-components/BasicComponents';
import Avatar from '@mui/material/Avatar';
import { Scale } from 'lucide-react';

const Dashboard = () => {
    //data
    const data = localStorage.getItem('userInfo');
    let user;

    if (data){
      user = JSON.parse(data);
      //console.log()
    }

  return (
    <div id='dashboard-container'>
        <Menu>
            <div className='flex gap-3'>
              <Avatar
                alt="Remy Sharp"
                src="https://www.simplilearn.com/ice9/free_resources_article_thumb/how_to_become_A_programmer.jpg"
                sx={{ 
                  width: 40, 
                  height: 40,
                  transition: 'ease-in-out',
                  duration: '3s',
                  '&:hover': {
                  transform: 'Scale(1.2)'
                }
                }}
              />
            </div>
        </Menu>
        <div className='mt-5'>
            <ActionComponents />
            <TableComponent />
        </div>
    </div>
  )
}

export default Dashboard;
