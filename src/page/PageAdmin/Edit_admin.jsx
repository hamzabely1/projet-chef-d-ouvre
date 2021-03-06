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
         
        })

        navigate("/admin")
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
   defaultValue={inputs.image || ''}
   onChange={handleChange}/>
<label>type</label>
<select  value={inputs.type} className="form-select" name='type'  onChange={handleChange} aria-label="Default select example">
  <option select>choisissez la cat??gorie</option>
  <option value="fruits">fruits</option>
  <option value="legumes">legumes</option>
</select>
<label className="mt-1">disponibilit??</label>
<select value={inputs.stock} className="form-select" name='stock'  onChange={handleChange} aria-label="Default select example">
  <option  select>choisissez la cat??gorie</option>
  <option value='0'>indisponible</option>
  <option value='1'>disponible</option>
</select>
<div className="d-flex justify-content-center">

<button  onClick={submitForm} className="buttons mt-2 ">Update</button>

</div>

                    </div>
                </div>
            </div>
            </div>
        </div>

    )
}

export default Edit_admin