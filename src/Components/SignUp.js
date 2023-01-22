import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { BsGoogle, BsLinkedin } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";


const SignUp = () => {

    return (
        <div className="SignUp">
            <div className="SignUpForm">
                <h1>Create Account</h1>
                <div className="icons">
                    <FaFacebookSquare />
                    <BsGoogle />
                    <BsLinkedin />

                </div>
                <div>
                    <p>or use your email for registration.</p>
                </div>
                <div className="FormDetails">
                    <div>
                        <BiUser />
                        <input type="text" placeholder="Name"></input>
                    </div>
                    <div>
                        <MdEmail />
                        <input type="text" placeholder="Email" ></input>
                    </div>
                    <div>
                        <RiLockPasswordFill />
                        <input type="text" placeholder="Password"></input>
                    </div>
                    <div>
                        <button>Sign Up</button>

                    </div>

                </div>




            </div>

        </div>

    )
}


export default SignUp;