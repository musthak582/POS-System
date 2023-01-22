import React from 'react';

import LoginBar from './LoginBar';
import LoginForms from './LoginForms';

function LogIn() {
    return (
        <div className="LoginPage">
            <LoginBar />
            <LoginForms/>
            
        </div>
    );
}

export default LogIn;