import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import '../Styles/ShowDetails.css';

const ShowDetails = () => {
    const location = useLocation()
    const cardData = location.state.card
    return (
        <div>
            <Container className='rootContainer'>
                <Row>
                    <Col xs={6} md={2}>
                    <Card className='card'>
                        <Card.Img src={cardData.image.original} />
                    </Card>
                    </Col>
                    <Col>
                     <Card.Body>
                        <Card.Title>{ cardData.name }</Card.Title>
                        <br></br>
                        <Card.Text dangerouslySetInnerHTML={{__html: cardData.summary}}></Card.Text>
                     </Card.Body>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ShowDetails
