import React from 'react'

import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'
const HederAdmin = () => {

  let nom = localStorage.getItem('nom')
  const navigation = useNavigate();


  const log_out = () => {
    swal({
      title: "êtes-vous sûr de vouloir quitter?",
      text: "",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        localStorage.removeItem("nom")
        localStorage.removeItem("token")
        window.location.reload()
        navigation('/')
      }
    });
  }







  return (
    <div>




      <div>
        <nav className="navbar navbar-expand-lg text-dark">
          <div className="container-fluid">
            <a className="noHover  fs-3" href="/admin">Taz fruits🍒</a>



          </div>
          <div className="dropdown col-2">
            <button className=" dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">

            {nom}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a onClick={log_out} className="dropdown-item text text-danger" >Se déconnecter</a></li>
            </ul>
    </div>
      </nav >
   </div >
    </div >
  )
}

export default HederAdmin