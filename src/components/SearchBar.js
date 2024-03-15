import React from 'react';
import '../Styles/SearchBar.css';
import { Row, Col } from 'react-bootstrap';

const SearchBar = () => {
    return (
        <div>
            <Row md={2} style={{marginTop: '5px'}}>
                <Col>
                    <input className='searchInput' placeholder='Search Shows and People'></input>
                </Col>
                <Col style={{marginLeft:"-24px"}}>
                    <button className='searchButton'></button>
                </Col>
            </Row>
        </div>
    )
}

export default SearchBar
