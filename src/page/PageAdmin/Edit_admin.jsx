import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const  Edit_admin =(props)=> {
    const navigate = useNavigate();
    const [inputs,setInputs] = useState({});
    const {id} = useParams();






    
    useEffect(()=>{
        fetchUser()
    },[]);

    const fetchUser= () =>{
        axios.get('http://127.0.0.1:8000/api/admin/'+id+'/edit').then((res)=>{
            setInputs({
                nom:res.data.nom,
                type:res.data.type,
                image:res.data.image,
                prix:res.data.prix,
                description:res.data.description,
                origines:res.data.origines,
                stock:res.data.stock

            });
        });
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]:value}))
    }

    const submitForm = () =>{

        axios.put('http://127.0.0.1:8000/api/admin/'+id,inputs).then((res)=>{
            navigate('/');
          console.log(inputs);
        })
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
            <div style={form}>
                <a></a>
            <h2 className="mb-4">Edit Articles</h2>
            <div className="row">
                <div className="col">
                    <div className="card p-4">
                        <label>Nom de produits</label>
                        <input type="text" name="nom" className="form-control mb-2"
                                defaultValue={inputs.nom || ''}
                                onChange={handleChange} />
                        <label>Prix</label>
                        <input type="text" name="prix" className="form-control mb-2"
                            defaultValue={inputs.prix || ''}
                            onChange={handleChange}/>
                                                <label>Description</label>
                         <input type="text" name="description" className="form-control mb-2"
                            defaultValue={inputs.description || ''}
                            onChange={handleChange}/>  
                                                <label>Origines</label>
                         <input type="text" name="origines" className="form-control mb-2"
                            defaultValue={inputs.origines || ''}
                            onChange={handleChange}
                        />
                                <label>Image</label>

<input type="text" name="image" className="form-control mb-2"
   deafaultValue={inputs.image || ''}
   onChange={handleChange}/>
<label>type</label>
<selected  value={inputs.type} className="form-select" name='type'  onChange={handleChange} aria-label="Default select example">
  <option selected>choisissez la catégorie</option>
  <option deafaultValue="fruits">fruits</option>
  <option deafaultValue="legumes">legumes</option>
</selected>
<label className="mt-1">disponibilité</label>
<selected deafaultValue={inputs.stock} className="form-select" name='stock'  onChange={handleChange} aria-label="Default select example">
  <option  selected>choisissez la catégorie</option>
  <option deafaultValue='0'>indisponible</option>
  <option deafaultValue='1'>disponible</option>
</selected>
                        <button type="button" onClick={submitForm} className="btn btn-info mt-2">Update</button>
                    </div>
                </div>
            </div>
            </div>
        </div>

    )
}

export default Edit_admin