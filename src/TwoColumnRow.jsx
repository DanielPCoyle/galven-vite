import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import phoneHero from './assets/phoneHero.png';
import logo from './assets/logo2.png';

function TwoColumnRow() {
  return (
    <Row>
      <Col md={7} className="text-center py-5">
        <img className='w-75 mx-auto' src={phoneHero} alt="GALVEN phone" />
      </Col>
      <Col md={5}>
        <div className="d-flex flex-column  h-100 px-3 py-5">
          <img className='w-75' src={logo} alt="GALVEN logo" />
          <h2 className="text-left">
            Experiential Investing.&nbsp;<sup>sm</sup>
            <br />
            Join the Team
          </h2>
          <p className='py-3'>
            GALVEN E.I is an investment platform where any investor can buy
            shares and participate in the ownership of thoroughbreds,
            motorsports, <br/>your favorite band, athlete NILs, <br/>real estate and more.
          </p>
          <Button variant="primary" className='w-50 mb-3 mt-5'>
            JOIN THE TEAM
          </Button>
        </div>
      </Col>
    </Row>
  );
}

export default TwoColumnRow;
