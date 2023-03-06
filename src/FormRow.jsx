import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import desktopPhone from './assets/desktopPhone.png';
function FormRow() {
  return (
    <Row className="bg-light py-5 px-5">
      <Col md={7}>
        <div className="d-flex flex-column justify-content-center  h-100 w-75 mx-auto">
            <div className="fs-3" >
            Help us build the future of experiential investing.
            </div>
          <img
            src={desktopPhone}
            alt="Desktop and iPhone"
            className="mt-4 mb-3 w-75"
          />
        </div>
      </Col>
      <Col md={5}>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox" className="mt-3">
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

          <Form.Group controlId="formBasicTextarea" className="mt-3">
            <Form.Label>What else are you interested in?</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-3">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default FormRow;
