import React, { useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

function UserBooking() {
  const [bookingDetails, setBookingDetails] = useState({
    arena: "",
    date: "",
    startTime: "",
    endTime: "",
    price: "",
  });

  const handleBooking = () => {
    // Handle booking
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Card>
            <Card.Header>
              <h1 className="text-center">Booking Details</h1>
            </Card.Header>
            <Card.Body>
              <Card.Title>{bookingDetails.arena}</Card.Title>
              <Card.Text>
                <strong>Date:</strong> {bookingDetails.date}
              </Card.Text>
              <Card.Text>
                <strong>Time:</strong> {bookingDetails.startTime} -{" "}
                {bookingDetails.endTime}
              </Card.Text>
              <Card.Text>
                <strong>Total Price:</strong> ${bookingDetails.price}
              </Card.Text>
              <div className="text-center">
                <Button variant="primary" onClick={handleBooking}>
                  Select Payment Method
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default UserBooking;
