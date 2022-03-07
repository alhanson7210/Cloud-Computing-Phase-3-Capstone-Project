import React from "react";
import LoginHeader from "../login/components/LoginHeader";
import DashboardBody from "./components/DashboardBody";

const Dashboard: React.FC = () => {
    return (
        <div>
            <LoginHeader></LoginHeader>
            <DashboardBody></DashboardBody>
        </div>
    )
}

export default Dashboard;