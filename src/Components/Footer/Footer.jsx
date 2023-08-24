import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row>
          <Col xs={12} md={4} className="mb-4">
            <h5 className="text-uppercase mb-4">Contact Us</h5>
            <p>123 Main St.</p>
            <p>City, State ZIP</p>
            <p>Phone: 555-555-5555</p>
            <p>Email: example@example.com</p>
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <h5 className="text-uppercase mb-4">Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <h5 className="text-uppercase mb-4">Connect With Us</h5>
            <p>Follow us on social media:</p>
            <div className="d-flex justify-content-start">
              <a href="/">
                <FaFacebook className="text-white mr-3" size={30} />
              </a>
              <a href="/">
                <FaTwitter className="text-white mr-3" size={30} />
              </a>
              <a href="/">
                <FaInstagram className="text-white mr-3" size={30} />
              </a>
              <a href="/">
                <FaLinkedin className="text-white mr-3" size={30} />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <hr className="bg-light" />
            <p className="text-center">&copy; {new Date().getFullYear()} My Site. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
