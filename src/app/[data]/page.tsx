"use client";
// Dashboard page
import { Menu } from "@/components/Menu";
import TableComponent from "@/components/dashboard-components/Table";
import "./style.css";
import { ActionComponents } from "@/components/dashboard-components/BasicComponents";
import { DropdownMenuDemo } from "@/components/dashboard-components/DropDownMenu";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import ProtectedLayout from "@/components/ProtectedRoute";

const Dashboard = () => {
  ////const a = useUser();
 /// if (a) { console.log(a)}
  return (
    <ProtectedLayout>
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
    </ProtectedLayout>
  );
};

export default Dashboard;
