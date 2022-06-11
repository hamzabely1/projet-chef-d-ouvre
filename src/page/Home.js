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

<div className='d-flex'>


<div class="row">
    <div class="category col-3 mt-5 ">
      
      <div className=''>
        <a href='/fruits'>
     <img className='fruits rounded  img-fluid ' src={fruits}></img>
</a> 
     <img className='legumes rounded mt-2  umg-fluid ' src={legumes}></img>
     </div>
    </div>
    <div class="col collona">
      <Produits/>
    </div>
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