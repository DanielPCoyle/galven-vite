import React from 'react';
import { Row, Col } from 'react-bootstrap';

function ThreeColumnRow() {
  return (
    <Row>
      <Col md={4}>
        <div className="d-flex flex-column align-items-center">
          <img src="/cellphone.png" alt="Cell Phone" style={{ width: '50%' }} />
          <div className="mt-3 text-center fs-5">Create a User Profile</div>
        </div>
      </Col>
      <Col md={4}>
        <div className="d-flex flex-column align-items-center">
          <img src="/cellphone.png" alt="Cell Phone" style={{ width: '50%' }} />
          <div className="mt-3 text-center fs-5">Buy Shares</div>
        </div>
      </Col>
      <Col md={4}>
        <div className="d-flex flex-column align-items-center">
          <img src="/cellphone.png" alt="Cell Phone" style={{ width: '50%' }} />
          <div className="mt-3 text-center fs-5">Join the Team</div>
        </div>
      </Col>
    </Row>
  );
}

export default ThreeColumnRow;
vite