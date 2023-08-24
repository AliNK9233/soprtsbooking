import { useState } from 'react';
import { Form, Button, Card, Container } from 'react-bootstrap';

function TurfDetails() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [size, setSize] = useState('');
  const [price, setPrice] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [summary, setSummary] = useState('');
  const [photos, setPhotos] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitted form data: name=${name}, category=${category}, size=${size}, price=${price}, phone=${phone}, location=${location}, summary=${summary},photos=${photos}`);
    // You can add your own code to handle form submission here
  };
  
  const handlePhotosChange = (event) => {
    const files = event.target.files;
    setPhotos(files);
  }
  return (
    <div className="mt-5 mb-5">
      <Card className="mx-auto" style={{ width: '400px' }}>
        <Card.Body>
          <Card.Title className="text-center">Turf Details</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Turf Name</Form.Label>
              <Form.Control type="text" placeholder="Enter turf name" value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control as="select" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Select category</option>
                <option value="Grass">Grass</option>
                <option value="Astroturf">Astroturf</option>
                <option value="Mud">Mud</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formSize">
              <Form.Label>Size</Form.Label>
              <Form.Control type="text" placeholder="Enter turf size" value={size} onChange={(e) => setSize(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" placeholder="Enter turf price" value={price} onChange={(e) => setPrice(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" placeholder="Enter phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formLocation">
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" placeholder="Enter turf location" value={location} onChange={(e) => setLocation(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formSummary">
              <Form.Label>Summary</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter turf summary" value={summary} onChange={(e) => setSummary(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formPhotos">
        <Form.Label>Photos</Form.Label>
        <Form.Control className='mb-3' type="file" accept="image/*" multiple onChange={handlePhotosChange} />
      </Form.Group>

            <Button variant="primary" type="submit" block>
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default TurfDetails;
