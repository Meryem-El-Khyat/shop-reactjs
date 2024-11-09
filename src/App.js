import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navigateur from './components/navigateur';
import Shop from './components/Shop';
import './App.css';

function App() {
  return (
      <Router>
          <div>
              <Navigateur/>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/shop" element={<Shop />} />
              </Routes>
              
          </div>
      </Router>
  );
}

export default App;
