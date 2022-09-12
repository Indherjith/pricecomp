import React from 'react'
import { NavLink } from 'react-router-dom';
import "../Pages/page.css";

const Side = () => {
  return (
    <div className='side'>
      <ul className='hide'>
            <li><NavLink style={{textDecoration:"none"}} to={"/fan"}>Fan</NavLink></li>
            <li><NavLink style={{textDecoration:"none"}} to={"/air_conditioner"}>Air Conditioner</NavLink></li>
            <li><NavLink style={{textDecoration:"none"}} to={"/mobile"}>Mobile</NavLink></li>
            <li><NavLink style={{textDecoration:"none"}} to={"/laptop"}>Laptop</NavLink></li>
            <li><NavLink style={{textDecoration:"none"}} to={"/"}>HOME</NavLink></li>
      </ul>
      <div className='hid'>
            <div><NavLink style={{textDecoration:"none"}} to={"/fan"}>Fan</NavLink></div>
            <div><NavLink style={{textDecoration:"none"}} to={"/air_conditioner"}>Air Conditioner</NavLink></div>
            <div><NavLink style={{textDecoration:"none"}} to={"/mobile"}>Mobile</NavLink></div>
            <div><NavLink style={{textDecoration:"none"}} to={"/laptop"}>Laptop</NavLink></div>
            <div><NavLink style={{textDecoration:"none"}} to={"/"}>HOME</NavLink></div>
      </div>
    </div>
  )
}

export default Side