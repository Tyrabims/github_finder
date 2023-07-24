import { NavLink } from "react-router-dom";
// import logo from '../assets/logo.webp';
import { Navbar as NavbarBs, Container, Nav } from "react-bootstrap";
import '../index.css';
import styles from './Forms.module.css'

const Navbar = () => {
  return (
    <NavbarBs sticky="top" className="bg-danger shadow-sm mb-3">
      <Container>
          <h4 className="git">Github Finder</h4>
          <Nav className="justify-content-space-between">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/About" as={NavLink}>
            About
          </Nav.Link>
          </Nav>
      </Container>
    </NavbarBs>

  )
}

export default Navbar