import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const registerslice= createSlice({
name: 'register',
initialState:{
    user:[]
},


reducers:{


    adduser:(state,action)=>{
        const newuser = {
nom:action.payload,
email:action.payload,
password:action.payload
        }
        state.push(newuser);
    }


    
}


})




export const {adduser} = registerslice.actions


export const fetchregister = ()=> async (dispath)=>{

    try{
        const responce = await axios.post('http://127.0.0.1:8000/api/add_user');
        dispath(setadd(responce.data));
    }catch(error){
        console.log('error');
    }
}
