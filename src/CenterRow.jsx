import React from 'react';
import { Row } from 'react-bootstrap';

function CenteredRow() {
  return (
    <Row className="align-items-center py-4">
      <div className="text-center">
        <h2>Be a Part of the Action</h2>
      </div>
    </Row>
  );
}

export default CenteredRow;
