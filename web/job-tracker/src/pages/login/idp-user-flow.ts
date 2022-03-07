import config from './idp-config';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, Auth, deleteUser, User, /*onAuthStateChanged*/ } from "firebase/auth";
import UserManager from '../../types/managers/UserManager';

const FirebaseApp = initializeApp(config);

function toggleState() {
  const auth = getAuth(FirebaseApp);
  const user = auth.currentUser;
  if (user) {
    //handle state for dashboard
    UserManager.setActiveUser(user.displayName, user.email)
    console.log('user is currently logged in')
  } else {
    //handle anonomous state for login
    UserManager.resetActiveUser()
    console.log('no current user')
  }
}

// onAuthStateChanged(getAuth(FirebaseApp), user => {
//   toggleState()
// })

// window.onload = () => {
//   toggleState()
// }

async function SignIn(event: MouseEvent) {
  // if ( event.type === "click" ) {
    const auth: Auth = getAuth(FirebaseApp);
    const provider: GoogleAuthProvider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/userinfo.email');
    await signInWithPopup(auth, provider)
      .then(result => {
        console.log(`Acquire user ${result.user.displayName}`)
        window.alert(`Welcome ${result.user.displayName}!`);
      })
      .catch(error => {
        console.log(`Error during sign in: ${error.message}`);
        window.alert('Sign in failed. Retry or check your browser logs.');
      })
  // }
  toggleState()
}

// function onSignIn(googleUser: any) {
//   var profile = googleUser.getBasicProfile();
//   var displayName = profile.getName()
//   var email = profile.getEmail()
//   if (displayName && email) {
//     UserManager.setActiveUser(displayName, email)
//   } else {
//     UserManager.resetActiveUser()
//   }
// }

async function SignOut(event: MouseEvent) {
  if ( event.type === "click" ) {
    const auth: Auth = getAuth(FirebaseApp);
    await auth.signOut()
      .then(() => {
        console.log('user loggged out')
        window.alert(`Successful logout. Come back soon!`);
      })
      .catch( error => {
        console.log('user loggged out')
        window.alert('Logout Failed');
      })
  }
  toggleState()
}

async function DeleteUser(event: MouseEvent) {
  if ( event.type === "click" ) {
    const auth = getAuth(FirebaseApp);
    const user: User | null = auth.currentUser;
    if (user) {
      await deleteUser(user)
      .then(() => {
        console.log('Deleted User')
      })
      .catch(error => {
        console.log('error deleting user')
      })
    }
  }
  toggleState()
}

export { toggleState, SignIn, SignOut, DeleteUser, FirebaseApp};