import React from 'react';
function NewStaff() {
    return ( 
        <div className="NewStaff">
            <h2>Add New Staff</h2>
            <div className="StaffDetails">
                <div>
                    <label> Full Name:</label>
                    <input type="text" ></input>

                </div>
                <div>
                    <label>NIC Number:</label>
                    <input type="text"></input>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email"></input>
                </div>
                <div>
                    <label>Contact Number:</label>
                    <input type="text"></input>
                </div>
                <div>
                    <button>Add</button>
                </div>


            </div>

        </div>
     );
}

export default NewStaff;