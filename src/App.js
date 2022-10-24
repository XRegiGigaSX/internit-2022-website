import logo from './logo.svg';
import './App.css';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import NavBars from './components/NavBars';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBars/>
    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/far' element={<Home/>}/>
      <Route path='/stats' element={<Home/>}/>
      <Route path='/sponsors' element={<Home/>}/>
      <Route path='/team' element={<Home/>}/>

    </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
