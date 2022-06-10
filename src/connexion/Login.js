import React from 'react'

const Login = () => {
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

<div>



<div style={flex}>


<form style={form}>

<h1>LOGIN</h1>


<br></br>
<label>Votre Email</label>

<input   name="email" className="form-control input-sm" type="text" placeholder="Email" aria-label="Repository description" />
<br></br>
<label>mots de passe</label>
<input   name="password"  className="form-control input-sm" type="text" placeholder="Mots de passe" aria-label="Repository description" />
<br></br>


<button  className="btn btn-dark" type="button">login</button>

</form>

 </div>
   </div>









    </div>
  )
}

export default Login