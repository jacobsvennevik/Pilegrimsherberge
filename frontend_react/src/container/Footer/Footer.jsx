import { Container, Row, Col, Image, ListGroup, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaBehance } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col lg={3}>
            <Image src="/assets/images/white-logo.png" alt="Your Cafe Logo" />
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Link to="#">16501 Collins Ave, Sunny Isles Beach, FL 33160, United States</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link to="#">yourcafe@company.com</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link to="#">010-020-0340</Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col lg={3}>
            <h4>Shopping &amp; Categories</h4>
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link href="#">Men’s Shopping</Nav.Link>
              <Nav.Link href="#">Women’s Shopping</Nav.Link>
              <Nav.Link href="#">Kid's Shopping</Nav.Link>
            </Nav>
          </Col>
          <Col lg={3}>
            <h4>Useful Links</h4>
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link href="#">Homepage</Nav.Link>
              <Nav.Link href="#">About Us</Nav.Link>
              <Nav.Link href="#">Help</Nav.Link>
              <Nav.Link href="#">Contact Us</Nav.Link>
            </Nav>
          </Col>
          <Col lg={12}>
            <p>
              Copyright © 2023 , Ltd. All Rights Reserved.
            </p>
            <Nav>
              <Nav.Link href="#"><FaFacebook /></Nav.Link>
              <Nav.Link href="#"><FaInstagram /></Nav.Link>
              <Nav.Link href="#"><FaLinkedin /></Nav.Link>
              <Nav.Link href="#"><FaBehance /></Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;



