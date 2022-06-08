import React from 'react'
import Heder from '../component/Heder'


import homecss from '../css/home.css'
import pomme from '../img/pomme.png'
import Footer from '../component/Footer'
import legumes from '../img/legumes.jpg'
import fruits from '../img/fruits.jpeg'
import broccolli from '../img/broccoli.png'
import Carousele from '../component/Carousele'
import Produits from './Produits'
import Pourquoi_nous from './Pourquoi_nous'
const orange = {
  color:'#FF920D'
}
const Home = () => {


  return (
    <div>

      <h1 className='fs-3 mt-2 mb-2 fw-bold  '> Taz fruits🍒</h1>


      <Heder/>


<div className='container-lg'>
<br></br>
<Carousele/>
<br></br>






<h2 className='fs-2'>Categori</h2>
<br></br>
<div className='container-sm'>
<div className='d-flex justify-content-around'>
<div class="card text-white w-50 ">
  <img src={fruits} class=" rounded-2 w-100 h-75 " alt="..."/>
  <div class="card-img-overlay">
    <h5  class="card-title fs-2 fw-bold">Fruits</h5>
  </div>
</div>
<div className="card text-white w-50 ml-10">
  <img src={legumes} class="rounded-2 w-100 h-75" alt="..."/>
  <div class="card-img-overlay">
    <h5 class="card-title fw-bold fs-2">Légumes</h5>
    <p class="card-text"></p>
  </div>
</div>
</div>
</div>
<br></br>
<h1 className='fs-2'>Notre Produits</h1>
<Produits/>
<Pourquoi_nous/>
</div>

<Footer/>

    </div>


  )
}

export default Home