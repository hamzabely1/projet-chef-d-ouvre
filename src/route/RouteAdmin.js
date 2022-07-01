
import * as Cookie from '../connexion/Cookie';
import axios from 'axios';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

import { useEffect } from 'react';

const AuthAdmin = async({children}) => {
    let token = Cookie.getCookie('token');
    let response = await axios.post(`http://127.0.0.1:8000/api/authadmin`, {
        token: token
    }).then(res => {console.log(res);})
    return response;


const [isAuth, setAuth] = useState()
    
useEffect(() => {
    AuthAdmin().then(res => setAuth(res.data.status));
}, [])

if (isAuth === false) {
    return <Navigate to="/" replace />;
} else if (isAuth === true){
    return children;
}


}

export default AuthAdmin


