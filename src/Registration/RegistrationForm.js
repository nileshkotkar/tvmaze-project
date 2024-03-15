import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TVMazeInput from '../components/TVMazeInput';
import TVMazeButton from '../components/TVMazeButton';
import TVMazwInputSecure from '../components/TVMazwInputSecure';

const RegistrationForm = () => {

    const filterHandler = () => {
        console.log("Filter button click")
    }

    const inputChangeText = (e) => {
        console.log(e)
    }

    return (
        <div>
            <Container style={{ marginTop: "30px" }}>
                <Row>
                    <Col style={{borderRight: '1px solid lightgrey'}}>
                        <h2>Create a TVmaze account</h2>
                        <TVMazeInput title='Username' getOnChangeInputText={inputChangeText} />
                        <TVMazeInput title='Email' />
                        <TVMazwInputSecure title='Password' />
                        <TVMazeInput title='Confirm Password' />
                        <div style={{ marginTop: "20px" }}>
                            <TVMazeButton title={'Signup'} tvMazeButtonHandler={filterHandler} />
                        </div>
                    </Col>
                    <Col>
                        <h2>Or Register with a Social Account</h2>
                        <TVMazeButton title= {'Google'} />
                        <h2>Never miss a show again!</h2>
                        <ul>
                            <li>Follow the shows you love!</li>
                            <li>Get detailed show/episode/cast information</li>
                            <li>Stay up to date on future show airdates.</li>
                            <li>Keep track of your watch list</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default RegistrationForm
