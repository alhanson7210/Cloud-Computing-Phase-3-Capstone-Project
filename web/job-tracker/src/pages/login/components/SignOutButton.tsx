import React from "react";
import { GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";
import UserManager from "../../../types/managers/UserManager";
// import { SignOut } from "../idp-user-flow";

const SignOutButton: React.FC = () => {
    const navigate = useNavigate()
    // const btn: HTMLButtonElement | null = document.getElementById('sign-out-button') as HTMLButtonElement;
    // if (btn) {
    //     btn.addEventListener('click', SignOut)
    // }
    // function signOut() {
    //     var auth = gapi.auth.
    //     var auth2 = gapi.auth2.getAuthInstance();
    //     auth2.signOut().then(function () {
    //       console.log('User signed out.');
    //     });
    //   }
    const onLogoutSuccess = () => {
        UserManager.resetActiveUser()
        console.log('user loggged out')
        window.alert(`Successful logout. Come back soon!`);
        navigate('/')
    }

    const onLogoutFailure = () => {
        UserManager.resetActiveUser()
        console.log('user loggged out')
        window.alert('Logout Failed');
        navigate('/')
    }

    return (
        <div className="my-auto">
            <GoogleLogout
                clientId="268027634297-qsogrrs1kq4lv419m7khlspb7r88bhd8.apps.googleusercontent.com"
                buttonText="Logout of Google"
                className="my-auto"
                onLogoutSuccess={onLogoutSuccess}
                onFailure={onLogoutFailure}>
            </GoogleLogout>
            {/* <button id="sign-out-button" className="button is-responsive">
                Sign Out
            </button> */}
            {/* <button onClick={signOut}>Sign Out</button> */}
        </div>
    )
}

export default SignOutButton;