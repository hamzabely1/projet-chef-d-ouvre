import React, { useEffect } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Produits from './Produits';

import css from '../css/panier.css'

const Panier = () => {

  const [produits,setProduits] = useState([])
  let location = useLocation();



  useEffect(() => {
    const apiUrl = 'http://127.0.0.1:8000/api/show/panier';
    axios.get(apiUrl).then((resp) => {
      const all = resp.data;
      setProduits(all);
    });
  }, [produits]);


   
 

  


  return (
    <div>




<div className='d-flex justify-content-center'>

  <p className='fs-1 border-bottom border-warning w-50'>Panier</p>

</div>
  <div className='container'>
             <div className='row d-flex '>
{
    produits.map(article =>{
        return(
            <div  className='produit col-md-3 d-flex flex-column' state={{article:article}} to={`/articles/${article.id}`}>

               
            <img src={`${process.env.REACT_APP_IMAGE}${article.image}`} className='w-10 mt-1'></img>
               <p className='mt-1'>{article.name}</p>  
               <div className='d-flex mt-1 '>
<p>3.90</p>
</div>
 </div>
     )
    })
}

<div>
  montaun : 12.50 $
</div>
<button className='buttons'>payment</button>
</div>
</div>











    </div>
  )
}

export default Panier