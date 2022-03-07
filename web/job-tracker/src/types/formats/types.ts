import React from "react";

interface UserData {
    hasActiveUser: boolean;
    displayName: string | null;
    email: string | null;
}

interface JobEvent {
    job_position: string;
    company: string;
    deadline: string;
    description: string;
    portalUrl: string;
    hasApplied: boolean;
}

interface ObserverProps {
    retrieveView(): boolean; 
}

interface DashboardColumnObjectProps {
    leftPanel: React.ReactElement;
    rightPanel: React.ReactElement;
}

export type { UserData, JobEvent, ObserverProps, DashboardColumnObjectProps };