import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import * as Cookie from '../connexion/Cookie'



const Command = () => {


const [data,setData] = useState('')
let user_id = Cookie.getCookie('user_id')


useEffect(() => {
  axios.get(`http://127.0.0.1:8000/commande/${user_id}`)
  .then((res) => {
      setData(res.data.data);
  });
}, []);






  return (
    <div>







        
    </div>
  )
}

export default Command