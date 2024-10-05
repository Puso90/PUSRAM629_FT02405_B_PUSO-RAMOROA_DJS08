import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Vans from "../pages/Vans/Vans.jsx";

import "../server.js"


function App() {

  return (
    <BrowserRouter>
      <header>
        <Link to="/">#VANLIFE</Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>

      </header>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App