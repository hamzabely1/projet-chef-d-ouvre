import { useEffect, useState } from "react";

import { Navigate } from 'react-router-dom';
import axios from 'axios';


const ProtectedRoute = ({children}) => {


    const AuthRole = async() => {
        let token = localStorage.getItem('token');
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
        return children;
    } else if (role === true) {
        return <Navigate to="/" replace />;
    }
}

export default ProtectedRoute;