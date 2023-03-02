import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import logo from './assets/logo.png';
function TopNavbar() {
  return (
    <Navbar bg="galven" expand="lg">
      <Navbar.Brand href="#home">
        <img
        
          src={logo}
          className="d-inline-block align-top ms-3"
          alt="GALVEN logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* Add additional links here if needed */}
        </Nav>
        <div className="ms-auto">
        <Button variant="primary" className="me-3">
          Sign Up
        </Button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TopNavbar;
