import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CashierDashboard from "./CashierDashboard";
import Home from "./Home";
import LogIn from "./Login";
import NavBar from "./NavBar";
import OwnerDashboard from "./OwnerDashboard";
import StaffDashboard from "./StaffDashboard";


const App = () => {
    return (
        <div className="container">
            <NavBar />
            <Routes>
                <Route path="/Home" element={<Home />}>

                    <Route path="Owner" element={<OwnerDashboard />} />
                    <Route path="Staff" element={<StaffDashboard />} />
                    <Route path="Cashier" element={<CashierDashboard />} />

                </Route>
                <Route path="/Login" element={<LogIn />}>
                    
                </Route>

            </Routes>


        </div>
    )
}

export default App;



