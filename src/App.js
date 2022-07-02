import './App.css';
import Home from './page/Home';
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import Fruits from './page/Fruits';
import Heder from './component/Heder';
import Register from './connexion/Register';
import Login from './connexion/Login';
import Articles from './page/Articles';
import Admin from './page/PageAdmin/Create_admin';

import Legumes from './page/Legumes';
import Panier from './page/Panier';

import Home_admin from './page/PageAdmin/Home_admin';


import Edit_admin from './page/PageAdmin/Edit_admin'
import Plus_sur_taz from './page/Plus_sur_taz';
import Paiment from './page/Paiment';
import ProtectionRoute from './route/ProtectionRoute';
import * as Cookie from '../src/connexion/Cookie'


function App() {
  return (
    <div className="App">
     
<Heder/>






<BrowserRouter>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/home' element={<Home/>}/>
<Route path='fruits' element={<Fruits/>}/>
<Route path='legumes' element={<Legumes/>}/>
<Route path='panier' element={<Panier/>}/>z

<Route path="login" element={<Login/>}/>
<Route path="register" element={<Register/>}/>
<Route path="fruits"element={<Fruits/>}/>
<Route path="legumes" element={<Legumes/>}/>
<Route path="panier"element={ Cookie.getCookie('token') ?<Panier/> :<Home/>}/>
<Route path="paiment" element={Cookie.getCookie('token') ?<Paiment/> :<Home/>}/>"
<Route path="plus" element={<Plus_sur_taz/>}/>
<Route path="/admin" element={<ProtectionRoute><Home_admin/></ProtectionRoute>}/>
<Route path='articles/:id' element={<Articles/>}/>

</Routes>



</BrowserRouter>

    </div>
  );
}

export default App;
