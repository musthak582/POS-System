import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <div className="Navbar">
            <nav>
                <div className="brand">
                    <h2>POS system</h2>
                </div>
                <ul>
                    <li> <Link to="/Home">Home</Link></li>
                    <li> <Link to="/Login">Login</Link></li>
                </ul>
            </nav>

        </div>
    )
}

export default NavBar;
