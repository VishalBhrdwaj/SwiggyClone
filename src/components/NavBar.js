import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "./style.css"

const NavBar=()=>{
    return(
    <Navbar className="bg-body-tertiary">
      <Container>
      <Navbar.Brand href="#home">
            <img
              src="https://miro.medium.com/v2/resize:fit:1000/1*TCc6vQVH-3EUiJea76pMbQ.png"
              width="30"
              height="30"
              className="d-inline-block align-top rounded"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        <Navbar.Brand href="#home">Swiggy</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="nav-links-box">
            <Link className="nav-links" to="/"> Home</Link>
          </Navbar.Text>
          <Navbar.Text className="nav-links-box">
          <Link className="nav-links" id="happy" to="/contact"> ContactUS</Link>
          </Navbar.Text>
          <Navbar.Text  className="nav-links-box">
          <Link className="nav-links" to="/about">AboutUS</Link>
          </Navbar.Text>
          <Navbar.Text className="nav-links-box" >
            Signed in as: <Link className="nav-links" to="">Vishal BHardwaj</Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;