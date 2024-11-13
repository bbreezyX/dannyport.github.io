import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Contact = () => (
  <Container id="contact" className="section my-5">
    <h2 className="text-center mb-4">Contact Me</h2>
    <Form className="form-contact">
      <Form.Group className="mb-3">
        <Form.Label></Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          className="form-about"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label></Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your email"
          className="form-about"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label></Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Your message"
          className="form-about"
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="w-100">
        Submit
      </Button>
    </Form>
  </Container>
);

export default Contact;
