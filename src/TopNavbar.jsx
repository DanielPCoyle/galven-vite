import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

function TopNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <img
          src="/logo.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="GALVEN logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* Add additional links here if needed */}
        </Nav>
        <Button variant="primary" className="ml-auto">
          Sign Up
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TopNavbar;
