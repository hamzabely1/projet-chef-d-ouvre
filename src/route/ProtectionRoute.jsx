import { useEffect, useState } from "react";

import { Navigate } from 'react-router-dom';
import * as Cookie from '../connexion/Cookie';
import axios from 'axios';


const ProtectedRoute = ({children}) => {


    const AuthAdmin = async() => {
        let token = Cookie.getCookie('token');
        console.log(token);
        let response = await axios.post(`http://127.0.0.1:8000/api/checkadmin`, {
            token: token
        })
        return response;
    }


    const [role, setRole] = useState()
    
    useEffect(() => {
        AuthAdmin().then(res => setRole(res.data.role));
    }, [])

    if (role === 'user') {
        return <Navigate to="/" replace />;
    } else if (role === 'admin'){
        return children;
    }else{
        return <Navigate to="/" replace />;
    }

}

export default ProtectedRoute;