import React from 'react'
import './Home.css'

import room from '../../Assets/Images/room.webp'
import checkin from '../../Assets/Icons/checkin.svg'
import checkout from '../../Assets/Icons/checkout.svg'
import Header from '../../Components/Header/Header'
import Data from '../../Components/data/Data'
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
                  <div className='checkingdataalign'></div>
                  
                  <div className='checkingdataalign'></div>
                  
                  <div className='checkingdataalign'></div>
                </div>  
                  
            </div>    
            
            <div className='check'>
                <img src={checkout} alt="" className='icon'/>
                Checking out Today
                <div className='homedata'>
                  <div className='checkingdataalign'></div>
                 
                  <div className='checkingdataalign'></div>
                  
                  <div className='checkingdataalign'></div>
                  
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home