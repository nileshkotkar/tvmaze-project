import React from 'react'
import '../Styles/ShowFilter.css';
import TVMazeButton from '../components/TVMazeButton';

const ShowFilter = () => {
    return (
        <div>
            <div>
                <label>
                    Show Status
                    <br></br>
                    <select>
                        <option value></option>
                        <option value="1">Running</option>
                        <option value="2">Ended</option>
                        <option value="3">To Be Determind</option>
                        <option value="4">In Development</option>
                    </select>
                </label>
            </div>

            <div>
                <label>
                    Show Types
                    <br></br>
                    <select>
                        <option value></option>
                        <option value="1">Scripted</option>
                        <option value="2">Animation</option>
                        <option value="3">Reality</option>
                        <option value="4">Talk Show</option>
                    </select>
                </label>
            </div>

            <div>
                <label>
                    Genre
                    <br></br>
                    <select>
                        <option value></option>
                        <option value="1">Action</option>
                        <option value="2">Adult</option>
                        <option value="3">Children</option>
                        <option value="4">Comedy</option>
                    </select>
                </label>
            </div>

            <div>
                <label>
                    Langauge
                    <br></br>
                    <select>
                        <option value></option>
                        <option value="1">English</option>
                        <option value="2">Hindi</option>
                        <option value="3">Spanish</option>
                        <option value="4">French</option>
                    </select>
                </label>
            </div>

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
                    </select>
                </label>
            </div>

            <div>
                <label>
                    Rating
                    <br></br>
                    <select>
                        <option value></option>
                        <option value="1">1+</option>
                        <option value="2">2+</option>
                        <option value="3">3+</option>
                        <option value="4">4+</option>
                    </select>
                </label>
            </div>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <TVMazeButton title={'Filter'}></TVMazeButton>
            </div>
        </div>
    )
}

export default ShowFilter
