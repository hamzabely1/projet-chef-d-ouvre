import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Produits from './Produits'
const Articles = () => {



  let location = useLocation();
  const role = localStorage.getItem('role')
  const { article } = location.state





  var button_achet = ''

  if (role == undefined) {
    button_achet = (
<il>
<button  class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
Ajouter au panier
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-danger">
       Pour Ajoute au panier connect-vous
      </div>
      <div class="modal-footer">
        <button  class="btn btn-light" data-bs-dismiss="modal">Close</button>
        <Link to='/register'>
                <button   class="btn btn-dark" data-bs-dismiss="modal">S'inscrire</button>
        </Link>
      </div>
    </div>
  </div>
</div>

</il>

    )

  } else if(role == 'user') {

    button_achet = (

<button  className="btn btn-dark" >Ajouter au panier</button>

    )
  }








  return (
    
    <div>
      <hr></hr>
      <div className="container-sm ">
       
          <div className="container-fliud ">
            <div className=" mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={`${process.env.REACT_APP_IMAGE}${article.image}`} className="img-fluid rounded-start w-100" alt="..." />


                </div>
                <div className="col-md-8">
                  <div className="card-body">


                    <ul className="list-group list-group-flush">
                      <li className="list-group-item fs-2">{article.nom}</li>
                      <li className="list-group-item">{article.prix}€/ KG</li>
                      <li className="list-group-item">Quantite:
                        <input type='number' min='0' max='10' className='borber border-dark'></input>kg



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
<Produits/>
    </div>
        </div>
    </div>
  )
}

export default Articles