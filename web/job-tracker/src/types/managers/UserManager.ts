import { UserData } from "../formats/types";

export class Manager {
  ActiveUser: UserData;

  constructor() {
    this.ActiveUser = {
      hasActiveUser: false,
      displayName: null,
      email: null
    };
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
}

const UserManager: Manager = new Manager();

export default UserManager;