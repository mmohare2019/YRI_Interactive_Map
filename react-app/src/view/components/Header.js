import React from "react";

function Header(text) {
    return (
        <nav className="header">
            <img className="yri-logo" src="YRI_LOGO.png" alt="YRI logo"/>
            <img className="ccsj-logo" src="ccsjLogo.jpg" alt="CCSJ logo"/> 
            <a href="http://localhost:3000/login">Admin login</a> 
        </nav>
    );
}

export default Header