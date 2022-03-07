import React from "react";

const LoginCard: React.FC = () => {
  let today = new Date();
  let date = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
  let time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`
  let formattedDate = `${date} ${time}`;

  return (
    <div className="is-full-width card-mt mr-5 ml-5">
      <div className="card is-centered">
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">Personal Job Tracker</p>
              <p className="subtitle is-6">by @alhanson7210</p>
            </div>
          </div>
          <div className="content">
            <p className="subtitle is-6">
              The simple demonstration shows an example of how a dynamic frontend can be deployed as a microservice via Dockerfiles, google cloud shell, and the necessary google apis(cloudrun.googleapis.com, cloudbuild.googleapis.com).
            </p>
            <br/>
            <time dateTime={date}>Visited { formattedDate }</time>
          </div>
        </div>
        <footer className="card-footer">
          <p className="card-footer-item">Try out the Job Tracker by logging in the main menu</p>
        </footer>
      </div>
    </div>
  )
}

export default LoginCard;