import React from 'react';
import './index.css';
import {Routes, Route, Link} from 'react-router-dom';
import Homepage from './components/Homepage';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import MyImage from './components/MyImage';

function App() {
  return (
    <div className='containerApp'>
      <nav className='nav'>
        <MyImage />
        <Link to='/' className='navItem'>Homepage</Link>
        <Link to='/about-me' className='navItem'>About me</Link>
        <Link to='/contact' className='navItem'>Contact</Link>
      </nav>

      <Routes>
        <Route path='/' element={ <Homepage /> } />
        <Route path='/about-me' element={ <AboutMe /> } />
        <Route path='/contact' element={ <Contact /> } />
      </Routes>
    </div>
  );
}

export default App;