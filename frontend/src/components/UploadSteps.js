import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function UploadSteps({ step1, step2, step3 }) {
  return (
    <Nav variant="pills" className="justify-content-center">
      <Nav.Item>
        {step1 ? (
          <LinkContainer to="/post">
            <Nav.Link>Details</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Details</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step2 ? (
          <LinkContainer to="/address">
            <Nav.Link>Address</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Address</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step3 ? (
          <LinkContainer to="/sell-payment">
            <Nav.Link>Payment</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Payment</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
}

export default UploadSteps;
