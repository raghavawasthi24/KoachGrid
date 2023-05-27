import axios from 'axios';
import "./Home.css";
import React, { useEffect, useState } from 'react'
import Card from '../../components/Card/Card';

const Home = () => {

    const [data,setData]=useState([]);
    useEffect(()=>{
       axios.get("https://reqres.in/api/users?page=1")
       .then((res)=>{
        console.log(res.data.data);
        setData(res.data.data)
       })
       
    },[])

   
  return (
    <div className='home'>
       <div className="cardsSec">
         {
          data.map((item,key)=>{
              return(<Card key={key} email={item.email} avatar={item.avatar} fname={item.first_name} lname={item.last_name}/>)
          })
         }
       </div>
    </div>
  )
}

export default Home