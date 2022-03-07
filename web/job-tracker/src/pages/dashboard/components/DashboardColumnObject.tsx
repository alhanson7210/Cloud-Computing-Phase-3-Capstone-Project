import React from "react";
import { DashboardColumnObjectProps } from "../../../types/formats/types";

const DashboardColumnObject: React.FC<DashboardColumnObjectProps> = (proporties) => {
    return (
        <div className="columns is-centered is-boxed card-mt mr-5 ml-5">
            <div className="column is-one-half">
                {proporties.leftPanel}
            </div>
            <div className="column is-one-half">
                {proporties.rightPanel}
            </div>
        </div>
    )
}

export default DashboardColumnObject;