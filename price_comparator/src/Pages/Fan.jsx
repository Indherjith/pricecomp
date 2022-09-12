import React from 'react';
import {Products} from "../db";
import "./page.css"

const Fan = () => {
    console.log(Products);
  return (
    <div className='container'>
        {Products.map((item)=>{
            if(item.title == "Crompton Fans"){
                return(
                    <div key={item.id} style={{marginTop:"10px",padding:"10px", boxShadow:""}}>
                        <img src={item.logo} alt="" />
                        <img src={item.img} alt="" />
                        <h3>{item.title}</h3>
                        <p><b>₹ {item.price}</b></p>
                        <p>Speed : {item.rpm}</p>
                        <p><b>Warranty : {item.warranty}</b></p>
                        <p>Control : {item.control}</p>
                    </div>
                )
            }
        })}
    </div>
  )
}

export default Fan