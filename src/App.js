import './App.css';
import Home from './page/Home';
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import Fruits from './page/Fruits';
import Register from './connexion/Register';
import Login from './connexion/Login';
import Articles from './page/Articles';
import Commande from '../src/page/Commande'
import Legumes from './page/Legumes';
import Panier from './page/Panier';

import Home_admin from './page/PageAdmin/Home_admin';
import ProtectionRoutePanier from './route/ProtectionRoutePanier'

import Edit_admin from './page/PageAdmin/Edit_admin'
import Plus_sur_taz from './page/Plus_sur_taz';
import ProtectionRouteAdmin from './route/ProtectionRouteAdmin';

import ProtectionRoute from './route/ProtectionRoute'


function App() {
  return (
    <div className="App">

<BrowserRouter>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/fruits' element={<Fruits/>}/>
<Route path='/legumes' element={<Legumes/>}/>
<Route path='/panier' element={<ProtectionRoutePanier><Panier/></ProtectionRoutePanier>}/>z
<Route path="/login" element={<ProtectionRoute><Login/></ProtectionRoute>}/>
<Route path="/register" element={<ProtectionRoute><Register/></ProtectionRoute>}/>
<Route path="/plus" element={<Plus_sur_taz/>}/>
<Route path="/admin" element={<ProtectionRouteAdmin><Home_admin/></ProtectionRouteAdmin>}/>
<Route path="/edit_admin/:id" element={<ProtectionRouteAdmin><Edit_admin/></ProtectionRouteAdmin>}/>
<Route path='articles/:id' element={<Articles/>}/>
<Route path='commande' element={<Commande/>}/>


</Routes>



</BrowserRouter>

    </div>
  );
}

export default App;
