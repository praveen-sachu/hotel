import React from 'react'
import Input from '../../Components/Input/Input'
import './Newbooking.css'
import { useNavigate} from 'react-router-dom'
import Header from '../../Components/Header/Header'
import Button from '../../Components/Button/Button'
import { useState } from 'react'

const Newbooking = () => {
  const[item,setItem]=useState({firstname:"",lastname:"",checkin:"",checkout:"",adults:"",noofchildren:""})
  const navigate=useNavigate();
  const[click,setClick]=useState(false);


  async function Signup(e){
    e.preventDefault()

    let result= await fetch("https://localhost:7034/newbookings",
    {
      method:'POST',
      body:JSON.stringify(item),
      headers:{
        "content-type":'application/json',
          "Accept":'application/json'
      }
    }
    )
    result=await result.json();
      setItem({firstname:"",lastname:"",checkin:"",checkout:"",adults:"",noofchildren:""})
      console.log(result);   
  
  }
  function onChange(value,key){
    setItem((prev)=>({...prev,[key]:value}))
  }
  return (
    
    <>
    
    <Header/>
    <div className='container2' >
      
        <div className=''>New Booking</div>
        <div className='contents'>
        <form action="" onSubmit={Signup} className='contents'>
            <Input label="Guest First Name" type="text" value={item.firstname} onchange={(e)=>{onChange(e.target.value,'firstname')}}/>
            
            <Input label="Guest Last Name" type="text" value={item.lastname} onchange={(e)=>{onChange(e.target.value,'lastname')}}/>
            
            <Input label="Checked In Date" type="date" value={item.checkin} onchange={(e)=>{onChange(e.target.value,'checkin')}}/>
            
            <Input label="Checked Out Date" type="date" value={item.checkout} onchange={(e)=>{onChange(e.target.value,'checkout')}}/>
            
            <Input label="Number of Adults" type="number" value={item.adults} onchange={(e)=>{onChange(e.target.value,'adults')}}/>
            
            <Input label="Number of Children" type="number" value={item.noofchildren} onchange={(e)=>{onChange(e.target.value,'noofchildren')}}/>
           
            <div className='input'>Rooms</div>

            <div className='room1'></div>
            
            
            <div className='bottom'>
                <Button type='primary' label='Get Available Room' onClick={()=>setClick(true)}></Button>
                <Button type='secondary' label='Book Room'></Button>
            <div onClick={()=>navigate(-1)} className='back'>Back</div>
                
            </div>  </form>
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