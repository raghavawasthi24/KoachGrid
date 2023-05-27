import React from 'react';
import "./Card.css"

const Card = (props) => {
  return (
    <div className='card'>
        <img src={props.avatar} alt='profile'/>
        <p style={{fontWeight:"bold",color:"blue"}}>{props.fname} {props.lname}</p>
        <p>{props.email}</p>
        
    </div>
  )
}

export default Card