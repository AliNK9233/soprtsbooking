import React, { useState } from 'react';
import { Container, Row, Col, Carousel, Button, Form } from 'react-bootstrap';
import '../../Components/Details/Details.css'

function Details() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

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

  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="timeSlot1" />
    <label className="form-check-label" htmlFor="timeSlot1">5:00 AM - 6:00 AM</label>
  </div>

  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="timeSlot2" />
    <label className="form-check-label" htmlFor="timeSlot2">6:00 AM - 7:00 AM</label>
  </div>

  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="timeSlot3" />
    <label className="form-check-label" htmlFor="timeSlot3">7:00 AM - 8:00 AM</label>
  </div>

  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="timeSlot4" />
    <label className="form-check-label" htmlFor="timeSlot4">8:00 AM - 9:00 AM</label>
  </div>

  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="timeSlot5" />
    <label className="form-check-label" htmlFor="timeSlot5">9:00 AM - 10:00 AM</label>
  </div>

</Col>

      </Row>
    </Container>
  );
}

export default Details;
