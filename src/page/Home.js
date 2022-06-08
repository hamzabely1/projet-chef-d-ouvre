import React from 'react'
import Heder from '../component/Heder'


import homecss from '../css/home.css'
import Footer from '../component/Footer'
import legumes from '../img/legumes.jpg'
import fruits from '../img/fruits.jpeg'
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
<div className='container-xxl'>
 
<br></br>
<Carousele/>
<br></br>






<h2 className='fs-2'>Categori</h2>
<br></br>


<div className='d-flex'>

<div className='phone_fruits'></div>
<div className='phone_legumes'></div>
</div>

<div className='d-flex'>


<div class="row">
    <div class="category col-3 m-3 ">
      <div className=''>
     <img className='fruits  img-fluid mr-2' src={fruits}></img>
     <img className='legumes  mt-1 umg-fluid ' src={legumes}></img>
     </div>
    </div>
    <div class="col">
      <Produits/>
    </div>
  </div>


  






</div>
<br></br>
<Pourquoi_nous/>
<br></br>
</div>

<Footer/>

    </div>


  )
}

export default Home