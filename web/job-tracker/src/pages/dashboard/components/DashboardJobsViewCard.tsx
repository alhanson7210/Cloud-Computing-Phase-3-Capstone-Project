import React, { MouseEventHandler, useState } from "react";
import DashboardJobViewObserver from "./DashboardJobViewObserver";

const DashboardJobsViewCard: React.FC = () => {
    const [isViewOn, setViewer] = useState(false);
    const changeObserverView: MouseEventHandler<HTMLParagraphElement> | undefined = (event) => {
        if (event) {
            const p: HTMLParagraphElement = event.currentTarget;
            if (p.id === "view-trigger") {
                setViewer(true)
            } else if (p.id === "close-trigger") {
                setViewer(false)
            }
        }
    }
    const retrieveObserverView = () => isViewOn;

    return (
        <div className="card is-centered">
            <div className="card-content">
                <label className="label is-large is-underlined">View Job Events</label>
                <DashboardJobViewObserver 
                    retrieveView={retrieveObserverView}></DashboardJobViewObserver>
            </div>
            <footer className="card-footer">
                <p id="view-trigger" className="card-footer-item" onClick={changeObserverView}>View</p>
                <p id="close-trigger" className="card-footer-item" onClick={changeObserverView}>Close</p>
            </footer>
        </div>
    )
}

export default DashboardJobsViewCard;