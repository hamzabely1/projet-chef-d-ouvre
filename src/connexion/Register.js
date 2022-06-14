import React, { useEffect, useState } from 'react'
import axios from 'axios';
import css from '../css/register.css'
const Register = () => {



const [nom,setNom]= useState('')
const [email,setEmail]= useState('')
const [password,setPassword]= useState('')

  




async function envoi (){
 
  if(nom ==''){
alert('choisissez un nom')
  }else if(email == ''){
alert('choisissez un email')
  }else if(password == ""){
    alert('choisissez un password')

  }else if(nom != '' && email != '' && password != ''){
    await axios.post('http://127.0.0.1:8000/api/add_user',{
      name: nom,
      email: email,
      password: password
    }).then(res =>console.log(res))
 }}

/*mon css avec React*/

    const flex={
        display:'flex',
        justifyContent :'center',
         };
         const form={
           height:'300px',
           width:'300px',
           marginTop:"130px",
            };
     
  return (
    <div>
        

  
        <div className='container' style={flex}>
<form style={form}>

<h1>INSCRIPTION</h1>


<label>Nom</label>
<input  name='nom'   onChange={(e)=>setNom(e.target.value)}  className="form-control input-sm" type="text" placeholder="NOM" aria-label="Repository description" />
<br></br>
<label>Prénom</label>

<input  className="form-control input-sm" type="text" placeholder="Prénom" aria-label="Repository description" />

<br></br>
<label>Votre Email</label>

<input name='email'  onChange={(e)=>setEmail(e.target.value)}   className="form-control input-sm" type="text" placeholder="Email" aria-label="Repository description" />
<br></br>
<label>Créé votre mots de passe</label>

<input  name='password'   onChange={(e)=>setPassword(e.target.value)}   className="form-control input-sm" type="text" placeholder="Mots de passe" aria-label="Repository description" />
<br></br>

<button  onClick={envoi}  className="btn btn-dark" type="button">S'inscrire</button>
</form>

</div>

    </div>
  )
}

export default Register