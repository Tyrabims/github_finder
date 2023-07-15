import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  
  return (
  <>
  <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
      
    </div>
  </>
  )
}
export default App;
