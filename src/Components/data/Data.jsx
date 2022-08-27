import React from 'react'
import './div.css'
const Data = ({a,b,c,d,e,f}) => {
  return (
    <>
    <div className='bookeddata' >
        
          <div className='common5 headdata1'>{a}</div>
          <div className='common5 headdata'>{b}</div>
          <div className='common5 headdata'>{c}</div>
          <div className='common5 headdata'>{d}</div>
          <div className='common5 headdata1'>{e}</div>
          <div className='common5 headdata1'>{f}</div>
        </div>
    
    </>
  )
}

export default Data