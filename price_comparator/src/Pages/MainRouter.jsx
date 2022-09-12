import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Side from '../components/Side';
import AirConditioner from './AirConditioner';
import Fan from './Fan';
import Homepage from './Homepage';
import Laptop from './Laptop';
import Mobile from './Mobile';
import "./page.css"

const MainRouter = () => {
  return (
    <div>
        <Navbar/>
        <div  className='root'>
            <Side/>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/fan" element={<Fan />} />
                <Route path="/air_conditioner" element={<AirConditioner />} />
                <Route path="/mobile" element={<Mobile />} />
                <Route path="/laptop" element={<Laptop />} />
            </Routes>
        </div>
    </div>
  )
}

export default MainRouter