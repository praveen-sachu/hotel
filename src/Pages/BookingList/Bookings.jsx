import React from 'react'
import Header from '../../Components/Header/Header'
// import Input from '../../Components/Input/Input'
import './bookings.css'
import Button from '../../Components/Button/Button'
import Div from '../../Components/data/Div'
import { useNavigate } from 'react-router-dom'
const Bookings = () => {
  const navigate=useNavigate();
  return (
    <>
    <Header/>
    <div className='container3'>
      
      <div className='head'>
      <div className='bookings'>Bookings</div>
      <div className='newbooking' onClick={()=>{navigate('/newbooking')}}>New Booking</div>
      </div>
      <div className='search'>
          <div>
          <input type="text" placeholder='(Type Guest Name)' className='input2'></input>
          </div>
          <div>
          <select className='select'>
            <option>-Any Status-</option>
          </select>
          </div>
          <Button type='primary' label='Search' />
      </div>

      <div>
    
        <div className='row margintop'>
          <div className='headdata'><b>Guest Last Name</b></div>
          <div className='headdata'><b>Guest First Name</b></div>
          <div className='headdata'><b>Room Number</b></div>
          <div className='headdata'><b>Check In Date</b></div>
          <div className='headdata'><b>Check Out date</b></div>
          <div className='headdata'><b>State</b></div>
        </div>
        <div className='row'>
          <Div  data='Goncalves' type='headdata1'/>
          <Div  data='Sofia'/>
          <Div  data='101'/>
          <Div  data='23 Jan 2020'/>
          <Div  data='23 Jan 2020'/>
          <Div  data='CheckedIn'/>
        </div>
        <div className='row'>
        <Div data='Noronha' type='headdata1'/>
          <Div data='Beatriz'/>
          <Div data='301'/>
          <Div data='23 Jan 2020'/>
          <Div data='23 Jan 2020'/>
          <Div data='CheckedOut'/>
        </div>
    </div>
    </div>
    </>
  )
}

export default Bookings