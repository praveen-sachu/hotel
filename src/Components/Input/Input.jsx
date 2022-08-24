import React from 'react'

const Input = ({label,type,onchange,value}) => {
  return (
    <div>
        <label>{label}</label>
        <br/>
        <input type={type} value={value} required onChange={onchange}/>
    </div>
  )
}

export default Input