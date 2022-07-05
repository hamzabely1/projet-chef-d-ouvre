import React from 'react'
import equipe1 from '../img/equipe1.png'
import equipe2 from '../img/equipe2.png'
import equipe3 from '../img/equipe3.png'

const Equipe = () => {

  return (
    <div id='equipe'>
      <p className='fs-2 mt-2 mb-2 border-bottom  border-warning w-100 d-flex justify-content-center'>Equipe</p>
      <br></br>
      <div className="container" >
        <div className="row">
          <div className="col">
            <div className='container'>
              <div className='row d-flex justify-center'>
                <div className=' cards_equipe col-md-3 d-flex flex-column'>
                  <img src={equipe1} className='rounded-r-full rounded-l-full     w-100 mt-1'></img>
                  <p className='mt-1'>Hamza</p>
                  <div className='d-flex mt-1 '>
                    <p>agriculture du désert, petit agriculteur récoltant du blé </p>
                  </div>
                  <p className='mt-1'></p>
                </div>
              </div>
            </div>

          </div>
          <div className="col">
            <div className='container'>
              <div className='row d-flex justify-center'>
                <div className=' cards_equipe col-md-3 d-flex flex-column'>
                  <img src={equipe3} className='rounded-r-full rounded-l-full     w-100 mt-1'></img>
                  <p className='mt-1'>Eduard</p>
                  <div className='d-flex mt-1 '>
                    <p>vendeur en chef au marché plus chauffeur de camion</p>
                  </div>
                  <p className='mt-1'></p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className='container'>
              <div className='row d-flex justify-center'>
                <div className=' cards_equipe col-md-3 d-flex flex-column'>
                  <img src={equipe2} className='rounded-r-full rounded-l-full     w-100 mt-1'></img>
                  <p className='mt-1'>Miche</p>
                  <div className='d-flex mt-1 '>
                    <p>fournisseur de salades et tomates toute l'année</p>
                  </div>
                  <p className='mt-1'></p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Equipe