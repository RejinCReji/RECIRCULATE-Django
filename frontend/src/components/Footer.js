import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';

function Footer() {
  return (
    <div>
      <footer>
        <Container>
          <Row>
            <Col className="text-center py-1">Copyright &copy; RECIRCULATE</Col>
          </Row>
          <Row>
            <Col className="text-center py-1">All Rights Reserved.</Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
