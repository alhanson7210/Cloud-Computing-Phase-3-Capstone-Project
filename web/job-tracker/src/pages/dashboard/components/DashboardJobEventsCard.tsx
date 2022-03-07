import React from "react";
import DashboardJobEventsForm from "./DashboardJobEventsForm";

const DashboardJobEventsCard: React.FC = () => {
    return (
        <div className="card is-centered">
            <div className="card-content">
                <label className="label is-large is-underlined">Create Job Event</label>
                <DashboardJobEventsForm></DashboardJobEventsForm>
            </div>
        </div>
    )
}

export default DashboardJobEventsCard;