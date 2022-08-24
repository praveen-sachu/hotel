import React from 'react'
import './Header.css'
import { Link, useNavigate, } from 'react-router-dom'
import logo from '../../Assets/Icons/logo.svg'
import user from '../../Assets/Icons/user.svg'
import logout from '../../Assets/Icons/logout.svg'
import { useState } from 'react'
const Header = () => {
        const navigate=useNavigate();
        const[click,setClick]=useState(false);
  return (
    <div className='container1'>
        <header>
        <div className='links'><img src={logo} alt=''/></div>
        <div className='links'>Bookings</div>
        <div className='links'><Link to={'/'} className='text'>Homepage</Link></div>
        <div className='links' onClick={()=>{navigate('/rooms')}}>Rooms</div>

        <div className='links' onClick={()=>{
         
          setClick((prev) => !prev)}}>
              Booking</div>  
              {click && 
              <div className='list'>
                <div><Link to={'/newbooking'} className='text'>Newbookings</Link> </div>
                <div><Link to={'/bookings'} className='text'>Bookings</Link></div>
              </div>}
             
        <div className='links right'><img src={user} alt='' className='admin'/>
            Administrator
        <div className='links logout'><img src={logout} alt=''/></div>
        </div>
        </header></div>
  )
}

export default Header