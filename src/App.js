import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import About from './About/About';
import Link from './Link/Link';
import Common from './Commondata/Common';

function App() {
  return (

    <div className='main'>
    <BrowserRouter>

        <Navbar />
        <Routes>
        <Route path="" element={<Common/>}/>
          
        <Route path="/Link" element={<Link/>}/>
        <Route path="/About" element={<About/>}/>
          </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
