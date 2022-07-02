import axios from 'axios';
import React from 'react'

import swal from 'sweetalert'
import * as Cookie from '../connexion/Cookie'

const Heder = () => {

  /*ma function pour supprime le token et le nom de utilisateur */
  const log_out = () => {
    swal({
      title: "êtes-vous sûr de vouloir quitter?",
      text: "",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
  Cookie.deleteCookie("nom")
          Cookie.deleteCookie("token")
 window.location.reload()  
      } 
    });
    

  



axios.delete('http://127.0.0.1:8000/api/delete_all').then(res=>{
  console.log(res);
})
  }


  let nom = Cookie.getCookie('nom')
  let token = Cookie.getCookie('token')

 

  let auth_button = ''
  
  if (token === undefined) {
    auth_button = (
      <div>
        
      <nav className="navbar navbar-expand-lg text-dark">
        <div className="container-fluid">
                      <a className="noHover  fs-3"  href="/home">Taz fruits🍒</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className=" collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/home">Accueil</a>
              </li>

              <li className=" nav-item dropdown">
              <a className="nav-link active border-bottom border-warning" href="/plus" aria-current="page">
                  Plus sur Taz
                </a>
         
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Catégories
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/fruits">Fruits🍎</a></li>
                  <hr></hr>
                  <li><a className="dropdown-item" href="/legumes">Legumes🍋</a></li>
                </ul>
              </li>
            </ul>
            <a className='text-dark' href='/register  '>S'inscrire</a>
<a className='text-dark ml-2 ' href='/login'>Connexion</a>

            <form className="d-flex" role="search ">
             

            </form>
          </div>
        </div>
      </nav>
    </div>



    )

  } else if(token != undefined  )  {

    auth_button = (

      <div>
      <nav className="navbar navbar-expand-lg text-dark">
        <div className="container-fluid">
                      <a className="noHover  fs-3"  href="/home">Taz fruits🍒</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className=" collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/home">Accueil</a>
              </li>

  
                <a className="nav-link active border-bottom border-warning" href="/plus" aria-current="page">
                  Plus sur Taz
                </a>
         
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Catégories
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/fruits">Fruits🍎</a></li>
                  <hr></hr>
                  <li><a className="dropdown-item" href="/legumes">Legumes🍋</a></li>
                </ul>
              </li>
            </ul>
            <div className="dropdown col-2">
  <button className=" dropdown-toggle"  id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">

 {nom}
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">

  <li><a className="dropdown-item text " href="/panier">Panier 🛒</a></li>
    <li><a onClick={log_out} className="dropdown-item text text-danger" >Se déconnecter</a></li>
  </ul>
</div>
          </div>
        </div>
      </nav>
   </div>
)
  }






  return (
   <div>
{auth_button}
   </div>



  )
}

export default Heder