import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Home.css';

function Home() {
  const turfs = [
    {
      name: 'Turf D',
      image: '/Images/d.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor consectetur dolor, eu dignissim purus faucibus quis. Nam euismod nisi id semper scelerisque.',
      price: 150,
    },
    {
      name: 'Turf E',
      image: '/Images/e.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor consectetur dolor, eu dignissim purus faucibus quis. Nam euismod nisi id semper scelerisque.',
      price: 200,
    },
    {
      name: 'Turf F',
      image: '/Images/f.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor consectetur dolor, eu dignissim purus faucibus quis. Nam euismod nisi id semper scelerisque.',
      price: 180,
    },
    {
      name: 'Turf G',
      image: '/Images/g.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor consectetur dolor, eu dignissim purus faucibus quis. Nam euismod nisi id semper scelerisque.',
      price: 160,
    },
    {
      name: 'Turf G',
      image: '/Images/g.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor consectetur dolor, eu dignissim purus faucibus quis. Nam euismod nisi id semper scelerisque.',
      price: 160,
    },
    {
      name: 'Turf G',
      image: '/Images/g.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor consectetur dolor, eu dignissim purus faucibus quis. Nam euismod nisi id semper scelerisque.',
      price: 160,
    },
  ];

  return (
    <Container>
      <h1 className="text-center mt-5 mb-4">Football Turf Details</h1>
      <Row className="justify-content-center">
        {turfs.map((turf, index) => (
          <Col xs={12} md={6} lg={4} className="mb-4" key={index}>
            <Card>
              <Card.Img
                variant="top"
                src={turf.image}
                className="card-image"
              />
              <Card.Body>
                <Card.Title>{turf.name}</Card.Title>
                <Card.Text>{turf.description}</Card.Text>
                <h4>${turf.price}</h4>
                <Button href="/book" variant="primary">Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
 

  );
}

export default Home;
