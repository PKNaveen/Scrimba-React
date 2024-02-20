import logo from "../Images/airbnb-logo.png"

import React from "react";


export default function Navbar(){
    return(
        <nav className="Navbar">
            <img className="logo" src={logo} alt="hi"/>
        </nav>
    )
}