import React from "react";
import { useRoutes } from "react-router-dom";
import Login from "../../pages/login/Login";
import Dashboard from "../../pages/dashboard/Dashboard";

const AppRoutes: React.FC = () => {
    return useRoutes([
        { path: '/', element: <Login/> },
        { path: '/dashboard', element: <Dashboard/> }, 
    ]);
}

export default AppRoutes;