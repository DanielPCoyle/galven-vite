import React from 'react';
import { Row, Col } from 'react-bootstrap';

function ThreeColumnRow() {
  return (
    <Row>
      <Col md={4}>
        <div className="d-flex flex-column align-items-center">
          <img src="/cellphone.png" alt="Cell Phone" style={{ width: '50%' }} />
          <h3 className="mt-3 text-center">Create a User Profile</h3>
        </div>
      </Col>
      <Col md={4}>
        <div className="d-flex flex-column align-items-center">
          <img src="/cellphone.png" alt="Cell Phone" style={{ width: '50%' }} />
          <h3 className="mt-3 text-center">Buy Shares</h3>
        </div>
      </Col>
      <Col md={4}>
        <div className="d-flex flex-column align-items-center">
          <img src="/cellphone.png" alt="Cell Phone" style={{ width: '50%' }} />
          <h3 className="mt-3 text-center">Join the Team</h3>
        </div>
      </Col>
    </Row>
  );
}

export default ThreeColumnRow;
vite