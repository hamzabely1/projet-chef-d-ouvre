import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Crud_admin from '../PageAdmin/Crud_admin'
import Create_admin from "./Create_admin";
import HederAdmin from "./HederAdmin";

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
         <HederAdmin/>

         <nav>
  <div className="nav nav-tabs" id="nav-tab" role="tablist">
    <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Articles</button>
    <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Ajouter un Article</button>
    <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Command</button>
  </div>
</nav>
<div className="tab-content" id="nav-tabContent">
  <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">


 <Crud_admin/>
  </div>
  <div classNAme="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
<Create_admin/>



  </div>
  <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">


  </div>
  <div className="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">



  </div>
</div>
         
        </div>

    )
}

export default Home_admin