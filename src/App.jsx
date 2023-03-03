import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';

import TopNavbar from './TopNavbar';
import TwoColumnRow from './TwoColumnRow';
import CenteredRow from './CenterRow';
import FormRow from './FormRow';
import TextAndImageRow from './TextAndImageRow';
import ThreeColumnRow from './ThreeColumnRow';
import buyshare from "./assets/buyshare.png";
import signup from "./assets/signup.png";
import joinTeam from "./assets/joinTeam.png";
import 'bootstrap/dist/css/bootstrap.min.css';

function GALVEN() {
  return (
    <>
      <TopNavbar />
      <TwoColumnRow />
      <FormRow/>
      <CenteredRow title={"Be a Part of the Action"} />
      <TextAndImageRow />
      <div className='bg-light2 py-3'>
      <CenteredRow title={"The Experience"} />
      <ThreeColumnRow />
      </div>

      <CenteredRow title={"Invest in less than 5 minutes"} />

      <Row className="py-5">
      <Col md={4}>
        <div className="d-flex flex-column align-items-center">
          <img src={signup} alt="Cell Phone" style={{ width: '50%' }} />
          <div className="mt-3 text-center fs-4">Create a <br/>User Profile</div>
        </div>
      </Col>
      <Col md={4}>
        <div className="d-flex flex-column align-items-center">
          <img src={buyshare} alt="Cell Phone" style={{ width: '50%' }} />
          <div className="mt-3 text-center fs-4">Buy <br/>Shares</div>
        </div>
      </Col>
      <Col md={4}>
        <div className="d-flex flex-column align-items-center">
          <img src={joinTeam} alt="Cell Phone" style={{ width: '50%' }} />
          <div className="mt-3 text-center fs-4">Join the <br/> Team</div>
        </div>
      </Col>
    </Row>
    <Row className="bg-galven py-5">
      <Col>&nbsp;</Col>
    </Row>
    </>
  );
}

export default GALVEN;
