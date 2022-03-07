import React, { useEffect, useState } from "react";
import { ObserverProps, JobEvent } from "../../../../../types/formats/types";
import UserManager from "../../../../../types/managers/UserManager";


const DashboardJobViewObserver: React.FC<ObserverProps> = (props) => {
    const [jobViews, setJobViews] = useState<JobEvent[]>([]);
    const [viewsArePresent, setPresentFlag] = useState(false);

    useEffect(() => {
        const { REACT_APP_JOB_VIEWS_FUNCTION_URL } = process.env

        if ( REACT_APP_JOB_VIEWS_FUNCTION_URL ) {
            fetch(REACT_APP_JOB_VIEWS_FUNCTION_URL)
            .then(res => res.json())
            .then(jobEvents => {
                setJobViews(jobEvents)
                setPresentFlag(true)
            })
            .catch(error => {
                setPresentFlag(false)
            })
        }

    }, [])

    return (
        <div>
            { props.retrieveView() && !viewsArePresent && !UserManager.localJobViews.length && 
                <div>There are no job views to see yet {UserManager.ActiveUser.displayName}. </div>
            }
            {  props.retrieveView() && !viewsArePresent && UserManager.localJobViews.length !== 0 && 
                <div className="is-clipped">
                    <div>
                        { 
                            UserManager.localJobViews.map(jobView => {
                                return (
                                    <div>map as horizontally scrollable cards</div>
                                );
                            })
                        }
                    </div>
                </div>
            } 
            { props.retrieveView() && viewsArePresent && !jobViews.length &&
                <div>{ UserManager.ActiveUser.displayName }, you have no stored job events!</div>
            }
            { props.retrieveView() && viewsArePresent && jobViews.length &&
                <div className="card is-clipped">
                    <div>
                        {
                            jobViews.map(jobView => {
                                return (
                                    <div className="card is-centered">
                                        map as horizontally scrollable cards
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default DashboardJobViewObserver;