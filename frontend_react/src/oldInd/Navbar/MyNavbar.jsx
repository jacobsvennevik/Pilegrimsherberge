import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './MyNavbar.scss';

function MyNavbar() {
  return (
    <Navbar expand="lg" id="navbar-primary" className="navbar-default navbar-absolute">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbar-primary-collapse" />
        <Navbar.Collapse id="navbar-primary-collapse">
          <Nav className="me-auto">
            <Nav.Link href="#" className="fs-3 mx-3">Link</Nav.Link>
            <Nav.Link href="#" className="fs-3 mx-3">Link</Nav.Link>
            <Nav.Link href="#" className="fs-3 mx-3">Link</Nav.Link>
            <Nav.Link href="#"  className="fs-3 mx-3">Link</Nav.Link>
            <Nav.Link href="#"  className="fs-3 mx-3">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;


