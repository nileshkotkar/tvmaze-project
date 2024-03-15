import React from 'react'
import { Card } from 'react-bootstrap';
import '../Styles/ShowCard.css';
import { Link } from 'react-router-dom';

const ShowCard = ({ card }) => {
    return (
        <div>
            <Link className='linkCard' to={'/showsDetails'} state={{card: card}}>
            <Card className='card'>
                <Card.Img variant='top' src={card.image.original} />
                <Card.Body>
                    <Card.Title>{card.name}</Card.Title>
                </Card.Body>
            </Card>
            </Link>
        </div>
    )
}

export default ShowCard
