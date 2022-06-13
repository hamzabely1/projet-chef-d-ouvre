import './App.css';
import Home from './page/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Fruits from './page/Fruits';
import Heder from './component/Heder';
import Register from './connexion/Register';
import Login from './connexion/Login';
import Articles from './page/Articles';
import Admin from './page/Admin';

function App() {
  return (
    <div className="App">
     
<Heder/>






<BrowserRouter>
<Routes>
<Route path='home' element={<Home/>}/>
<Route path='fruits' element={<Fruits/>}/>
<Route path='register' element={<Register/>}/>

<Route path='login' element={<Login/>}/>
<Route path='home/articles/:id' element={<Articles/>}/>
<Route path='admin' element={<Admin/>}/>

</Routes>



</BrowserRouter>

    </div>
  );
}

export default App;
