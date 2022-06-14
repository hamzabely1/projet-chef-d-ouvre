import React from 'react'

import { Link } from 'react-router-dom'
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





<div>

<div>

<div className='d-flex justify-content-center'>


<div >
<div class="conatiner d-flex justify-content-center  ">
  <Link to='/fruits'><div className='card_category'>Fruits🍎</div>          </Link>

<div className='card_category'>Légumes🍋</div>


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