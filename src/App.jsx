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
    <Row className="bg-galven py-5 small">
      <Col className='small'>
      <div className='container small'>
      <small>Galven.com is a website (the “Platform”) operated by Galven
Investment Strategies, LLC (“the Company”). The Company is
conducting a market research survey to gage interest in the
concept of Experiential Investing (“E.I.”). The Company does
not give investment advice, endorsement, analysis, or
recommendations with respect to any securities and the
content contained on the Platform does not constitute an offer
by the Company, or any affiliate to sell, solicit or make an offer
to buy an investment interest, or security of any kind. Any
potential investment overview, actual or implied, found on the
Platform is intended only as a summary of a future investment
concept displayed for the sole purpose of conducting market
research to measure interest in E.I.
In the future, the Company may elect to file an offering
statement with the U.S. Securities and Exchange Commission
(“SEC”) under Regulation A, of the Securities Act of 1933, as
amended. No money or other consideration is being solicited at
this time and if sent to us will not be accepted. No investment
summaries or offers to buy or sell securities are available on
this site and we are not, and cannot solicit, or accept any offer
to buy securities. By accessing this site and any pages thereof,
you agree to be bound by the Terms of Use and Privacy Policy.</small>
</div>
      </Col>
    </Row>
    </>
  );
}

export default GALVEN;
