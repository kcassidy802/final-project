import React, { useState, useEffect } from "react";
import { Form, Button, ListGroup, Container, Row, Col } from "react-bootstrap";

const MerchForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    fetch(
      "https://65b8594446324d531d561e91.mockapi.io/PromineoTechAPI/contacts"
    )
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleOwnDataSubmit = (e) => {
    e.preventDefault();

    if (selectedContact) {
      const updatedContacts = contacts.map((contact) =>
        contact.id === selectedContact.id ? formData : contact
      );
      setContacts(updatedContacts);
      setSelectedContact(null);
    } else {
      const newContact = { ...formData, id: new Date().getTime().toString() };
      setContacts((prevContacts) => [...prevContacts, newContact]);
    }

    setFormData({ name: "", email: "" });
  };

  const handleEdit = (contact) => {
    setFormData({ name: contact.name, email: contact.email });
    setSelectedContact(contact);
  };

  const handleDelete = (contact) => {
    const updatedContacts = contacts.filter((c) => c.id !== contact.id);
    setContacts(updatedContacts);
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <Form onSubmit={handleOwnDataSubmit}>
            <Form.Group controlId="formOwnFirstName">
              <Form.Label>Your Name:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
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
              {selectedContact ? "Update Contact" : "Submit your Info for a raffle to win free Merch!!!"}
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
                {contact.name} - {contact.email}
                <Button
                  variant="outline-warning"
                  size="sm"
                  className="ml-2"
                  onClick={() => handleEdit(contact)}
                >
                  Edit
                </Button>
                <Button
                  variant="outline-danger"
                  size="sm"
                  className="ml-2"
                  onClick={() => handleDelete(contact)}
                >
                  Delete
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default MerchForm;
