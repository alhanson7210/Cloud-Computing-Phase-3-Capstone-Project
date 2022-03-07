import React from "react";
import DashboardColumnObject from "./DashboardColumnObject";
import DashboardJobEventCard from "./groups/job-event-reference/DashboardJobEventCard";
import DashboardJobViewCard from "./groups/job-event-reference/DashboardJobViewCard";
//import DashBoardResumeEventCard from "./groups/resume-event-reference/DashBoardResumeEventCard";
//import DashboardResumeViewCard from "./groups/resume-event-reference/DashboardResumeViewCard";
const DashboardBody: React.FC = () => {
    return (
        <div>
            {/* Job Event Reference */}
            <DashboardColumnObject 
                leftPanel={<DashboardJobEventCard/>}
                rightPanel={<DashboardJobViewCard/>}>
            </DashboardColumnObject>

            {/* Resume Quick Reference */}
            <DashboardColumnObject 
                leftPanel={<DashboardJobEventCard/> /*<DashBoardResumeEventCard>*/}
                rightPanel={<DashboardJobViewCard/> /*<DashBoardResumeViewCard>*/}>
            </DashboardColumnObject>

            {/* Ongoing Applications Reference */}
            <DashboardColumnObject 
                leftPanel={<DashboardJobEventCard/> /*<DashBoardOngoingAppEventCard>*/}
                rightPanel={<DashboardJobViewCard/> /*<DashBoardOngoingAppViewCard>*/}>
            </DashboardColumnObject>

            {/* Study Tasks Reference */}
            <DashboardColumnObject 
                leftPanel={<DashboardJobEventCard/> /*<DashBoardStudyTaskEventCard>*/}
                rightPanel={<DashboardJobViewCard/> /*<DashBoardStudyTaskViewCard>*/}>
            </DashboardColumnObject>

            {/* Interview Observations */}
            <DashboardColumnObject 
                leftPanel={<DashboardJobEventCard/> /*<DashBoardInterviewObservationEventCard>*/}
                rightPanel={<DashboardJobViewCard/> /*<DashBoardInterviewObservationViewCard>*/}>
            </DashboardColumnObject>
        </div>
    )
}

export default DashboardBody;