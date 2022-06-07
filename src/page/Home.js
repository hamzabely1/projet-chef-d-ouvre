import React from 'react'
import Heder from '../component/Heder'

import slider1 from '../img/slider1.png'

import homecss from '../css/home.css'
import pomme from '../img/pomme.png'
import brocolli from '../img/broccoli.png'
import all from '../img/all.png'
import Footer from '../component/Footer'
const Home = () => {



  return (
    <div>

<h1 className='fs-3 mt-2 mb-2'> Taz fruits🍒</h1>

<Heder/>


<div class="container-sm">

<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={slider1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <button className='btn btn-dark'>shop</button>

      </div>
    </div>
    <div class="carousel-item">
      <img src={slider1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <button className='btn btn-dark'>shop</button>

      </div>
    </div>
    <div class="carousel-item">
      <img src={slider1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      
<button className='btn btn-dark'>shop</button>

      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<div className=''>


</div>

<div className='d-flex justify-content-center'>

<div className='cerclefruit ml-2 align-center mt-3'>
<img className='mt-2' src={pomme}></img>
<p className='mt-3' >h</p>


</div>

<div>


<div className='cercleall ml-10 '>
<img className='w-100' src={all}></img>


</div>

</div>


<div>



<div className='cerclelegume ml-10 mt-3'>
<img className='w-50 mt-2 ml-3' src={brocolli}></img>
<h4 className='mt-4'>hamza</h4>

</div>

</div>





</div>









</div>








</div>

 
  )
}

export default Home