import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import './button.css'
const Button = (props) => {
  return (<button  onSubmit={props.onSubmit} 
    className={`button ${
        props.type==='primary'? 'primary': 'secondary'
        
    }`
    
}
    onClick={props.onClick}
>
    <label>{props.label}</label>
    
</button>
    
  )
}

export default Button