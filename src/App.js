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
import Far from './components/Far';
import Stats from './components/Stats';
import Sponsors from './components/Sponsors';
import Team from './components/Team';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBars/>
    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/far' element={<Far/>}/>
      <Route path='/stats' element={<Stats/>}/>
      <Route path='/sponsors' element={<Sponsors/>}/>
      <Route path='/team' element={<Team/>}/>

    </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
