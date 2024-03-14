import { Route, Routes } from 'react-router-dom';
import './App.css';

// components to route
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import LocationInfo from './pages/LocationInfo';

// Nav
import Navbar from './shared/Navbar';

function App() {
  return (
    <div className='card'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/portfolio' element={<Portfolio />}></Route>
        <Route path='/location/:id' element={<LocationInfo />}></Route>
        <Route path='*' element={<h1>❌ 404 - Page noy found</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
