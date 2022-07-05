import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';



const Command = () => {


const [command,setCommand] = useState('')


useEffect(() => {
  axios.get(`http://127.0.0.1:8000/commande`)
  .then((res) => {
      setCommand(res.data.data);
  });
}, []);






  return (
    <div>

        
    </div>
  )
}

export default Command