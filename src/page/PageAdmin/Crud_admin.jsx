import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import css from '../../css/home.css'

const Crud_admin =() => {

    const [articles, setArticles] = useState([]);

    useEffect(()=>{
        fetchAll_artciles();
    },[]);

    const fetchAll_artciles = () => {
        axios.get('http://127.0.0.1:8000/api/admin').then(res=>{
            setArticles(res.data);
        })
    }


    const delete_Articles = (id) => {
        axios.delete('http://127.0.0.1:8000/api/admin/'+id).then(res=>{
            fetchAll_artciles();
        })
    }

  


    return (
        <div>



                    
<div className='container'>
<div className='row d-flex justify-center'>
                    {articles.map(article=>(
                  
                            <div className="cards_admin col-md-3 d-flex flex-column">  
                           
<div className="w-100">
                            <img className="" src={`${process.env.REACT_APP_IMAGE}${article.image}`}></img>
</div>
<p>nom:{article.nom}</p>
<p>prix:{article.prix}</p>

<p>type:{article.type}</p>

<p>origins:{article.origines}</p>


                          {article.stock == 1 ? <button className="mt-1 btn btn-success
                          ">a disposizione</button> : <button className=" mt-1 btn btn-warning">indisponible</button>}
                          
<div className="mt-3 ">

                                <Link className="btn btn-dark" to={{ pathname: "/edit_admin/" + article.id }}>modifier</Link>
                                <button type="" className="btn btn-danger ml-2"
                                    onClick={()=>{delete_Articles(article.id)}}
                                    >Supprimé</button>
                         </div>
                            </div>
                        
                    ))}
           </div>
           </div>
           </div>

    )
}

export default Crud_admin
