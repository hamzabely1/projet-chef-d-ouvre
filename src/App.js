import './App.css';
import Home from './page/Home';
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import Fruits from './page/Fruits';
import Heder from './component/Heder';
import Register from './connexion/Register';
import Login from './connexion/Login';
import Articles from './page/Articles';
import Admin from './page/Admin';

import Legumes from './page/Legumes';
let role = localStorage.getItem('role')


function App() {
  return (
    <div className="App">
     
<Heder/>






<BrowserRouter>
<Routes>
<Route path='home' element={<Home/>}/>
<Route path='fruits' element={<Fruits/>}/>
<Route path='legumes' element={<Legumes/>}/>

<Route path="login" element={localStorage.getItem('role') ?<Home/> :<Login/>}/>
<Route path="register" element={localStorage.getItem('role') ?<Home/> :<Register/>}/>

<Route path="admin" element={localStorage.getItem('role') === '1' ?<Home/> :<Admin/>}/>

<Route path='articles/:id' element={<Articles/>}/>

</Routes>



</BrowserRouter>

    </div>
  );
}

export default App;
