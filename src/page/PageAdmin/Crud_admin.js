import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const Home_admin =() => {

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
         
            <table className="table">
            
<td>id</td>
<td>type</td>
<td>nom</td>
<td>img</td>


<hr></hr>
                <tbody>
                    <hr></hr>
                   
                    {articles.map((article,index)=>(
                        <tr key={article.id}>
                            <td>{++index}</td>
<td>{article.type}</td>
                            <td>{article.nom}</td>
                            <td>{article.prix}</td>
                            <td>{article.description}</td>
                            <td>{article.stock}</td>
                           

                            <img src={`${process.env.REACT_APP_IMAGE}${article.image}`} className='w-25 '></img>
                          {article.stock == 1 ? <button className="btn btn-success w-50+
                          ">a disposizione</button> : <button className="btn btn-danger">indisponible</button>  }
                            <td>
                              
                                <Link className="btn btn" to={{ pathname: "/edit_admin/" + article.id }}>modifier</Link>&nbsp;
                                <button type="" className="btn btn-danger"
                                    onClick={()=>{delete_Articles(article.id)}}
                                    >Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}

export default Home_admin