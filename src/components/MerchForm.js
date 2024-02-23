import React, { useState, useEffect } from 'react';
import { Form, Button, ListGroup, Container, Row, Col } from 'react-bootstrap';

const MerchForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  // Initialize contacts state with an empty array
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Fetch data from the mock API when the component mounts
    fetch('https://65b8594446324d531d561e91.mockapi.io/PromineoTechAPI/contacts')
      .then(response => response.json())
      .then(data => setContacts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const handleOwnDataSubmit = (e) => {
    e.preventDefault();

    // Append your own data to a new array and update the state
    const newContact = { ...formData };
    setContacts(prevContacts => [...prevContacts, newContact]);

    // Clear the form after submission
    setFormData({ firstName: '', lastName: '', email: '' });
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <Form onSubmit={handleOwnDataSubmit}>
            <Form.Group controlId="formOwnFirstName">
              <Form.Label>Your First Name:</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formOwnLastName">
              <Form.Label>Your Last Name:</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formOwnEmail">
              <Form.Label>Your Email:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Add My Data
            </Button>
          </Form>
        </Col>
      </Row>

      <hr />

      <Row>
        <Col md={6}>
          <h2>All Contacts</h2>
          <ListGroup>
            {contacts.map((contact, index) => (
              <ListGroup.Item key={index}>
                {contact.firstName} {contact.lastName} - {contact.email}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default MerchForm;
