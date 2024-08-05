// Dashboard page
"use client"
import { Menu } from '@/components/Menu'
import TableComponent from '@/components/dashboard-components/Table';
import './style.css';
import { ActionComponents } from '@/components/dashboard-components/BasicComponents';
import { DropdownMenuDemo } from '@/components/dashboard-components/DropDownMenu';

const Dashboard = () => {
    //data
    const data = localStorage.getItem('userInfo');
    let user;

    if (data){
      user = JSON.parse(data);
    }

    //console.log(user)
  return (
    <div id='dashboard-container'>
        <Menu>
          <DropdownMenuDemo />
        </Menu>
        <div className='mt-5'>
            <ActionComponents />
            <TableComponent />
        </div>
    </div>
  )
}

export default Dashboard;
