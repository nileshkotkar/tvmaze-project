import React, { useState } from 'react'

const TVMazeInput = ({ title, getOnChangeInputText }) => {
  const [inputText, setinputText] = useState('')

  const onChangeText = (e) => {
      setinputText(e.target.value)
      e.preventDefault()
      getOnChangeInputText(inputText)
  }

  return (
    <div style={{display: 'flex', flexDirection: "column"}}>
       <label>{title}</label>
       <input value={inputText} onChange={(e) => onChangeText(e)}></input>
    </div>
  )
}

export default TVMazeInput
