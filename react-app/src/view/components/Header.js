import React from "react";
import "../screen/Home.css"
import { Link } from "react-router-dom";

function Header(text) {
    return (
        <nav className="header">
            <img className="yri-logo" src="YRI_LOGO.png" alt="YRI logo"/>
            <img className="ccsj-logo" src="ccsjLogo.jpg" alt="CCSJ logo"/> 
            <Link to="/login">Admin login</Link> 
        </nav>
    );
}

export default Header