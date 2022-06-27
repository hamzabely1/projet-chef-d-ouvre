import React, { useEffect } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Produits from './Produits';

import css from '../css/panier.css'
import Articles from './Articles';

const Panier = () => {

let navigation = useNavigate()

  const [article,setArticle] = useState([])
const [total,setTotal] = useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/total').then((resp) => {
      const all = resp.data;
      setTotal(all);
    });
  }, [total]);





  useEffect(() => {
    const apiUrl = 'http://127.0.0.1:8000/api/show/panier';
    axios.get(apiUrl).then((resp) => {
      const all = resp.data;
      setArticle(all);
    });
  }, [article]);


   
  const delete_Articles = (id) => {
    axios.delete('http://127.0.0.1:8000/api/delete/'+id).then(res=>{
   

    })

}

  


  return (
    <div>




<div className='d-flex justify-content-center'>

  <p className='fs-1 border-bottom border-warning w-50'>Panier</p>

</div>
  <div className='container'>
             <div className='row d-flex justify-center col-12'>
{
  article.filter(articless => 
    articless.id).map(article =>{
        return(
            <div  className='produit col-12 d-flex' state={{article:article}} to={`/articles/${article.id}`}>
            <img src={`${process.env.REACT_APP_IMAGE}${article.image}`} className='w-25 mt-1 mr-5'></img>

            <div className=''>
               <p className='mt-1'>{article.name}</p>  
               <div className='d-flex mt-1 '>
<p>{article.quantite}Kg</p>
</div>
</div>
<button     onClick={()=>{delete_Articles(article.id)}} className='btn btn-danger mt-2 ml-5'>supprime</button>


 </div>
     )
    })
}
</div>
</div><div className='col-12'>
  {
    total.map(map =>{
      return(
        <p>{map.prix }</p>
      )
    })
  }
</div>
<button className='buttons'>payment</button>
    </div>
  )
}

export default Panier