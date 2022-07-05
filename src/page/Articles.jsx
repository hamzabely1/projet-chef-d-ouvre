import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Produits from './Produits'
import swal from 'sweetalert'
import Similaire from './Similaire'
import Header from '../component/Header'



const Articles = () => {
let location = useLocation();
const { article } = location.state

const [nom,setNom] = useState(article.nom)
const [image,setImage] = useState(article.image)
const [prix,setPrix] =useState(article.prix)
const [quantite,setQuantite] =useState('')


let token = localStorage.getItem('token')

 const pass_au_panier = ()=>{
 if (quantite == 0) {
swal('Ajouter la quantité')
 } else {
  axios.post('http://127.0.0.1:8000/api/add/panier',{
name:nom,
image:image,
prix:prix,
quantite:quantite,
  }).then(res => {
    

if (res.data.message === 'error') {
  
  swal('succes','le produit a été ajouté avec succès','success')


} else {
  swal('le produit a déjà été ajouté au panier')
}

  })

 }
}

/*condition pour le token = if le token et undefined il peut pas achete else il est connect avec le token  il peut ajoute au panier*/

  var button_achet = ''
  if (token == undefined) {
    button_achet = (
<il>
<button  className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
Ajouter au panier
</button>

<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body text-danger">
       Pour Ajoute au panier connect-vous
      </div>
      <div className="modal-footer">
        <button  className="btn btn-light" data-bs-dismiss="modal">Close</button>
        <Link to='/register'>
                <button   className="btn btn-dark" data-bs-dismiss="modal">S'inscrire</button>
        </Link>
      </div>
    </div>
  </div>
</div>
</il>
    )
  } else if(token !== undefined) {
    button_achet = (
<button className='btn btn-dark' onClick={pass_au_panier} >Ajouter au panier</button>
    )
  }

  return (
    
    <div>
      <Header/>
      <hr></hr>
      <div className="container-sm "> 
          <div className="container-fliud ">
            <div className=" mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img name='image' src={`${process.env.REACT_APP_IMAGE}${article.image}`} className="img-fluid rounded-start w-100" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item fs-2" name='nom' value={nom}  >{article.nom}</li>
                      <li className="list-group-item" name='prix' >{article.prix}€/ KG</li>
                      <li className="list-group-item">Quantite:
                        <input name='quantite' type='number' min='0' max='10' onChange={(e)=>setQuantite(e.target.value)} className='borber border-black border rounded'></input>kg
                      </li>
                      <li className="list-group-item"><p>type: {article.type}</p></li>
                    </ul>
                    <li className="list-group-item"><p>origins: {article.origines}</p></li>
{button_achet}                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       Description
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        {article.description}
      </div>
    </div>
  </div>
  <p className='fs-1 border-bottom border-warning'>En plus</p>
<Similaire/>
    </div>
        </div>
    </div>
  )
}

export default Articles