import './App.css';
import Home from './page/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Fruits from './page/Fruits';
import Heder from './component/Heder';

function App() {
  return (
    <div className="App">
     
<Heder/>






<BrowserRouter>
<Routes>
<Route path='home' element={<Home/>}/>
<Route path='fruits' element={<Fruits/>}/>

</Routes>



</BrowserRouter>

    </div>
  );
}

export default App;
