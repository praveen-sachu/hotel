import React from 'react'
import './Home.css'

import room from '../../Assets/Images/room.webp'
import checkin from '../../Assets/Icons/checkin.svg'
import checkout from '../../Assets/Icons/checkout.svg'
import Header from '../../Components/Header/Header'
import Div from '../../Components/data/Div'
import Button from '../../Components/Button/Button'
const Home = () => {
  return (
    <>
    <div className="header">
  <Header/>
</div>
    <div className='container'>

        <div className='content'>
           <img src={room} alt="" className='room'/>
        </div>
        <div className='checking'>
            <div className='check'>
                <img src={checkin} alt="" className='icon'/>
                Checking in Today
                <div className='homedata'>
                  <div className='checkingdataalign'><Div data='Silva,Francisco'/></div>
                  
                  <div className='checkingdataalign'><Div data='202'/></div>
                  
                  <div className='checkingdataalign'><Button type='primary' label='Check In'/></div>
                </div>  
                  
            </div>    
            
            <div className='check'>
                <img src={checkout} alt="" className='icon'/>
                Checking out Today
                <div className='homedata'>
                  <div className='checkingdataalign'><Div data='Silva,Miguel'/></div>
                 
                  <div className='checkingdataalign'><Div data='104'/></div>
                  
                  <div className='checkingdataalign'><Button type='primary' label='Check Out'/></div>
                  
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home