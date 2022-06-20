import React from 'react'

import { Link } from 'react-router-dom'
import axios from 'axios'
import { createBrowserHistory } from 'history'
import swal from 'sweetalert'

const Heder = () => {

  const usersss = localStorage.getItem('username');
  const role = localStorage.getItem('role');
  const token = localStorage.getItem('token');

  let history = createBrowserHistory();

  const log_out = () => {

 localStorage.removeItem("username")
    localStorage.removeItem("token")
    localStorage.removeItem("role")
swal('success','logout','success')
  
    history.push('/home');
    window.location.reload()
  }
 

  var auth_button = ''

  if (usersss == undefined) {
    auth_button = (
<il>

  <a className='text-dark' href='register  '>S'inscrire</a>
<a className='text-dark ml-2 ' href='login'>Login</a>

</il>

    )

  } else {

    auth_button = (
<div class="dropdown col-2">
  <button class=" dropdown-toggle"  id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
   {usersss}
   {role}
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">

  <li><a class="dropdown-item text " href="/panier">Panier 🛒</a></li>
    <li><a onClick={log_out} class="dropdown-item text text-danger" >Se déconnecter</a></li>
  </ul>

  
</div>


    )
  }






  return (
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
                <a className="nav-link active" aria-current="page" href="/home">Home</a>
              </li>

              <li className=" nav-item dropdown">
                <a className="nav-link " href="#equipe" aria-expanded="page">
                  Equipe
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
           {auth_button}

            <form className="d-flex" role="search ">
             

            </form>
          </div>
        </div>
      </nav>
    </div>





  )
}

export default Heder