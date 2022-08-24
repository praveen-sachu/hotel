import React from 'react'
import Input from '../../Components/Input/Input'
import './Newbooking.css'
import { useNavigate} from 'react-router-dom'
import Header from '../../Components/Header/Header'
import Button from '../../Components/Button/Button'
import { useState } from 'react'

const Newbooking = () => {
  const navigate=useNavigate();
  const[click,setClick]=useState(false);
  return (
    
    <>
    
    <Header/>
    <div className='container2'>
        <div className=''>New Booking</div>
        <div className='contents'>
            <Input label="Guest First Name" type="text"/>
            
            <Input label="Guest Last Name" type="text"/>
            
            <Input label="Checked In Date" type="date"/>
            
            <Input label="Checked Out Date" type="date"/>
            
            <Input label="Number of Adults" type="number"/>
            
            <Input label="Number of Children" type="number"/>
           
            <div className='input'>Rooms</div>

            <div className='room1'></div>
            
            
            <div className='bottom'>
                <Button type='primary' label='Get Available Room' onClick={()=>setClick(true)}></Button>
                <Button type='secondary' label='Book Room'></Button>
            <div onClick={()=>navigate(-1)} className='back'>Back</div>
                
            </div>  
            <div className={click? 'booking':'none'}>
                      <Button type='secondary' label='Check-In'/>
                      <Button type='secondary' label='Check-Out'/>
                      <Button type='secondary' label='Cancel'/>

                </div>
            
        </div>
    </div>
    </>
  )
}

export default Newbooking