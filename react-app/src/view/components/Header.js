import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header(text) {
    return (
        <Navbar className="header" variant="light">
        <Container>
          <Navbar.Brand href="/admin">
            <img className="yri-logo" src="YRI_LOGO.png" width="30" height="30" alt="YRI logo"/>
            <img className="ccsj-logo" src="ccsjLogo.jpg" width="30" height="30" alt="CCSJ logo"/>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <a className="nav-item nav-link" href="/">Home</a>
                <a className="nav-item nav-link" href="/login">Admin login</a>
                </div>
            </div>
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
}

export default Header