import React from "react";
import LoginHeader from "./components/LoginHeader";
import LoginBody from "./components/LoginBody";
// import { useNavigate } from "react-router-dom";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { toggleState } from "./idp-user-flow";

const Login: React.FC = () => {
    // let navigate = useNavigate();
    // const auth = getAuth();

    // onAuthStateChanged(auth, user => {
    //     if (user) {
    //         console.log(`rerouting user ${user?.displayName}`)
    //         toggleState()
    //         navigate('/dashboard');
    //         return;
    //     }
    //     toggleState()
    //     navigate('/');
    // })
    return (
        <div className="">
            <LoginHeader></LoginHeader>
            <LoginBody></LoginBody>
        </div>
    )
}

export default Login;