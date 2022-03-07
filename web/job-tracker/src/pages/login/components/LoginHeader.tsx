import React from 'react';
import UserManager from '../../../types/managers/UserManager';
import SignInButton from './SignInButton';
import SignOutButton from './SignOutButton';
import BrandName from './BrandName';

const LoginHeader: React.FC = () => {
    return (
        <nav className='navbar is-dark is-fixed-top' role="navigation" aria-label="main navigation">
            <div className="navbar-brand ml-2">
                <BrandName></BrandName>
            </div>

            <div id='login-navbar-menu' className='navbar-menu mr-2'>
                <div className='navbar-end'>
                    { !UserManager.ActiveUser.hasActiveUser && <SignInButton></SignInButton> }
                    { UserManager.ActiveUser.hasActiveUser && <SignOutButton></SignOutButton> }
                </div>
            </div>
        </nav>
    )
}

export default LoginHeader;