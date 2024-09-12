"use client";
// Dashboard page
import { Menu } from "@/components/Menu";
import TableComponent from "@/components/dashboard-components/Table";
import "./style.css";
import { ActionComponents } from "@/components/dashboard-components/BasicComponents";
import { DropdownMenuDemo } from "@/components/dashboard-components/DropDownMenu";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

const Dashboard = () => {
  return (
      <Provider store={store}>
        <div id="dashboard-container">
          <Menu>
            <DropdownMenuDemo />
          </Menu>
          <div className="mt-5">
            <ActionComponents />
            <TableComponent />
          </div>
        </div>
      </Provider>
  );
};

export default Dashboard;
