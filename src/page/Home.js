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
  color: '#FF920D'
}
const Home = () => {

let page_home = ''

const role = localStorage.getItem('role')

if (role == undefined) {
  page_home =(
<div>
<div className='container-sm'>
        <br></br>
        <Carousele />
        <br></br>
        <div>
          <div>
            <div className='d-flex justify-content-center'>
              <div >
                <div class="conatiner d-flex justify-content-center  ">
                  <Link to='/fruits' className='noHover'><div className='card_category'>Fruits🍎</div>          </Link>
                  <Link className='noHover' to='/legumes'>
                    <div className='card_category'>Légumes🍋</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="col collona">
            <div className='d-flex justify-center'>
              <p className='fs-1 border-bottom border-warning w-50'>En evidents</p>
            </div>
            <Produits />
          </div>
        </div>
        <br></br>
        <Pourquoi_nous />
        <br></br>
        <Equipe/>
      </div>

      <Footer/>
</div>
)





} else  {
  

page_home =(
  <div>
    <p>hamza</p>

  </div>

)




}


  return (
    <div>






{page_home}




      

    </div>


  )
}

export default Home