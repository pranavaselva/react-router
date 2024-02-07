import {Link} from "react-router-dom";
// import React from "react";

function Navbar(){
    return(
        <div className="nav">
            <div>
            <Link to="/Home"><h1>Kalvium <span className="emo">❤</span> </h1></Link>
            </div>
            
         <div className="bar">
            <div>
            <Link to="/Contacts"><h1>Contacts</h1></Link>
            </div>
            <div>
            <Link to="/About"><h1>About</h1> </Link> 
            </div>
         </div>
        </div>
    )
}

export default Navbar;