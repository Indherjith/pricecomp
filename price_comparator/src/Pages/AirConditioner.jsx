import React from 'react';
import { Products } from '../db';

const AirConditioner = () => {
  return (
    <div className='container'>
        {Products.map((item)=>{
            if(item.title == "LG Air Conditioner 1.5 Ton"){
                return(
                    <div key={item.id} style={{marginTop:"10px",padding:"10px", boxShadow:""}}>
                        <img src={item.logo} alt="" />
                        <img src={item.img} alt="" />
                        <h3>{item.title}</h3>
                        <p>Model : {item.model}</p>
                        <p><b>₹ {item.price}</b></p>
                        <p><b>Warranty : {item.warranty}</b></p>
                        <p>Control : {item.control}</p>
                    </div>
                )
            }
        })}
    </div>
  )
}

export default AirConditioner