import React from 'react';
import { Row, Col } from 'react-bootstrap';

function ThreeColumnRow() {
  return (
    <Row>
      <Col md={4}>
        <div className="py-3">
          <h3>Live Chats</h3>
          <p>Long form YouTube streams</p>
          <p>
            Chats cover all available investments within a particular vertical
          </p>
          <h3 className="mt-4">Owner Updates</h3>
          <p>Short form, in-app video updates</p>
          <p>
            Updates come directly from the athletes, musician or team members
            working closely with your investments.
          </p>
        </div>
      </Col>
      <Col md={4}>
        <div className="d-flex justify-content-center align-items-center h-100">
          <img src="/vip-pass.png" alt="VIP Pass" style={{ width: '80%' }} />
        </div>
      </Col>
      <Col md={4}>
        <div className="py-3">
          <h3>Live News + Social Media</h3>
          <p>Live in-app news feeds.</p>
          <p>
            Live in-app social media updates from your athlete, musician or
            people working closely with your investment.
          </p>
          <h3 className="mt-4">Exclusive Offers</h3>
          <p>First access to special passes.</p>
          <p>
            Limited edition memorabilia, gifts, autographs and signed photos.
          </p>
        </div>
      </Col>
    </Row>
  );
}

export default ThreeColumnRow;
