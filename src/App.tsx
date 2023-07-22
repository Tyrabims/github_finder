import './index.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Container } from 'react-bootstrap'
import { Home } from './pages/Home';
import { About } from './pages/About';
import UserDetails from './components/UserDetailsProps';

const App = () => (
    <>
      <Navbar />
      <Container className='mb-4'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/details/:username" element={<UserDetails />} />
          <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
      </Routes>
      </Container>
  </>
);

export default App;
