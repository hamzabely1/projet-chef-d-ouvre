import React from 'react'

import { Link } from 'react-router-dom'

const Heder = () => {

    const orange = {
      color:'#FF920D'
    }
  return (
  <div>
<nav class="navbar navbar-expand-lg bg-dark text-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="home">Taz fruits🍒</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
  
        <li class="nav-item dropdown">
          <a class="nav-link active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            A propo
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active">Category</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
       
<a  href='/login' className="mr-2">Login</a>
       

      
        <a href='/register'  class="" >Register</a>
      </form>
    </div>
  </div>
</nav>
  </div>





  )
}

export default Heder