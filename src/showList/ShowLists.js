import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchShowsList } from '../Redux/CreateSlice';
import ShowCard from './ShowCard';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import ShowFilter from './ShowFilter';

const ShowLists = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.showsData.list);
    const isLoading = useSelector((state) => state.showsData.isLoading)

    useEffect(() => {
        dispatch(fetchShowsList());
    }, [dispatch]);

    if (isLoading) {
        return (
            <div style={{textAlign: 'center'}}>
                <Spinner animation="border" variant="success"></Spinner>
            </div>
        )
    }

    const renderedList = data?.map((element) => {
        return <ShowCard key={element.id} card={element} />
    })

    return (
        <div>
            <Container style={{ marginTop: '30px' }}>
                <h1>Shows</h1>
                <Row md='auto'>
                    <Col md={10} style={{ display: 'flex', columnGap: "15px", flexWrap: 'wrap', rowGap: '15px' }}>
                        {renderedList}
                    </Col>
                    <Col>
                        <ShowFilter />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ShowLists;
