import axios from 'axios';
import "./Home.css";
import React, {  useState } from 'react'
import Card from '../../components/Card/Card';
import Logo from "../../assests/koach.jpg"
import { Button } from '@mui/material';
import BeatLoader from "react-spinners/BeatLoader";

const Home = () => {

    const [data,setData]=useState([]);
    let [loading, setLoading] = useState(false);

    const getUsers=()=>{
      setLoading(true)
       axios.get("https://reqres.in/api/users?page=1")
       .then((res)=>{
        console.log(res.data.data);
        setData(res.data.data)
        setLoading(false)
       })
       
    };

   
  return (
    <div className='home'>
      <div className='mainHead'>
        <img src={Logo} alt='logo'/>
        <Button variant='outlined' onClick={getUsers}>Get Users</Button>
      </div>
      <div className={loading ? "loading" : "hide"}>
          <BeatLoader
            color={'black'}
            loading={loading}
            size={15}
          />
        </div>
       <div className={loading?"hide":"cardsSec"} >
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