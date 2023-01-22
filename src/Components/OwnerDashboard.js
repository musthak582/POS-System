import React from "react";
import Cards from "./OwnerCard";
import SideBar from "./OwnerSideBar";

function OwnerDashboard() {

    return (
        <div className="Owner">
            <SideBar/>
            <Cards/>
        </div>
    )
}

export default OwnerDashboard;