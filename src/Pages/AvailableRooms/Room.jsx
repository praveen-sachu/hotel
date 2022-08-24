import React, { useState } from 'react'

import Header from '../../Components/Header/Header'
import Button from '../../Components/Button/Button'
import Input from '../../Components/Input/Input'
import './room.css'
import Div from '../../Components/data/Div'
const Room = () => {
  const[item,setItem]=useState({roomno:"",adults:"",children:"",price:""})
  const[popup,setPopup]=useState(false);

  async function Signup(e){
    console.log("okey");
    e.preventDefault()

    try {
      let result= await fetch("http://192.168.1.62:3000/rooms",
      {
        method:'POST',
        body:JSON.stringify(item),
        headers:{
          "content-type":'application/json',
          "Accept":'application/json'
        }
        
      })
      result=await result.json();
  console.log(result);   
  
    }
    
     catch  {
      throw("error")
      // alert("error")
    }
  }
  function onChange(value,key){
    setItem((prev)=>({...prev,[key]:value}))
  }
  return (
    
    <>
    <Header/>
    
    <div className='container4'>
      <div className='roomhead'>
          <div className='roomheading'>Rooms</div>
          <div className='createroom' onClick={()=>setPopup(true)}>CreateRoom</div>
      </div>
          
        <div className='row margintop'>
          <div><b>Room Number</b></div>
          <div><b>Adults Capacity</b></div>
          <div><b>Children Capacity</b></div>
          <div><b>Price</b></div>
        </div>
        <div className='row'>
          <div className='color'>101</div>
          <div>1</div>
          <div>0</div>
          <div>34</div>
        </div>
        <div className='row'>
          <div className='color'>102</div>
          <div>2</div>
          <div>0</div>
          <div>48</div>
        </div>
    </div>
    {/* pop-up */}

    <div className={popup? 'container5':'none1'}>

      <form onSubmit={Signup}>
        <div className='roombox'>
            Room 101
            <div className='inputstyle'>
            <Input label='Room Number' type='number' onchange={(e)=>{ onChange(e.target.value,'roomno')}}/>
            <Input label='Adults Capacity' type='number' onchange={(e)=>{onChange(e.target.value,'adults')}}/>
            <Input label='Children Capacity' type='number' onchange={(e)=>{onChange(e.target.value,'children')}}/>
            <Input label='Price' type='number' onchange={(e)=>{onChange(e.target.value,'price')}}/>

            <div className='buttontype'>
                <Button type='primary' label='Save'/>
                <div>or</div>
                <div className='cancel' onClick={()=>{setPopup(false)}}>Cancel</div>
            </div>
            </div>

            <Div data='Amenities'/>
        </div>   
        </form>
    </div>
    </>
  )
}

export default Room