import { useEffect, useState } from "react";

import { Navigate } from 'react-router-dom';
import * as Cookie from '../connexion/Cookie';
import axios from 'axios';


const ProtectedRoutePanier = ({children}) => {


    const AuthRole = async() => {
        let token = Cookie.getCookie('token');
        let response = await axios.post(`http://127.0.0.1:8000/api/connexion`, {
     token: token
        })
        return response;
    }


    const [role, setRole] = useState()
    
    useEffect(() => {
        AuthRole().then(res => setRole(res.data.status));
    }, [])
    if (role === false) {
        return <Navigate to="/" replace />;
    } else if (role === true) {
        return children;
    }
}

export default ProtectedRoutePanier;