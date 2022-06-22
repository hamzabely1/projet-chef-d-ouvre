import React, { useState } from 'react'
import Heder from '../../component/Heder'

import axios from 'axios';
import { toBeChecked } from '@testing-library/jest-dom/dist/matchers';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';


const Create_admin = () => {



const [nom,setNom] = useState('');
const [prix,setPrix] = useState('');
const [description,setDesciption] = useState('');
const [type,setType] = useState('');
const [origines,setOrigines] = useState('');
const [image,setImage] = useState('');

let navigation = useNavigate();



 function enregistrer (){ 

  
const formArticles = new FormData();
formArticles.append('nom',nom);
formArticles.append('prix',prix);
formArticles.append('description',description);
formArticles.append('type',type);
formArticles.append('origines',origines);
formArticles.append('image',image);



if (nom === '') {
  swal('Warning','Remplie le champ de nom de article','warning')
}else if(prix ===''){
  swal('Warning','Remplie le champ de prix de articles','warning')

}else if(description ===''){
  swal('Warning','Remplie le champ de la description','warning')

}else if(type ===''){
  swal('Warning','Remplie le champ de type','warning')

}else if(prix ===''){
  swal('Warning','Remplie le champ de prix','warning')

}else if(origines ===''){
  swal('Warning','Remplie le champ de origines','warning')
}else if(image ===''){
  swal('Warning','Remplie le champ de iamge','warning')
}
else if(nom != '' && prix != '' && description != '' && prix != '' && origines != '' && image != '' && type != ''){
 fetch('http://127.0.0.1:8000/api/add_articles',{
  method:'POST',
  body:formArticles
})
navigation('/home')
 }

}

const flex={
  display:'flex',
  justifyContent :'center'
   };
   const form={
     height:'300px',
     width:'300px',
      };


  return (
    <div style={flex}>



  <div style={form} >
<p className='mt-1 mb-1'>Ajouter un artcile</p>

    <div className='col card p-4'>
  <label>Nom</label>
<input name='nom' onChange={(e)=>setNom(e.target.value)} className="form-control" type="text" placeholder="Nom" />
<label className='mt-2'>Prix</label>
<input name='prix' onChange={(e)=>setPrix(e.target.value)}  className="form-control" type="text" placeholder="Prix" aria-label="default input example"/>
<label  className='mt-2'>Description</label>

<input name='description' onChange={(e)=>setDesciption(e.target.value)}  className="form-control" type="text" placeholder="Description" aria-label="default input example"/>
<label  className='mt-2'>Origines</label>

<input name='origines' onChange={(e)=>setOrigines(e.target.value)}  className="form-control" type="text" placeholder="Origins" aria-label="default input example"/>

<label  className='mt-2'>type</label>



<select class="form-select" name='type'  onChange={(e)=>setType(e.target.value)} aria-label="Default select example">
  <option selected>choisissez la catégorie</option>
  <option value="fruits">fruits</option>
  <option value="legumes">legumes</option>
</select>


<label  className='mt-2'>Image</label>

<input name='image' onChange={(e)=> setImage(e.target.files[0])}  className="form-control" type="file" placeholder="Default input" aria-label="default input example"/>

<div >
<input type='submit' value='envoyer'  onClick={enregistrer}   className='buttons mt-5'></input>
</div>
</div>








    </div>
    </div>
  )
}

export default Create_admin