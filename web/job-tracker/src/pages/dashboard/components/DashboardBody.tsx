import React from "react";
import DashboardJobEventsCard from "./DashboardJobEventsCard";
import DashboardJobsViewCard from "./DashboardJobsViewCard";

const DashboardBody: React.FC = () => {
    return (
        <div>
            <div className="columns is-centered is-boxed card-mt mr-5 ml-5">
                <div className="column is-one-half">
                    <DashboardJobEventsCard></DashboardJobEventsCard>
                </div>
                <div className="column is-one-half">
                    <DashboardJobsViewCard></DashboardJobsViewCard>
                </div>
            </div>
            {
                /* 
                 * Below is a proof of concept of how the different sections will show like 
                 * Other sections will be added similarly
                 * It may be grouped into a DashboardColumnObject(leftPanel, rightPanel) React.FC:
                 * - this take in as an element property "leftPanel": DashboardJobEventsCard e.g.
                 * - and another parameter as a "rightPanel": DashboardJobsViewCard e.g.
                 * to reuse code to generate format a bit better
                 */
            }
            <div className="columns is-centered is-boxed card-mt mr-5 ml-5">
                <div className="column is-one-half">
                    <DashboardJobEventsCard></DashboardJobEventsCard>
                </div>
                <div className="column is-one-half">
                    <DashboardJobsViewCard></DashboardJobsViewCard>
                </div>
            </div>
        </div>
    )
}

export default DashboardBody;