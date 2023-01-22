import React from 'react';
import { FaProductHunt } from 'react-icons/fa';
import { AiFillShopping } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BiUser } from "react-icons/bi"
function Cards() {
    return (
        <div className="Cards">

            <div className="Products">
                <FaProductHunt />
                <span>2,564</span>
                <small>Increased 75%</small>
            </div>
            <div className="Sales">
                <AiFillShopping />
                <span>35,564</span>
                <small>Increased 15%</small>
            </div>
            <div className="Orders">
                <FiShoppingCart />
                <span>3,500</span>
                <small>Decreased 0.5%</small>
            </div>
            <div className="Customers">
                <BiUser />
                <span>1,634</span>
                <small>Increased 7.5%</small>
            </div>

    



        </div>
    );
}

export default Cards;