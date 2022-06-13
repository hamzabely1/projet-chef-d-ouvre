import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
const Articles = () => {


  const  [articles,setArticles]= useState([])


useEffect(() => {
  const id = this.props.match.params.id
  const apiUrl = `http://127.0.0.1:8000/api/articles/${id}`;
  axios.get(apiUrl).then((resp) => {
    const all = resp.data;
    setArticles(all);
  });
}, [setArticles]);
 



  return (
    <div>



{
articles.map((map)=>{
return(
    <p>{map.nom}</p>
)
})


}


<p>produts</p>










    </div>
  )
}

export default Articles