import React from 'react';
import { Row } from 'react-bootstrap';

function CenteredRow({title}) {
  return (
    <Row className="align-items-center py-4">
      <div className="text-center">
        <h2>{title}</h2>
      </div>
    </Row>
  );
}

export default CenteredRow;
