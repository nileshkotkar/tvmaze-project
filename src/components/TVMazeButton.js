import React from 'react';
import '../Styles/TVMazeButton.css';

const TVMazeButton = ({ title, tvMazeButtonHandler}) => {

    const tvMazeButtonClick = () => {
        tvMazeButtonHandler()
    }

  return (
    <div>
        <button className='button' onClick={tvMazeButtonClick}>{title}</button>
    </div>
  )
}

export default TVMazeButton  
