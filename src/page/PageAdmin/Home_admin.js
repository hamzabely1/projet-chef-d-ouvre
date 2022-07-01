import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const Home_admin =() => {

    const [articles, setArticles] = useState([]);

    useEffect(()=>{
        fetchAll_artciles();
    },[]);

    const fetchAll_artciles = () => {
        axios.get('http://127.0.0.1:8000/api/artciles').then(res=>{
            setArticles(res.data);
        })
    }


    const delete_Articles = (id) => {
        axios.delete('http://127.0.0.1:8000/api/admin'+id).then(res=>{
            fetchAll_artciles();
        })
    }



    return (
        <div>
            <h2>Users listing ...</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Sno.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {articles.map((artcile,index)=>(
                        <tr key={artcile.id}>
                            <td>{++index}</td>
                            <td>{artcile.nom}</td>
                            <td>{artcile.email}</td>
                            <td>
                                <Link className="btn btn-info" to={{ pathname: "/edit/" + artcile.id }}>Edit</Link>&nbsp;
                                <Link className="btn btn-primary" to={{ pathname: "/view/" + artcile.id }}>View</Link>&nbsp;
                                <button type="button" className="btn btn-danger"
                                    onClick={()=>{delete_Articles(artcile.id)}}
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