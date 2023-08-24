import React from 'react';
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import '../../Components/Details/Details.css'


function Details() {
  return (
    <Container className="mt-4">
      <Row>
        <Col xs={12} className="mb-4">
          <div style={{ width: '75%', margin: '0 auto' }}>
            <Carousel>
              <Carousel.Item style={{ height: '300px' }}>
                <img
                  className="d-block w-100"
                  src="/Images/a.jpg"
                  alt="First slide"
                  style={{ objectFit: 'cover', height: '100%' }}
                />
              </Carousel.Item>
              <Carousel.Item style={{ height: '300px' }}>
                <img
                  className="d-block w-100"
                  src="/Images/b.jpg"
                  alt="Second slide"
                  style={{ objectFit: 'cover', height: '100%' }}
                />
              </Carousel.Item>
              <Carousel.Item style={{ height: '300px' }}>
                <img
                  className="d-block w-100"
                  src="/Images/c.jpg"
                  alt="Third slide"
                  style={{ objectFit: 'cover', height: '100%' }}
                />
              </Carousel.Item>
              <Carousel.Item style={{ height: '300px' }}>
                <img
                  className="d-block w-100"
                  src="/Images/d.jpg"
                  alt="Fourth slide"
                  style={{ objectFit: 'cover', height: '100%' }}
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <h1>Football Turf Details</h1>
          <p>Located in the heart of the city, our football turf is perfect for your next game. Our state-of-the-art turf is made from the highest quality materials and is designed to give you the best playing experience possible.</p>
          <p>Our facilities include:</p>
          <ul>
            <li>Two full-sized football turfs</li>
            <li>Showers and changing rooms</li>
            <li>On-site parking</li>
            <li>Pro shop with football gear and accessories</li>
          </ul>
          <p>Book your next game today!</p>
        </Col>
        <Col xs={12} md={6}>
          <h2>Book Your Game</h2>
          <p>Select a one-hour time slot below:</p>

          <Button variant="primary" className="mx-1 mb-3 btn-time-slot">5:00 AM - 6:00 AM</Button>
          <Button variant="primary" className="mx-1 mb-3 btn-time-slot">6:00 AM - 7:00 AM</Button>
          <Button variant="primary" className="mx-1 mb-3 btn-time-slot">7:00 AM - 8:00 AM</Button>
          <Button variant="primary" className="mx-1 mb-3 btn-time-slot">8:00 AM - 9:00 AM</Button>
          <Button variant="primary" className="mx-1 mb-3 btn-time-slot">9:00 AM - 10:00 AM</Button>
          <Button variant="primary" className="mx-1 mb-3 btn-time-slot">10:00 AM - 11:00 AM</Button>
          <Button variant="primary" className="mx-1 mb-3 btn-time-slot">12:00 AM - 1:00 PM</Button>
          <Button variant="primary" className="mx-1 mb-3 btn-time-slot">1:00 AM - 2:00 PM</Button>
          <Button variant="primary" className="mx-1 mb-3 btn-time-slot">2:00 AM - 3:00 PM</Button>
          <Button variant="primary" className="mx-1 mb-3 btn-time-slot">3:00 AM - 4:00 PM</Button>
          <Button variant="primary" className="mx-1 mb-3 btn-time-slot">4:00 AM - 5:00 PM</Button>
          <Button variant="primary" className="mx-1 mb-3 btn-time-slot">5:00 AM - 6:00 PM</Button>
          <Button variant="primary" className="mx-1 mb-3 btn-time-slot">6:00 AM - 7:00 PM</Button>
          <Button variant="primary" className="mx-1 mb-3 btn-time-slot">7:00 AM - 8:00 PM</Button>
          <Button variant="primary" className="mx-1 mb-3 btn-time-slot">8:00 AM - 9:00 PM</Button>
          <Button variant="primary" className="mx-1 mb-3 btn-time-slot">9:00 AM - 10:00 PM</Button>
          <Button variant="primary" className="mx-1 mb-3 btn-time-slot">10:00 AM - 11:00 PM</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Details;
