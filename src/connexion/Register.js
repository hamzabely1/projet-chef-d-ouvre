import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchregister } from '../app/RegisterSlice';
import { adduser } from '../app/RegisterSlice';

const Register = () => {

  let dispatch = useDispatch()



  



  useEffect=(()=>{

    dispatch(fetchregister())
  },[])










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
        

  
        <div style={flex}>
<form style={form}>

<h1>INSCRIPTION</h1>


<label>Nom</label>
<input name='name'  onChange={(e)=>set}  className="form-control input-sm" type="text" placeholder="NOM" aria-label="Repository description" />
<br></br>
<label>Prénom</label>

<input  className="form-control input-sm" type="text" placeholder="Prénom" aria-label="Repository description" />

<br></br>
<label>Votre Email</label>

<input name='email'   className="form-control input-sm" type="text" placeholder="Email" aria-label="Repository description" />
<br></br>
<label>Créé votre mots de passe</label>

<input name='password'   className="form-control input-sm" type="text" placeholder="Mots de passe" aria-label="Repository description" />
<br></br>




<button  className="btn btn-dark" type="button">S'inscrire</button>

</form>




</div>











    </div>
  )
}

export default Register