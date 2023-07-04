import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='nav-item'>
      <ul>
        <li><h1>Github Finder App</h1></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">About</Link></li>
      </ul>  
    </div>
  )
}

export default Navbar