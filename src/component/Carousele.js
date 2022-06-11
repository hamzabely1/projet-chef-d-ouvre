import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import slider_abrico from '../img/slider_abricot.png'
import slider_mirtil from '../img/slider_mirtil.png'
import slider_tomate from '../img/slider_tomate.png'
const Carousele = () => {
  return (
    <div>

<div className='background_orange rounded  border-warning  p-3  bg-opacity-10 border-start-0 border-end-0  '>
      <Carousel>
    
        <Carousel.Item>
        <div className="row justify-content-around">
    <div className="col-4">
    <p className='fs-1 fw-semibold'>Abrico</p>
     <p className='fw-semibold mb-2 mt-2'>7.96 € / KG</p>
    <button className='btn btn-dark mt-2'>shop</button>
    </div>
   
    <div className="col-2  w-25 img-fluid">
    <img
            className="d-block w-100 img-fluid justify-content-end"
            src={slider_abrico}
            alt="First slide"
          />
    </div>
</div> 
         
          </Carousel.Item>
        <Carousel.Item>
        <div className="row justify-content-around">
    <div className="col-4">
    <p className='fs-1 fw-semibold'>Tomate</p>
     <p className='fw-semibold mb-2 mt-2'>7.96 € / KG</p>
    <button className='btn btn-dark mt-2'>shop</button>
    </div>
   
    <div className="col-2 w-25 img-fluid ">
    <img
            className=" w-100 img-fluid justify-content-end"
            src={slider_tomate}
            alt="First slide"
          />
    </div>
</div> 
          
        </Carousel.Item>
        <Carousel.Item>
        <div className="row justify-content-around">
    <div className="col-4">
    <p className='fs-1 fw-semibold'>Mirtil</p>
     <p className='fw-semibold mb-2 mt-2'>7.96 € / KG</p>
    <button className='btn btn-dark mt-2'>shop</button>
    </div>
   
    <div className="col-2  w-25 img-fluid">
    <img
            className="d-block w-100 img-fluid justify-content-end"
            src={slider_mirtil}
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