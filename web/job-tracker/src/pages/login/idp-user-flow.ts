import config from './idp-config';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, Auth, deleteUser, User } from "firebase/auth";
import UserManager from '../../types/managers/UserManager';

initializeApp(config);

function toggleState() {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user) {
    //handle state for dashboard
    UserManager.setActiveUser(user.displayName, user.email)
  } else {
    //handle anonomous state for login
    UserManager.resetActiveUser()
  }
}

window.onload = () => {
  toggleState()
}

function SignIn() {
  const auth: Auth = getAuth();
  const provider: GoogleAuthProvider = new GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/userinfo.email');
  signInWithPopup(auth, provider)
    .then(result => {
      console.log(`Acquire user ${result.user.displayName}`)
      window.alert(`Welcome ${result.user.displayName}!`);
    })
    .catch(error => {
      console.log(`Error during sign in: ${error.message}`);
      window.alert('Sign in failed. Retry or check your browser logs.');
    })
  toggleState()
}

function SignOut() {
  const auth: Auth = getAuth();
  auth.signOut()
    .then(result => {
      console.log('user loggged out')
      window.alert(`Successful logout. Come back soon!`);
    })
    .catch( error => {
      console.log('user loggged out')
      window.alert('Logout Failed');
    })
  toggleState()
}

function DeleteUser() {
  const auth = getAuth();
  const user: User | null = auth.currentUser;
  if (user) {
    deleteUser(user)
    .then(() => {
      console.log('Deleted User')
    })
    .catch(error => {
      console.log('error deleting user')
    })
  }
  toggleState()
}

export { toggleState, SignIn, SignOut, DeleteUser };