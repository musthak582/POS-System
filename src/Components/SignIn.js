import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { BsGoogle, BsLinkedin } from "react-icons/bs";

import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";


const SignIn = () => {

    return (
        <div className="SignIn">
           <div className="SignInForm">
                <h1>Sign in to POS System</h1>
                <div className="icons">
                    <FaFacebookSquare />
                    <BsGoogle />
                    <BsLinkedin />

                </div>
                <div>
                    <p>or use your email account.</p>
                </div>
                <div className="FormDetails">
                   
                    <div>
                        <MdEmail />
                        <input type="text" placeholder="Email" ></input>
                    </div>
                    <div>
                        <RiLockPasswordFill />
                        <input type="text" placeholder="Password"></input>
                    </div>
                    <div>
                        <button>Sign in</button>
                    </div>

                </div>




            </div>

        </div>

    )
}


export default SignIn;