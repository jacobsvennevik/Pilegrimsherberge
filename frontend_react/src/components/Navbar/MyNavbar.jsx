import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './MyNavbar.scss';

function MyNavbar() {
  return (
/*     <header role="banner">
      <img id="logo-main" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32877/logo-thing.png" width="200" alt="Logo Thing main logo" /> */
      <Navbar expand="lg" id="navbar-primary" className="navbar-default">
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
    // </header>
  );
}

export default MyNavbar;

