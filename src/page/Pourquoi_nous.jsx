import React from 'react'
import taz from '../img/taz_fruits.jpg'



const Pourquoi_nous = () => {




  return (
    <div>

<p className='fs-2 mt-2 mb-2 border-bottom w-100  border-warning w-100 d-flex justify-content-center'>Pourquoi nous choisir</p>

<div className="">
  <img className='img-fluid ' src={taz} class="col-md-5 float-md-end mb-3 ms-md-3" alt="..."/>
<p className='fs-3 mt-10'>Taz fruits en marche</p>
  <p className='mt-5'>
    A paragraph of placeholder text. We're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.
  </p>

  <p>
    As you can see the paragraphs gracefully wrap around the floated image. Now imagine how this would look with some actual content in here, rather than just this boring placeholder text that goes on and on, but actually conveys no tangible information at. It simply takes up space and should not really be read.
  </p>

 
</div>
    </div>
  )
}

export default Pourquoi_nous