import React from 'react'

import { Link } from 'react-router-dom'

const Heder = () => {

 
  return (
  <div>

<nav className="navbar navbar-expand-lg text-info">
  <div className="container-fluid">
    <a className="orange navbar-brand fs-3"  href="/home">Taz fruits🍒</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div  className=" collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
  
        <li className=" nav-item dropdown">
          <a className="nav-link active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Equipe
          </a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Catégories
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="fruits">Fruits🍎</a></li>
            <hr></hr>
            <li><a class="dropdown-item" href="legumes">Legumes🍋</a></li>
            
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search">
       
<a  href='/login' className="mr-2 text-black">Login</a>
       

      
        <a href='/register'  className="text-black" >Register</a>
      </form>
    </div>
  </div>
</nav>
  </div>





  )
}

export default Heder