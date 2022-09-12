import React from 'react';
import { Products } from '../db';

const Mobile = () => {
  return (
    <div className='container'>
        {Products.map((item)=>{
            if(item.title == "OnePlus Nord CE 2 5G"){
                return(
                    <div key={item.id} style={{marginTop:"10px",padding:"10px", boxShadow:""}}>
                        <img src={item.logo} alt="" />
                        <img src={item.img} alt="" />
                        <h3>{item.title}</h3>
                        <p>variant : {item.variant}</p>
                        <p><b>₹ {item.price}</b></p>
                        <p><b>OS : {item.os}</b></p>
                        <p>Technology : {item.tech}</p>
                    </div>
                )
            }
        })}
    </div>
  )
}

export default Mobile