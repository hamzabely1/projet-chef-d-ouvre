import React from 'react'
import promo from '../img/promo.png'
import Carousel from 'react-bootstrap/Carousel'

const Carousele = () => {
  return (
    <div>

<div className='container border border-succesy bg-succesy'>
      <Carousel>
        <Carousel.Item>
          <div className="row justify-content-around bg-danger">

    <div className="col-4">
     
 <p className='fs-1'>Abricots France</p>
      <div className='d-flex mt-5'>
     <img className='w-50 img-fluid mr-3 ml-20 ' src={promo}></img>
<div>
    <p className='fs-4  '>1,70 $</p>
<button className='btn btn-dark '>achet</button>
</div>
      </div>
    </div>
    <div className="col-4">
    <img
            className="d-block w-100  justify-content-end"
            src='https://jardinsdevartan.com/wp-content/uploads/2016/03/Abricot-Jardins-de-Vartan.jpg'
            alt="First slide"
          />
    </div>

         
          </div>
         
        </Carousel.Item>
        <Carousel.Item>
        <div className="row justify-content-around">
    <div className="col-4">
    <p className='fs-1'>Abricots France</p>
    <button className='btn btn-dark'>shop</button>  
      </div>
    <div className="col-4">
    <img
            className="d-block w-100  justify-content-end"
            src='https://jardinsdevartan.com/wp-content/uploads/2016/03/Abricot-Jardins-de-Vartan.jpg'
            alt="First slide"
          />
    </div>
</div>

          
        </Carousel.Item>
        <Carousel.Item>
        <div className="row justify-content-around">
    <div className="col-4">
    <p className='fs-1'>Abricots France</p>
    <button className='btn btn-dark'>shop</button>
    </div>
    <div className="col-4">
    <img
            className="d-block w-100 justify-content-end"
            src='https://jardinsdevartan.com/wp-content/uploads/2016/03/Abricot-Jardins-de-Vartan.jpg'
            alt="First slide"
          />
    </div>
</div>  
        </Carousel.Item>
      </Carousel>
</div>


    </div>
  )
}

export default Carousele