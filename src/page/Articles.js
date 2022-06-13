import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
const Articles = () => {

let location = useLocation();

const {article} = location.state
 



  return (


    <div>

<p>{article.id}</p>
<p>{article.nom}</p>




    </div>
  )
}

export default Articles