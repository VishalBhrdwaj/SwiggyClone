import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

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
          <Navbar.Text>
            <Link to="/"> Home</Link>
          </Navbar.Text>
          <Navbar.Text>
          <Link to="/contact"> ContactUS</Link>
          </Navbar.Text>
          <Navbar.Text>
          <Link to="/about"> Home</Link>
          </Navbar.Text>
          <Navbar.Text>
            Signed in as: <a href="#login">SignIN</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;