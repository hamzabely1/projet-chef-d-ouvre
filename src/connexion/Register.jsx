import React, { useEffect, useState } from 'react'
import axios from 'axios';
import swal from 'sweetalert'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import img_login from '../img/img_login.png'
import * as Cookie from '../connexion/Cookie';
import Heder from '../component/Heder';
 const Register = () => {

  let navigation = useNavigate();

/*mes constant */
  const [nom, setNom] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')





/*function de button*/

  function inscription() {

/*condition pour mes entrées si elles sont vides ou non*/

    if (nom == '') {
      swal('Warning', 'Remplie le champ de nom', 'warning')
  } else if (email === '') {
    swal('Warning', 'Remplie le champ de email', 'warning')
 } else if (password === '') {
      swal('Warning', 'Remplie le champ de password', 'warning')
   } else if(email != '' && password != '' && nom != '') {
      axios.post('http://127.0.0.1:8000/api/register', {
        name: nom,
        email: email,
        password: password
      }).then(res => {

        if (res.data.status == 200) {
swal('warnig',res.data.message,'warning')
        } else if(res.data.status == 401) {
          swal('warnig',res.data.error,'warning')
        }else{
    swal('success' ,res.data.message,'success')
    Cookie.SetCookie('token', res.data.token)
    Cookie.SetCookie('nom', res.data.nom)
    navigation('/')
          window.location.reload()
        }
      })
    }
  }



  /*mon css avec React*/

  const flex = {
    display: 'flex',
    justifyContent: 'center',
  };
  const form = {
    height: '300px',
    width: '300px',
    marginTop: "80px",
  };

  return (
    <div>
      <Heder/>
      <div className='container' style={flex}>
        <form style={form}>

          <h1>S'inscrire</h1>
          <div className=" mt-5">
            <label for="validationCustom01" className="form-label">Nom</label>
            <input name='nom' onChange={(e) => setNom(e.target.value)} type="text" className="form-control" id="validationCustom01" required />
          </div>
          <div className=" mt-2">
            <label for="validationCustom01" className="form-label">Email</label>
            <input name='email' onChange={(e) => setEmail(e.target.value)}  type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
              <div className=" mt-2">
            <label for="validationCustom01" className="form-label">Cree un mot de passe </label>
            <input name='password' onChange={(e) => setPassword(e.target.value)} type="text" className="form-control" id="validationCustom01" required />
          </div>

          <Link to='/login'> <p className='tetx-info mt-5'>Vous êtes déjà inscrit?</p> </Link>
          <br></br>
          <button type='button'  onClick={inscription} className="buttons" >confirm</button>


        </form>

<img className='w-75 img_login' src={img_login} ></img>
      </div>
    </div>
  )
}

export default Register