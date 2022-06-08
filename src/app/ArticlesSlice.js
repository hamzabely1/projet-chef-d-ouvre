import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'




export const articlesSlice = createSlice({

    name:"articles",
    initialState:{
        list:[]
    },

    reducers:{

        setArticles(state,actions){
            state.list=actions.payload
        }

    }

})

    export const {setArticles} = articlesSlice.actions


export const fetchartilces = ()=> async (dispath)=>{

    try{
        const responce = await axios.get('http://127.0.0.1:8000/api/article');
        dispath(setArticles(responce.data));
    }catch(error){
        console.log('error');
    }
}

