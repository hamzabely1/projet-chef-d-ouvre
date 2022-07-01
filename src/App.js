import './App.css';
import Home from './page/Home';
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import Fruits from './page/Fruits';
import Heder from './component/Heder';
import Register from './connexion/Register';
import Login from './connexion/Login';
import Articles from './page/Articles';
import Admin from './page/PageAdmin/Create';

import Legumes from './page/Legumes';
import Panier from './page/Panier';
<<<<<<< HEAD
import Home_admin from './page/PageAdmin/Home_admin';
let role = localStorage.getItem('role')
=======
import Home_admin from './page/PageAdmin/Crud_admin';
import Edit_admin from './page/PageAdmin/Edit_admin'
import Plus_sur_taz from './page/Plus_sur_taz';
import Paiment from './page/Paiment';
import AdminPrivateRoute from './page/PageAdmin/AdminPrivateRoute';
import Email from '../src/component/Email'
import RouteAdmin from './route/RouteAdmin'
import * as Cookie from '../src/connexion/Cookie'
>>>>>>> ff51fcc9801a93e0b9df704b22a311b86d60f0e0


function App() {
  return (
    <div className="App">
     
<Heder/>






<BrowserRouter>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/home' element={<Home/>}/>

<<<<<<< HEAD
<Route path='fruits' element={<Fruits/>}/>
<Route path='legumes' element={<Legumes/>}/>
<Route path='panier' element={<Panier/>}/>

<Route path="login" element={localStorage.getItem('nom') ?<Home/> :<Login/>}/>
<Route path="register" element={localStorage.getItem('nom') ?<Home/> :<Register/>}/>
=======
<Route path="fruits"element={<Fruits/>}/>
<Route path="legumes" element={<Legumes/>}/>
<Route path="panier"element={ Cookie.getCookie('token') ?<Panier/> :<Home/>}/>
<Route path="paiment" element={localStorage.getItem('token') ?<Paiment/> :<Home/>}/>"
<Route path="plus" element={<Plus_sur_taz/>}/>

<Route path="login" element={<Login/>}/>
<Route path="register" element={<Register/>}/>
<Route path="admin" element={<Create_admin/>}/>
>>>>>>> ff51fcc9801a93e0b9df704b22a311b86d60f0e0

<Route path="admin" element={localStorage.getItem('role') ?<Admin/> :<Home/>}/>
<Route path="register" element={localStorage.getItem('role') ?<Home/> :<Register/>}/>
<Route path="login" element={localStorage.getItem('role') ?<Home/> :<Login/>}/>
<Route path="home_admin" element={<Home_admin/>}/>

<Route path='articles/:id' element={<Articles/>}/>

</Routes>



</BrowserRouter>

    </div>
  );
}

export default App;
