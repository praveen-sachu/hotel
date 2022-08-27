import React, { useState,useEffect } from 'react'
import Header from '../../Components/Header/Header'
// import Input from '../../Components/Input/Input'
import './bookings.css'
import Button from '../../Components/Button/Button'
import Data from '../../Components/data/Data'
import { useNavigate } from 'react-router-dom'
const Bookings = () => {
  const[data,setData]=useState([])
  const navigate=useNavigate();

  async function getData(){
    let result= await fetch("https://localhost:7034/newbookings",
    {
    method:'GET',
    headers:{
      "content-type":'application/json',
    }
  } 
  )
    return await result.json();
  }
  useEffect(()=>{
    const userData =async()=>{
    const result =await getData();
    setData(result);
  };
  userData();
  },[]
  );

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
        
        {data.map((value,index)=>
        (
          
        <Data a={value.lastname} b={value.firstname} c={""} d={value.checkin} e={value.checkout} f={""}/>
        
        )
        )}
        
        
    </div>
    </div>
    </>
  )
}

export default Bookings