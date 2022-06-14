import React from 'react'


import homecss from '../css/home.css'
import Footer from '../component/Footer'
import legumes from '../img/legumes.jpg'
import fruits from '../img/fruits.jpeg'
import Carousele from '../component/Carousele'
import Produits from './Produits'
import Pourquoi_nous from './Pourquoi_nous'
import Equipe from './Equipe'

const orange = {
  color:'#FF920D'
}
const Home = () => {


  return (
    <div>
    
<div className='container-sm'>
 
<br></br>
<Carousele/>
<br></br>






<br></br>



<div className='d-flex justify-content-around'>
<a href='/fruits'>
 <div className='phone_fruits'></div> 
</a>
<p className='mr-1 ml-1'  ></p>
<a href='/legumes'>
<div className='phone_legumes'></div>
</a>
</div>

<div>

<div>

<div className='d-flex justify-content-center'>


<div class="row">
  <div class="col-sm-6">
    <div class="card w-100">
      <div class="card-body">
        <h5 class="card-title">Fruits🍎</h5>

        <div className='d-flex'>
                  <p class="card-text">Le fruit favorise la reproduction de l'espèce, en protégeant la ou les graines et en favorisant leur dissémination.</p>
                  <img className='w-25 img-fluid' src='https://www.orticaweb.it/wp-content/uploads/2018/04/fragole.jpg'></img>

        </div>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Legumes🍋</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>


</div>
</div>


    <div class="col collona">
      <Produits/>
    </div>


</div>

<br></br>
<Pourquoi_nous/>
<br></br>
<Equipe/>
</div>

<Footer/>

    </div>


  )
}

export default Home