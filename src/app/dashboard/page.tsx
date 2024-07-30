import { Menu } from '@/components/Menu'
import TableComponent from '@/components/dashboard-components/Table';
import './style.css';
import { ActionComponents } from '@/components/dashboard-components/BasicComponents';

const Dashboard = () => {
  return (
    <div id='dashboard-container'>
        <Menu>
          <p>Username</p>
        </Menu>
        <div className='mt-5'>
            <ActionComponents />
            <TableComponent />
        </div>
    </div>
  )
}

export default Dashboard;
