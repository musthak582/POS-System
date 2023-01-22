import React from "react"
import { Link } from "react-router-dom";
function RegisterBar() {
    return (
        <div className="ResiterButton">
            <button>
                <Link to="/Contact/SignUp">SignUp</Link>
            </button>
            <button>
                <Link to="/Contact/SignIn">SignIn</Link>
            </button>

        </div>
    );
}

export default RegisterBar;