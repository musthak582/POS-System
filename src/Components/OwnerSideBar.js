import React from 'react';
import { FaProductHunt } from 'react-icons/fa';
import {RxDashboard} from "react-icons/rx";
import {MdCategory} from "react-icons/md";
import {AiFillShopping} from "react-icons/ai";
import {FiShoppingCart} from "react-icons/fi";
import {BiUser} from  "react-icons/bi"
function SideBar() {
    return ( 
        <div className="SideBar">
            <div className="SideList">
                <ul>
                    <li>
                        <div>
                            <RxDashboard/>
                            <h3>Dashboard</h3>
                        </div>
                    </li>
                    <li>
                        <div>
                            <FaProductHunt/>
                            <h3>Products</h3>
                        </div>
                    </li>
                    <li>
                        <div>
                            <MdCategory/>
                            <h3>Categories</h3>
                        </div>
                    </li>
                    <li>
                        <div>
                            <AiFillShopping/>
                            <h3>Sales</h3>
                        </div>
                    </li>
                    <li>
                        <div>
                            <FiShoppingCart/>
                            <h3>Purchase</h3>
                        </div>
                    </li>
                    <li>
                        <div>
                            <BiUser/>
                            <h3>Users</h3>
                        </div>
                    </li>
                </ul>

            </div>
            <div className="Upgrade">
                <p>Upgrade to Pro more features</p>
                <button>Upgrade</button>

            </div>

        </div>
     );
}

export default SideBar;