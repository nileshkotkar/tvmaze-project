import React from 'react'

const TVMazwInputSecure = ({ title }) => {
    return (
        <div>
            <div style={{ display: 'flex', flexDirection: "column" }}>
                <label>{title}</label>
                <input type='password'></input>
            </div>
        </div>
    )
}

export default TVMazwInputSecure
