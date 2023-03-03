import React from 'react';
import { Row, Col } from 'react-bootstrap';
import galvenEI from './assets/galvenEI.png';
function TextAndImageRow() {
  return (
    <Row className="px-5 pt-3 pb-5">
      <Col md={7}>
        <div className="py-3">
          <p>
            Have you ever wanted to be in the Winner’s Circle at Churchill
            Downs.
          </p>
          <p>
            Would you like to participate in a private post-event video
            conference with your favorite band, musician or athlete?
          </p>
          <p>
            How about participating in the ownership of a motorsports car or
            truck?
          </p>
          <p>
            GALVEN’s marketplace of experiential investments leverages advances
            in technology, social networks and tokenization to bring fans into
            the game by making them interactive participants, owners and
            stakeholders with the potential to profit from their passions and
            enjoy amazing experiences along the way.
          </p>
        </div>
      </Col>
      <Col md={5}>
        <div className="d-flex justify-content-center align-items-center h-100">
          <img src={galvenEI} alt="iPhone" style={{width:"45%"}} />
        </div>
      </Col>
    </Row>
  );
}

export default TextAndImageRow;
