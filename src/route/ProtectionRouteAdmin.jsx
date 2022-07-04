import { useEffect, useState } from "react";

import { Navigate } from 'react-router-dom';
import * as Cookie from '../connexion/Cookie';
import axios from 'axios';
import Edit_admin from "../page/PageAdmin/Edit_admin";


const ProtectedRouteAdmin = ({children}) => {


    const AuthRole = async() => {
        let token = Cookie.getCookie('token');
        console.log(token);
        let response = await axios.post(`http://127.0.0.1:8000/api/checkadmin`, {
            token: token
        })
        return response;
    }


    const [role, setRole] = useState('')
    
    useEffect(() => {
        AuthRole().then(res => setRole(res.data.role));
    }, [])

   

    if (role === 'admin') {
        return children;
    } else if(role === 'user'){
        return <Navigate to="/" replace />;
    }
}

export default ProtectedRouteAdmin;