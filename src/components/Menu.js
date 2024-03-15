import React from 'react';
import '../Styles/Menu.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className='menuContainer'>
       <Container>
            <Row md='auto'>
                
                <Col id="colTextMenu">
                    <Link style={{ color: "white", textDecoration: "none" }} to='/'>Shows</Link>
                </Col>
                <Col id="colTextMenu">
                    <Link style={{ color: "white", textDecoration: "none" }} to='/people'>People</Link>
                </Col>
                <Col id="colTextMenu">Network</Col>
                <Col id="colTextMenu">WebChannels</Col>
                <Col id="colTextMenu">Schedules</Col>
            </Row>
       </Container>
    </div>
  )
}

export default Menu
