"use client";
//Analytics component
import { Charts } from "@/components/analytics/Charts";
import { DropdownMenuDemo } from "@/components/dashboard-components/DropDownMenu";
import { Menu } from "@/components/Menu";
import ProtectedLayout from "@/components/ProtectedRoute";
import { store } from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";

const Analytics = () => {
  return (
    <ProtectedLayout>
      <Provider store={store}>
        <Menu>
          <DropdownMenuDemo />
        </Menu>
        <Charts />
      </Provider>
    </ProtectedLayout>
  );
};

export default Analytics;
