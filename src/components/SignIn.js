import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import '../Styles/SignIn.css';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div>
      <Container>
        <Row md='auto' style={{ marginTop: "10px" }}>
          <Col className='colText'>
            Login
          </Col>
          <Col >
            <Link className='colText' to='/registration'>Registration</Link>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SignIn
