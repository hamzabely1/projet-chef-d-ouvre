import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';


import css from '../css/register.css'
const Register = () => {



  const[errors,setErrors] = useState('');

  const [user, setUser] = useState({
    name: "",
    email: "",
    password:""
  });

  const {name, email,password} = user;
  const onInputChange = e => {
    setUser({...user, [e.target.name]: e.target.value });
  };




  
const envoi =() =>{

 
  if(name == ''){
alert('choisissez un nom')
  }else if(email == ''){
alert('choisissez un email')
  }else if(password == ""){
    alert('choisissez un password')

  }else if(name != '' && email != '' && password != ''){

 
 axios.post("http://127.0.0.1:8000/api/add_user",user);
 setErrors('Registration Successful')

 setUser({name:"",email:"",password:""})
 }

  }
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
<input value={name} name='name'  onChange={e => onInputChange(e)}   className="form-control input-sm" type="text" placeholder="NOM" aria-label="Repository description" />
<br></br>
<label>Prénom</label>

<input  className="form-control input-sm" type="text" placeholder="Prénom" aria-label="Repository description" />

<br></br>
<label>Votre Email</label>

<input value={email} name='email'  onChange={e => onInputChange(e)}   className="form-control input-sm" type="text" placeholder="Email" aria-label="Repository description" />
<br></br>
<label>Créé votre mots de passe</label>

<input value={password} name='password'  onChange={e => onInputChange(e)}   className="form-control input-sm" type="text" placeholder="Mots de passe" aria-label="Repository description" />
<br></br>




<button  onClick={envoi}  className="btn btn-dark" type="button">S'inscrire</button>

</form>






</div>











    </div>
  )
}

export default Register