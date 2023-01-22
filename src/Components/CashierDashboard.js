import React from "react";
import { FaSearch } from "react-icons/fa";

function CashierDashboard() {

    return (
        <div className="Cashier">
            <div className="CashierName">
                <h2>Welcome Mohammed,</h2>
                <h3>Bill Count:xxxx</h3>
            </div>
            <div className="Bar1">
                <div>
                    <input type="text" placeholder="search"></input>
                </div>
                <div>

                    <select>
                        <option value="">search in</option>
                        <option>Name</option>
                        <option>NIC no</option>
                        <option>Mobile no</option>
                    </select>
                    <div className="FaSearch">
                        <FaSearch />
                    </div>

                </div>

                <div>
                    {new Date().toLocaleString() + ""}
                </div>
                <div>
                    <button>Add New Customer</button>
                </div>
                <div>
                    <button>Bill No:xxxxxx</button>
                </div>
            </div>
            <div className="Bar2">
                <div>
                    <input type="text" placeholder="search"></input>
                    <FaSearch />
                </div>
                <div>
                    <button id="Colorbtn-aquamarine">Stocks</button>
                    <button id="Colorbtn-aquamarine">Suspanded Bills</button>
                </div>

            </div>
            <div className="table">
                <table>
                    <tr>
                        <th>No.</th>
                        <th>Item Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Sub Total</th>
                        <th>Discount Method</th>
                        <th>Discount</th>
                        <th>Sub Total</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>

            </div>
            <div className="PriceBar">
                <div>
                     <select>
                        <option value="">Generate Report</option>
                        <option>X-Report</option>
                        <option>Y-Report</option>
                       
                    </select>
                </div>

                <div className="Display-grid">
                    <button>Cash</button>
                    <button>Card</button>
                    <button>Credit</button>
                    <button>Chequeu</button>
                    <button  id="span-two">Suspend</button>
                </div>
                <div>
                    <button>Add Gift Card Balance</button>

                </div>
                <div id="displayBlock">
                    <button>Total-</button>
                    <button>Gift Card-</button>
                    <button>Discount-</button>
                    <button>Final Balance-</button>
                </div>

            </div>


        </div>
    )
}

export default CashierDashboard;