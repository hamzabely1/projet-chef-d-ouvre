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
import ProtectionRouteAdmin from './route/ProtectionRouteAdmin';
import * as Cookie from '../src/connexion/Cookie'

import ProtectionRouteUser from './route/ProtectionRouteUser';
import ProtectionRoute from './route/ProtectionRoute'


function App() {
  return (
    <div className="App">
     







<BrowserRouter>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/fruits' element={<ProtectionRoute><Fruits/></ProtectionRoute>}/>
<Route path='/legumes' element={<ProtectionRoute><Legumes/></ProtectionRoute>}/>
<Route path='/panier' element={<ProtectionRouteUser><Panier/></ProtectionRouteUser>}/>z
<Route path="/login" element={<ProtectionRoute><Login/></ProtectionRoute>}/>
<Route path="/register" element={<ProtectionRoute><Register/></ProtectionRoute>}/>
<Route path="/plus" element={<ProtectionRoute><Plus_sur_taz/></ProtectionRoute>}/>
<Route path="/admin" element={<ProtectionRouteAdmin><Home_admin/></ProtectionRouteAdmin>}/>
<Route path="/edit_admin/:id" element={<ProtectionRouteAdmin><Edit_admin/></ProtectionRouteAdmin>}/>

<Route path='articles/:id' element={<Articles/>}/>
</Routes>



</BrowserRouter>

    </div>
  );
}

export default App;
