import React, { useEffect, useState } from 'react'
import axios from 'axios';
import swal from 'sweetalert'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { type } from '@testing-library/user-event/dist/type';

const Register = () => {



  const [nom, setNom] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')


let navigation = useNavigate();



   function envoi() {

    if(nom == '') {
      swal('Warning', 'Remplie le champ de nom', 'warning')
    } else if(email ==  '') {
      swal('Warning', 'Remplie le champ de email', 'warning')

     } else if (password == '') {
        swal('Warning', 'Remplie le champ de la mot de Passe', 'warning')
   } else if (email != '' && password != '' && nom != '') {
  

       axios.post('http://127.0.0.1:8000/api/register', {
        name: nom,
        email: email,
        password: password
      }).then(res =>{
        if (res.status == 200) {
          console.log(res);
  setError(res.data.message_pass)
  
      } else {
    
    
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
          <label className='mt-10'>Nom</label>
          <input name='nom' onChange={(e) => setNom(e.target.value)} className="form-control input-sm " type="text" placeholder="Nom" aria-label="Repository description" />
          <br></br>
        

          <label>Votre Email</label>
          <input  type="email" name='email' onChange={(e) => setEmail(e.target.value)} className="form-control input-sm" placeholder="Email" aria-label="Repository description" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" class="form-text">Nous ne partagerons jamais votre e-mail avec quelqu'un d'autre.</div>

          <br></br>
          <label>Créé votre mots de passe</label>
          <input name='password' onChange={(e) => setPassword(e.target.value)} className="form-control input-sm" type="text" placeholder="Mots de passe" aria-label="Repository description" />
{error}

          <br></br>

                    <Link  to ='/login'> <p className='tetx-info mt-5'>Vous êtes déjà inscrit? </p> </Link>
<br></br>
          <button type='button' onClick={envoi} className="buttons" >S'inscrire</button>
          
          
                  </form>

   
      </div>
    </div>
  )
}

export default Register