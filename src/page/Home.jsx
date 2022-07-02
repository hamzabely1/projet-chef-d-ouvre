import React from 'react'

import { Link } from 'react-router-dom'
import homecss from '../css/home.css'
import Footer from '../component/Footer'
import Carousele from '../component/Carousele'
import Produits from './Produits'
import Pourquoi_nous from './Pourquoi_nous'
import Equipe from './Equipe'
import Create_admin from './PageAdmin/Create_admin'
import Home_admin from './PageAdmin/Crud_admin'




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
                <div className="conatiner d-flex justify-content-center  ">
                  <Link to='/fruits' className='noHover'><div className='card_category'>Fruits🍎</div>          </Link>
                  <Link className='noHover' to='/legumes'>
                    <div className='card_category'>Légumes🍋</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col collona">
            <div className='d-flex justify-center'>
              <p className='fs-1 border-bottom border-warning w-50'>En évidence</p>
            </div>
            <Produits />
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





} else  {
  

page_home =(
  <div>
    <nav>
  <div className="nav nav-tabs" id="nav-tab" role="tablist">
    <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Mes articles</button>
    <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Ajoute un article</button>
    <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Commandes effectuées</button>
  </div>
</nav>
<div className="tab-content" id="nav-tabContent">
  <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">




<Home_admin/>
  </div>
  <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
<Create_admin/>

  </div>
  <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">...</div>
  <div className="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">...</div>
</div>

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