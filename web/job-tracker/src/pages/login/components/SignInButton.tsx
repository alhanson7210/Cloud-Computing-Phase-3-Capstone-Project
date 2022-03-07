import React from "react";
// import { SignIn } from "../idp-user-flow";
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from "react-google-login";
import { useNavigate } from "react-router-dom";
import UserManager from "../../../types/managers/UserManager";

const SignInButton: React.FC = () => {
    const navigate = useNavigate()
    // const btn: HTMLButtonElement | null = document.getElementById('sign-in-button') as HTMLButtonElement;
    // if (btn) {
    //     btn.addEventListener('click', SignIn);
    // }
    const refreshTokenSetup = (res: GoogleLoginResponse) => {
        // Timing to renew access token
        let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

        const refreshToken = async () => {
            const newAuthRes = await res.reloadAuthResponse();
            refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
            console.log('newAuthRes:', newAuthRes);
            // saveUserToken(newAuthRes.access_token);  <-- save new token
            localStorage.setItem('authToken', newAuthRes.id_token);

            // Setup the other timer after the first one
            setTimeout(refreshToken, refreshTiming);
        };

        // Setup first refresh timer
        setTimeout(refreshToken, refreshTiming);
    }

    const onLoginSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
        const res: GoogleLoginResponse = response as GoogleLoginResponse;
        const profile = res.getBasicProfile()
        const name = profile.getName()
        const email = profile.getEmail()
        UserManager.setActiveUser(name, email)
        console.log(`Acquired user ${name}`)
        window.alert(`Welcome ${name}!`);
        navigate('/dashboard')
        refreshTokenSetup(res)
    }

    const onLoginFailure = (error:any) => {
        UserManager.resetActiveUser()
        console.log(`error code: ${error.code}\n${error.details}`)
        navigate('/')
    }

    return (
        <div className="my-auto">
            <GoogleLogin
                clientId="268027634297-qsogrrs1kq4lv419m7khlspb7r88bhd8.apps.googleusercontent.com"
                buttonText="Sign in with Google"
                className="my-auto"
                isSignedIn={true}
                onSuccess={onLoginSuccess}
                onFailure={onLoginFailure}
                accessType={"online"}
                cookiePolicy={"single_host_origin"}>
            </GoogleLogin>
            {/* <div className="g-signin2" data-onsuccess="onSignIn"></div> */}
            {/* <button id="sign-in-button" className="button is-responsive">
                Sign In
            </button> */}
        </div>
    )
}

export default SignInButton;