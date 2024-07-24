import { ActionComponents } from '@/components/BasicComponents';
import { Menu } from '@/components/Menu'
import TableComponent from '@/components/Table';
import './style.css';

const Dashboard = () => {
  return (
    <div id='dashboard-container'>
        <Menu />
        <div className='mt-5'>
            <ActionComponents />
            <TableComponent />
        </div>
    </div>
  )
}

export default Dashboard;
