import logo from "../logo.svg"

import React from "react";

export default function Nav(){
    return(
        <nav className="nav">
            <img src={logo} alt="hello"/>
            <h3>React Facts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}