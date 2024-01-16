import React from 'react'

function InputNameBox({handleUserName}) {
  return (
    <div>
        <input type='text' onChange={handleUserName}/>
    </div>
  )
}

export default InputNameBox