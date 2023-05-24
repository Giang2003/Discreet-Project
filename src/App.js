import logo from './assets/Logo.png';
import './App.css';
import background from './assets/Background.png';
import NavBar from './components/NavBar';
import Simulate from './components/Simulate';
import Decor1 from './assets/Decor1.png';
import AboutUs from './components/AboutUs';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <><div className="background">
      <img src={background} className="background" alt='#' />
      <img src={Decor1} className='decor-1' alt='#' />
      <div>
        <h1 className='title'>Crystal Simulator</h1>
        <img src={logo} className="logo" alt='#' />
      </div>
    </div><><Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Simulate />} />
        <Route path='/about-us' element={<AboutUs />} />
      </Routes>
    </Router>
      </></>
  );
}

export default App;
