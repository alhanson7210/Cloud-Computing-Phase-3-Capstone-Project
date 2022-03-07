import React, { FormEventHandler } from "react";
import UserManager from "../../../../../types/managers/UserManager";

const DashboardJobEventForm: React.FC = () => {
    const CreateJobEvent: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        const form: HTMLFormElement | null = document.forms.namedItem('job-event-form')
        if (form) {
            //acquire form data
            let form_data: FormData = new FormData(form);
            const job_position: string = form_data.get('job-event-position') as string
            console.log(job_position);
            //data operation
            
             UserManager.createJobEvent(
                 job_position, 
             )
             
            //data clean up
            const input_event_name: HTMLInputElement | null = document.querySelector('[name="job-event-position"]')
            if (input_event_name) input_event_name.value = '';
        }
    }

    return (
        <form name="job-event-form" onSubmit={CreateJobEvent}>
            <div className="field">
                <label className="label">Job Position</label>
                <div className="control">
                    <input name="job-event-position" required className="input" type="text" placeholder="Enter an Job Position"/>
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <button className="button is-light" type="submit">Create Job Event &hearts;</button>
                </div>
            </div>
        </form>
    )
}

export default DashboardJobEventForm;