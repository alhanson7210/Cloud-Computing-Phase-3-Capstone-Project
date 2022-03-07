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

export type { UserData, JobEvent, ObserverProps };