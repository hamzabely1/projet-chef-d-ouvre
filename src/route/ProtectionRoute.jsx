import { useEffect, useState } from "react";

import { Navigate } from 'react-router-dom';
import * as Cookie from '../connexion/Cookie';
import axios from 'axios';


const ProtectedRouteAdmin = ({children}) => {


    const AuthRole = async() => {
        let response = await axios.post(`http://127.0.0.1:8000/api/checkadmin`, {
        }).then(res =>{
            setRole(res.data.role);
        })
        return response;
    }


    const [role, setRole] = useState()
    
    useEffect(() => {
        AuthRole().then(res => setRole(res.data.role));
    }, [])
  

    if (role === 'visiteur') {
        return children;
    } else{
        return children;

    }
}

export default ProtectedRouteAdmin;