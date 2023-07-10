import { Link } from "react-router-dom";
import logo from '../assets/logo.webp';

const Navbar = () => {
  return (
    <div className='nav-item'>
        <ul>
            <li><h3>Github Finder App</h3></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
        </ul>
    </div>
  )
}

export default Navbar