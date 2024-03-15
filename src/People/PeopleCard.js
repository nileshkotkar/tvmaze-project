import React from 'react'
import { Card } from 'react-bootstrap'

const PeopleCard = ({ card }) => {
    return (
        <div>
                <Card className='card'>
                    <Card.Img variant='top' src={card.image?.original} alt='People' />
                    <Card.Body>
                        <Card.Title>{card.name}</Card.Title>
                    </Card.Body>
                </Card>
        </div>
    )
}

export default PeopleCard
