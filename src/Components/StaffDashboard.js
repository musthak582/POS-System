import React from "react";
import NewStaff from "./NewSatff";
import StaffDetail from "./StaffDetail";
import StaffNameList from "./StaffName";

function StaffDashboard() {

    return (
        <div className="Staff">
            <StaffNameList/>
            <StaffDetail/>
            <NewStaff/>
            
        </div>
    )
}

export default  StaffDashboard;