import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="md" sticky="top" className="pb-3">
      <Container>
        <Navbar.Brand href="/">Sports Arena Booking</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto mb-2 mb-md-0">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#">My Bookings</Nav.Link>
            <Nav.Link href="/turfdetails">Add Your Turf Details</Nav.Link>
          </Nav>
          <Nav className="ms-auto mb-2 mb-md-0">
            <Button href="/login" variant="outline-light">Sign In</Button>
            <Button href="/signup" variant="outline-light" className="ms-3">Register</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <style type="text/css">
        {`
          @media (max-width: 767px) {
            .me-auto {
              margin-right: 0 !important;
              margin-bottom: 10px;
            }
            .ms-auto {
              margin-left: 0 !important;
              margin-bottom: 10px;
            }
            .ms-auto > .btn-outline-light:not(:first-child) {
              margin-left: 10px;
            }
          }
        `}
      </style>
    </Navbar>
  );
}

export default Header;
