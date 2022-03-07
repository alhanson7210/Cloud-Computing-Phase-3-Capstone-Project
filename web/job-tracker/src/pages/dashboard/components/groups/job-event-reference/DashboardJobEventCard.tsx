import React from "react";
import DashboardJobEventForm from "./DashboardJobEventForm";

const DashboardJobEventCard: React.FC = () => {
    return (
        <div className="card is-centered">
            <div className="card-content">
                <label className="label is-large is-underlined">Create Job Event</label>
                <DashboardJobEventForm></DashboardJobEventForm>
            </div>
        </div>
    )
}

export default DashboardJobEventCard;