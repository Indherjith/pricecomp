import React from 'react';
import { Products } from '../db';

const Laptop = () => {
  return (
    <div className='container'>
        {Products.map((item)=>{
            if(item.title == "HP Pavilion x360 11th Gen Intel Core i3"){
                return(
                    <div key={item.id} style={{marginTop:"10px",padding:"10px", boxShadow:""}}>
                        <img src={item.logo} alt="" />
                        <img src={item.img} alt="" />
                        <h3>{item.title}</h3>
                        <p>variant : {item.variant}</p>
                        <p><b>₹ {item.price}</b></p>
                    </div>
                )
            }
        })}
    </div>
  )
}

export default Laptop