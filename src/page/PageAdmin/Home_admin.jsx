import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Crud_admin from '../PageAdmin/Crud_admin'
import Create_admin from "./Create_admin";

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
         
         <nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">

<Create_admin/>

  </div>
  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
 <p>hamza</p>
 <Crud_admin/>


  </div>
  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">


  </div>
  <div class="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">



  </div>
</div>
         
        </div>

    )
}

export default Home_admin