import React from 'react';
import { Container } from 'react-bootstrap';

import TopNavbar from './TopNavbar';
import TwoColumnRow from './TwoColumnRow';
import CenteredRow from './CenteredRow';
import TextAndImageRow from './TextAndImageRow';
import ThreeColumnRow from './ThreeColumnRow';

function GALVEN() {
  return (
    <Container fluid>
      <TopNavbar />
      <TwoColumnRow />
      <CenteredRow />
      <TextAndImageRow />
      <ThreeColumnRow />
    </Container>
  );
}

export default GALVEN;
