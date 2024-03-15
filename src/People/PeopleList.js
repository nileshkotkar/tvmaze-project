import React, { useEffect } from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPeopleList } from '../Redux/PeopleSlice'
import PeopleCard from './PeopleCard'
import PeopleFilter from './PeopleFilter'

const PeopleList = () => {
  const dispatch = useDispatch()
  const peoplesData = useSelector((state) => state.peopleData.list)
  const isLoading = useSelector((state) => state.peopleData.isLoading)


  useEffect(() => {
        dispatch(fetchPeopleList());
  }, [dispatch])

  if (isLoading) {
    return (
        <div style={{textAlign: 'center'}}>
            <Spinner animation="border" variant="success"></Spinner>
        </div>
    )
}

  const renderedList = peoplesData?.map((element) => {
    return <PeopleCard key={element.id} card={element} />
  })

  return (
    <div>
       <Container style={{ marginTop: '30px' }}>
                <h1>People</h1>
                <Row md='auto'>
                    <Col md={10} style={{ display: 'flex', columnGap: "15px", flexWrap: 'wrap', rowGap: '15px' }}>
                        {renderedList}
                    </Col>
                    <Col>
                        <PeopleFilter />
                    </Col>
                </Row>
            </Container>
    </div>
  )
}

export default PeopleList
