import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Room from './AvailableRooms/Room';
import Bookings from './BookingList/Bookings';
import Home from './Home/Home';
import Newbooking from './Rooms/Newbooking';
const index = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
            
                <Route path='/' element={<Home/>}/>
                
                <Route path='/newbooking' element={<Newbooking/>}/>
                
                <Route path='/bookings' element={<Bookings/>}/>
                <Route path='/rooms' element={<Room/>}/>
                
                
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default index