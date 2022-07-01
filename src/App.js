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
import Home_admin from './page/PageAdmin/Home_admin';
let role = localStorage.getItem('role')


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
<Route path='panier' element={<Panier/>}/>

<Route path="login" element={localStorage.getItem('nom') ?<Home/> :<Login/>}/>
<Route path="register" element={localStorage.getItem('nom') ?<Home/> :<Register/>}/>

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
