import { JobEvent, UserData } from "../formats/types";

export class Manager {
  ActiveUser: UserData;
  localJobViews: JobEvent[];

  constructor() {
    this.ActiveUser = {
      hasActiveUser: false,
      displayName: null,
      email: null
    };
    this.localJobViews = [];
  }

  setActiveUser(name:string|null, email:string|null) {
    this.ActiveUser = {
      hasActiveUser: true,
      displayName: name,
      email: email
    };
  }

  resetActiveUser() {
    this.ActiveUser = {
      hasActiveUser: false,
      displayName: null,
      email: null
    }; 
  }

  createJobEvent(position:string) {
    //<update to post call to cloud function in the future>
  }

  getJobEvents() {
    //<update to fetch call to cloud function>
  }
}

const UserManager: Manager = new Manager();

export default UserManager;