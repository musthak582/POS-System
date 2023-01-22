import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import WelcomMessage from './Welcome';
function LoginForms() {
    return ( 
        <div className="LoginForms">
               <WelcomMessage />
               <SignIn/>
               <SignUp/>

        </div>
     );
}

export default LoginForms;