import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import 'bootstrap/dist/css/bootstrap.css';
import UserDetails from './components/UserDetailsProps';

const App = () => (
  <div className="px-2">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:username" element={<UserDetails />} />
        <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
      </Routes>
    </Router>
  </div>
);

export default App;
