import React from 'react'
import './div.css'
const Div = (props) => {
  return (
    <>
    <div className={`div ${
        props.type==='headdata1'? 'headdata1': 'headdata'
        
    }`
    
}>{props.data}</div>
    
    </>
  )
}

export default Div