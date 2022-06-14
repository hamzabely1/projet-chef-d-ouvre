import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Produits from './Produits'
const Articles = () => {

  let location = useLocation();

  const { article } = location.state




  return (
    
    <div>
      <hr></hr>
      <div class="container-sm ">
       
          <div class="container-fliud ">
            <div class=" mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={`${process.env.REACT_APP_IMAGE}${article.image}`} class="img-fluid rounded-start w-100" alt="..." />


                </div>
                <div class="col-md-8">
                  <div class="card-body">


                    <ul class="list-group list-group-flush">
                      <li class="list-group-item fs-2">{article.nom}</li>
                      <li class="list-group-item">{article.prix}€/ KG</li>
                      <li class="list-group-item">Quantite:
                        <input type='number' min='0' max='10' className='borber border-dark'></input>kg



                      </li>
                      <li class="list-group-item"><p>type: {article.type}</p></li>
                    </ul>

                    <li class="list-group-item"><p>origins: {article.origines}</p></li>

                    <button className='btn btn-dark mt-2'>Ajoute au panier</button>
                  </div>
                </div>
              </div>
            </div>




          </div>


          <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       Description
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
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