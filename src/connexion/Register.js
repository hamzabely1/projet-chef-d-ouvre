import React, { useEffect, useState } from 'react'
import axios from 'axios';
import swal from 'sweetalert'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import img_login from '../img/img_login.png'
 const Register = () => {



  const [nom, setNom] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')


  let navigation = useNavigate();



  function envoi() {

/*condition pour mes input ce ils ont vid ou pas*/

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
     console.log(res);
         
swal('warnig',res.data.message,'warning')

 
        } else {
          swal('success' ,res.data.message,'success')
          localStorage.setItem('token',res.data.token);
          localStorage.setItem('nom',res.data.username);



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
      <div className='container' style={flex}>
        <form style={form}>

          <h1>INSCRIPTION</h1>
          <div class=" mt-5">
            <label for="validationCustom01" class="form-label">Nom</label>
            <input name='nom' onChange={(e) => setNom(e.target.value)} type="text" class="form-control" id="validationCustom01" required />
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>

          <div class=" mt-2">
            <label for="validationCustom01" class="form-label">Email</label>
            <input name='email' onChange={(e) => setEmail(e.target.value)}  type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>

              <div class=" mt-2">
            <label for="validationCustom01" class="form-label">Cree un mot de passe </label>
            <input name='password' onChange={(e) => setPassword(e.target.value)} type="text" class="form-control" id="validationCustom01" required />
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>

          <Link to='/login'> <p className='tetx-info mt-5'>Vous êtes déjà inscrit? </p> </Link>
          <br></br>
          <button type='button'  onClick={envoi} className="buttons" >S'inscrire</button>


        </form>

<img className='w-75 img_login' src={img_login} ></img>
      </div>
    </div>
  )
}

export default Register