import { NavLink } from "react-router-dom";
// import logo from '../assets/logo.webp';
import { Navbar as NavbarBs, Container, Nav } from "react-bootstrap";
import '../index.css';
import styles from './Forms.module.css'

const Navbar = () => {
  return (
    <NavbarBs sticky="top" className="bg-danger mb-3">
      <Container>
          <h4 className="text-white me-6">Github Finder</h4>
          <Nav>
          <Nav.Link className="text-white" to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link className="text-white me-10 " to="/About" as={NavLink}>
            About
          </Nav.Link>
          </Nav>
      </Container>
    </NavbarBs>

  )
}

export default Navbar