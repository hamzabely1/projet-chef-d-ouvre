import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import css from '../css/register.css'
const Register = () => {




  const [name,setName] = useState('')
  const [email,setEmail] = useState ('')
  const [password,setPassword] = useState('')

 


  









    const flex={
        display:'flex',
        justifyContent :'center'
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
<input name='name' onChange={(e)=>setName(e.target.value)}   className="form-control input-sm" type="text" placeholder="NOM" aria-label="Repository description" />
<br></br>
<label>Prénom</label>

<input  className="form-control input-sm" type="text" placeholder="Prénom" aria-label="Repository description" />

<br></br>
<label>Votre Email</label>

<input name='email' onChange={(e)=>setEmail(e.target.value)}     className="form-control input-sm" type="text" placeholder="Email" aria-label="Repository description" />
<br></br>
<label>Créé votre mots de passe</label>

<input name='password' onChange={(e)=>setPassword(e.target.value)}   className="form-control input-sm" type="text" placeholder="Mots de passe" aria-label="Repository description" />
<br></br>




<button   className="btn btn-dark" type="button">S'inscrire</button>

</form>



<img className='img-fluid w-100 img_fruit' src='https://blogunisalute.it/wp-content/uploads/2020/08/mangiare-troppa-frutta-fa-male.jpg'></img>



</div>











    </div>
  )
}

export default Register