import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

function FormRow() {
  return (
    <Row>
      <Col md={7}>
        <div className="d-flex flex-column justify-content-center align-items-center h-100">
          <h2 className="text-center">
            Help us build the future of experiential investing.
          </h2>
          <img
            src="/desktop-iphone.png"
            alt="Desktop and iPhone"
            className="mt-4 mb-3"
            style={{ width: '80%' }}
          />
        </div>
      </Col>
      <Col md={5}>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Label>
              Please check any categories you are interested below
            </Form.Label>
            <div>
              <Form.Check type="checkbox" label="Horse Racing" />
              <Form.Check type="checkbox" label="Motorsports" />
              <Form.Check type="checkbox" label="Music" />
              <Form.Check type="checkbox" label="Athletes and NILs" />
              <Form.Check type="checkbox" label="Real Estate" />
            </div>
          </Form.Group>

          <Form.Group controlId="formBasicTextarea">
            <Form.Label>What else are you interested in?</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default FormRow;
