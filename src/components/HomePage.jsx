import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const HomePage = () => {
  return (
    <Container>
      <Row>
        <Col className='text-center'>
          <h1>Welcome to my website</h1>
          <p>
            Feel free to explore!
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;