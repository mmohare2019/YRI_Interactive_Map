import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function AdminHeader() {
  return (
    <>
      <Navbar className="header" variant="light">
        <Container>
          <Navbar.Brand href="/admin">
            <img className="yri-logo" src="YRI_LOGO.png" width="30" height="30" alt="YRI logo"/>
            <img className="ccsj-logo" src="ccsjLogo.jpg" width="30" height="30" alt="CCSJ logo"/>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                <a class="nav-item nav-link" href="/admin">Home</a>
                <a class="nav-item nav-link" href="/inbox">Messages</a>
                <a class="nav-item nav-link" href="/partners">Partners</a>
                <a class="nav-item nav-link" href="/category">Categories</a>
                </div>
            </div>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <br/>
    </>
  );
}

export default AdminHeader;