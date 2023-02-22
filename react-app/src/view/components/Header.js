import React from "react";
import "../screen/Home.css"
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav class="header">
            <img class="yri-logo" src="YRI_LOGO.png" alt="YRI logo"/>
            <img class="ccsj-logo" src="ccsjLogo.jpg" alt="CCSJ logo"/> 
            <Link to="/login">Admin Login</Link> 
        </nav>
    );
}

export default Header