import React from 'react'
import '../Styles/ShowFilter.css';
import TVMazeButton from '../components/TVMazeButton';

const PeopleFilter = () => {
    return (
        <div>
            <div>
                <label>
                    Country
                    <br></br>
                    <select>
                        <option value></option>
                        <option value="1">India</option>
                        <option value="2">United States</option>
                        <option value="3">Germany</option>
                        <option value="4">Japan</option>
                        <option value="5">China</option>
                    </select>
                </label>
            </div>

            <div>
                <label>
                    Gender
                    <br></br>
                    <select>
                        <option value></option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                        <option value="3">Other</option>
                    </select>
                </label>
            </div>

            <div>
                <label>
                    Genre
                    <br></br>
                    <select>
                        <option value="0">Most Popular</option>
                        <option value="1">Least Popular</option>
                        <option value="2">A to Z</option>
                        <option value="3">Z to A</option>
                    </select>
                </label>
            </div>
            <div style={{textAlign: 'center', marginTop: '20px'}}>
            <TVMazeButton title={'Filter'}></TVMazeButton>
            </div>
        </div>
    )
}

export default PeopleFilter
