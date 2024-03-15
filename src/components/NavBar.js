import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import '../Styles/NavBar.css';
import SearchBar from './SearchBar';
import SignIn from './SignIn';
import Logo from './Logo';

const NavBar = () => {
    return (
        <div className='navContainer'>
            <Container>
                <Row>
                    <Col md='auto'>
                        <Logo />
                    </Col>
                    <Col>
                        <SearchBar />
                    </Col>
                    <Col sm={2}>
                       <SignIn />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default NavBar;
