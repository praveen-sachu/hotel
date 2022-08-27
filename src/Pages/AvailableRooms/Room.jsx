import React, { useEffect, useState } from 'react'

import Header from '../../Components/Header/Header'
import Button from '../../Components/Button/Button'
import Input from '../../Components/Input/Input'
import './room.css'
import Data from '../../Components/data/Data'
const Room = () => {
  const[item,setItem]=useState({roomno:"",adults:"",children:"",price:""})
  const[popup,setPopup]=useState(false);
  const[data,setData]=useState([])

  //....... Get data from user to Display ........//

  async function getData(){
    let result= await fetch("https://localhost:7034/rooms",
    {
    method:'GET',
    headers:{
      "content-type":'application/json',
    }
  } 
  )
    return await result.json();
  }

//--------------------useState----------------------//

  useEffect(()=>{
      const userData =async()=>{
      const result =await getData();
      setData(result);
  };
  userData();
},[]
);
  //........To send data to the server........//
  async function Signup(e){
    console.log("okey");
    e.preventDefault()

    try {
      let result= await fetch("https://localhost:7034/rooms",
      {
        method:'POST',
        body:JSON.stringify(item),
        headers:{
          "content-type":'application/json',
          "Accept":'application/json'
        }
        
      })
      result=await result.json();
      alert("Saved");
      setPopup(false);
      setItem({roomno:"",adults:"",children:"",price:""})
  console.log(result);   
  
    }
    
     catch  {
      // throw("error")
      alert("error")
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
          <div className='forheading'><b>Room Number</b></div>
          <div className='forheading'><b>Adults Capacity</b></div>
          <div className='forheading'><b>Children Capacity</b></div>
          <div className='forheading'><b>Price</b></div>
          <div className='forheading'><b>Edit</b></div>
        </div>
        <div className='newbookingdetailslist'>
        {data.map((value,index)=>
        (
          
        <Data a={value.roomno} b={value.adults} c={value.children} d={value.price} e='Delete'/>
        
        )
        )}
        
    </div>
    </div>
    {/* pop-up */}

    <div className={popup? 'container5':'none1'}>

      <form onSubmit={Signup}>
        <div className='roombox'>
            Room 101
            <div className='inputstyle'>
            <Input label='Room Number' type='number' value={item.roomno} onchange={(e)=>{ onChange(e.target.value,'roomno')}}/>
            <Input label='Adults Capacity' type='number' value={item.adults}onchange={(e)=>{onChange(e.target.value,'adults')}}/>
            <Input label='Children Capacity' type='number' value={item.children} onchange={(e)=>{onChange(e.target.value,'children')}}/>
            <Input label='Price' type='number' value={item.price} onchange={(e)=>{onChange(e.target.value,'price')}}/>

            <div className='buttontype'>
                <Button type='primary' label='Save'  />
                <div>or</div>
                <div className='cancel' onClick={()=>{setPopup(false)}}>Cancel</div>
            </div>
            </div>

            <Data data='Amenities'/>
        </div>   
        </form>
    </div>
    </>
  )
}

export default Room