import './App.css';
import Home from './page/Home';
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import Fruits from './page/Fruits';
import Heder from './component/Heder';
import Register from './connexion/Register';
import Login from './connexion/Login';
import Articles from './page/Articles';
import Create_admin from './page/PageAdmin/Create_admin';
import axios from 'axios';
import Legumes from './page/Legumes';
import Panier from './page/Panier';
import Home_admin from './page/PageAdmin/Crud_admin';
import Edit_admin from './page/PageAdmin/Edit_admin'
import Plus_sur_taz from './page/Plus_sur_taz';
import Paiment from './page/Paiment';
import AdminPrivateRoute from './page/PageAdmin/AdminPrivateRoute';
import Email from '../src/component/Email'
import RouteAdmin from './route/RouteAdmin'


axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("auth_token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});


function App() {
  return (
    <div className="App">
     
<Heder/>






<BrowserRouter>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/home" element={<Home/>}/>

<Route path="fruits"element={<Fruits/>}/>
<Route path="legumes" element={<Legumes/>}/>
<Route path="panier"element={localStorage.getItem('token') ?<Panier/> :<Home/>}/>
<Route path="paiment" element={localStorage.getItem('token') ?<Paiment/> :<Home/>}/>"
<Route path="plus" element={<Plus_sur_taz/>}/>

<Route path="login" element={<Login/>}/>
<Route path="register" element={<Register/>}/>
<Route path="admin" element={<RouteAdmin><Create_admin/></RouteAdmin>}/>

<Route path="register" element={<Register/>}/>
<Route path="login" element={<Login/>}/>
<Route path="home_admin" element={<Home_admin/>}/>
<Route path="edit_admin/:id" element={<Edit_admin/>}/>

<Route path='articles/:id' element={<Articles/>}/>
<Route path='email' element={<Email/>}/>

</Routes>



</BrowserRouter>

    </div>
  );
}

export default App;
