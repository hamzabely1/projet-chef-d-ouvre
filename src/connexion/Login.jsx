import React, { useState } from 'react'
import axios from 'axios'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'
import img_login from '../img/img_login.png'
import Heder from '../component/Heder'

const Login = () => {


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const navigation = useNavigate();

  function function_login() {

    if (email == '') {
      swal('Warning', 'Remplie le champ de email', 'warning')
    } else if (password === '') {
      swal('Warning', 'Remplie le champ de password', 'warning')
    } else if (email != '' && password != '') {
        axios.post('http://127.0.0.1:8000/api/login', {
          email: email,
          password: password

  }).then(res => {
            if (res.data.status === 200) {
              localStorage.setItem('token', res.data.token, 30)
              localStorage.setItem('nom', res.data.nom)
              localStorage.setItem('user_id', res.data.id)

              swal('Success', res.data.message, 'success')
              navigation('/admin')
            window.location.reload()
            }

            else if (res.data.status === 401) {
              swal('Warning', res.data.message, 'warning')
            }
          })
      

    }


  }


  const flex = {
    display: 'flex',
    justifyContent: 'center'
  };
  const form = {
    height: '300px',
    width: '300px',
    marginTop: "130px",
  };
  return (
    
      <div>
        <Heder/>
        <div style={flex} className='container'>
          <form style={form}>
            <h1>Connexion</h1>
            <br></br>
          
          <label>Votre Email</label>
            <input name="email" onChange={(e) => setEmail(e.target.value)} className="form-control input-sm" type="email" placeholder="Email" aria-label="Repository description" />
            <br></br>
            <label>mots de passe</label>
            <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} className="form-control input-sm" placeholder="Mots de passe" aria-label="Repository description" />
            <br></br>
          <button onClick={function_login} className="buttons" type="button">confirm</button>
          </form>
      
                            <img className='w-75 img_login ' src={img_login} ></img>

        </div>

      </div>


  )
}

export default Login