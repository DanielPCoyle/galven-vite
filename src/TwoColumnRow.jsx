import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

function TwoColumnRow() {
  return (
    <Row>
      <Col md={7}>{/* First column content goes here */}</Col>
      <Col md={5}>
        <div className="d-flex flex-column justify-content-center align-items-center h-100">
          <img src="/logo.png" alt="GALVEN logo" />
          <h2 className="text-center">
            Experiential Investing.&nbsp;<sup>sm</sup>
            <br />
            Join the Team
          </h2>
          <p className="text-center">
            GALVEN E.I is an investment platform where any investor can buy
            shares and participate in the ownership of thoroughbreds,
            motorsports, your favorite band, athlete NILs, real estate and more.
          </p>
          <Button variant="primary" className="align-self-center">
            Join The Team
          </Button>
        </div>
      </Col>
    </Row>
  );
}

export default TwoColumnRow;
