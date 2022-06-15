import React, { useState } from 'react'
import Heder from '../component/Heder'

import axios from 'axios';
import { toBeChecked } from '@testing-library/jest-dom/dist/matchers';



const Admin = () => {



const [nom,setNom] = useState('');
const [prix,setPrix] = useState('');
const [description,setDesciption] = useState('');
const [type,setType] = useState('');
const [origines,setOrigines] = useState('');
const [image,setImage] = useState('');
const [note,setNote] = useState('');
const [check,setCheck] = useState('');


        




async function enregistrer (){ 

  if(check === true){
      console.log('hamza');
  }else{
    console.log('big')
  }

const formArticles = new FormData();
formArticles.append('nom',nom);
formArticles.append('prix',prix);
formArticles.append('description',description);
formArticles.append('type',type);
formArticles.append('origines',origines);
formArticles.append('image',image);
formArticles.append('note',note);


let result = await fetch('http://127.0.0.1:8000/api/add_articles',{
  method:'POST',
  body:formArticles
})}



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



  <div style={form}>
  <label>nom</label>
<input name='nom' onChange={(e)=>setNom(e.target.value)} className="form-control" type="text" placeholder="Default input" />
<label>prix</label>
<input name='prix' onChange={(e)=>setPrix(e.target.value)}  className="form-control" type="text" placeholder="Default input" aria-label="default input example"/>
<label>description</label>

<input name='description' onChange={(e)=>setDesciption(e.target.value)}  className="form-control" type="text" placeholder="Default input" aria-label="default input example"/>
<label>origins</label>

<input name='origines' onChange={(e)=>setOrigines(e.target.value)}  className="form-control" type="text" placeholder="Default input" aria-label="default input example"/>
<label>note</label>

<input name='note' onChange={(e)=>setNote(e.target.value)}  className="form-control" type="text" placeholder="Default input" aria-label="default input example"/>
<label>type</label>

<input name='type' onChange={(e)=>setType(e.target.value)} className="form-control" type="text" placeholder="Default input" aria-label="default input example"/>
<label>image</label>

<input name='image' onChange={(e)=> setImage(e.target.files[0])}  className="form-control" type="file" placeholder="Default input" aria-label="default input example"/>


<input class="form-check-input" type="checkbox" onChange={(e)=>setCheck(e.target.value)} value="" id="flexCheckDefault"></input>
<input type='submit' onClick={enregistrer}   className='btn btn-drak' ></input>
</div>








    </div>
  )
}

export default Admin