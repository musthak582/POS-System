import React from 'react';
import { Link, Outlet } from "react-router-dom";
function HomeBar() {
    return ( 
        <div className="HomeBar">
              <nav>
                <ul>
                    <li> <Link to="Owner">Owner</Link></li>
                    <li> <Link to="Staff">Staff</Link></li>
                    <li> <Link to="Cashier">Cashier</Link></li>
                </ul>
            </nav>
            <Outlet/>
        </div>
     );
}

export default HomeBar;