import React from 'react'
import Footer from '../component/Footer'
import taz from '../img/taz.png'
const Plus_sur_taz = () => {



const clock = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  >
<path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
</svg>

  return (
    <div>

<div className='container-sm'>

<p className='fs-1 fw-bolder'> Taz fruits</p>


<img src={taz} class="img-fluid " alt="..."></img>



<div className='mt-5'>
<div className="clearfix ">
  <img src="https://cdn-s-www.leprogres.fr/images/30D956B9-6E3C-46A9-94FC-A9B423374F28/NW_detail/title-1618680388.jpg" class="col-md-6 float-md-end mb-3 ms-md-3" alt="..."/>

  <p className='mt-20'>
    A paragraph of placeholder text. We're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.
  </p>

  <p className=''>
    A paragraph of placeholder text. We're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.
  </p>
 
</div>


</div>


<p className='fs-2 border-bottom border-warning w-25'>Horaires sur marche</p>

<div className='d-flex justify-center'>

    

<ul className="list-group list-group-flush col-12">
  <li className="list-group-item w-100"><div className='d-flex justify-center'> <p className='mr-2'>🕐Lundi </p> <p className='text-danger'>Fermé </p> </div>  </li>
  <li className="list-group-item w-100">🕐Mardi               7:00 14:00 </li>
  <li className="list-group-item w-100"><div className='d-flex justify-center'> <p mr-2>🕐Mercrodi </p> <p className='text-danger ml-2'>Fermé </p> </div></li>
  <li className="list-group-item w-100"><div className='d-flex justify-center'> <p mr-2>🕐Jeudi </p> <p className='text-danger ml-2'>Fermé </p> </div> </li>
  <li className="list-group-item w-100"><div className='d-flex justify-center'> <p mr-2>🕐Vendredi </p> <p className='ml-2'>7:40 14:10 </p> </div></li>
  <li className="list-group-item w-100"><div className='d-flex justify-center'> <p mr-2>🕐Samedi </p> <p className='ml-2'>7:40 14:10 </p> </div></li>  
  <li className="list-group-item w-100">🕐Dimanche    7:00 14:00</li>
</ul>
</div>
</div>
<Footer/>






















    </div>
  )
}

export default Plus_sur_taz