import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./style.css";

const NavBar = () => {
  return (
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
            
            <Link className="nav-links" to="/">
              {" "}
              Home
            </Link>
          </Navbar.Text>
          <Navbar.Text className="nav-links-box">
            <Link className="nav-links" id="happy" to="/contact">
              {" "}
              ContactUS
            </Link>
          </Navbar.Text>
          <Navbar.Text className="nav-links-box">
            <Link className="nav-links" to="/about">
              AboutUS
            </Link>
          </Navbar.Text>
          
          <Link className="hover:text-orange-400" to="/cart"><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg></Link>
          
          <Navbar.Text className="nav-links-box">
            Signed in as:{" "}
            <Link className="nav-links" to="">
              Vishal BHardwaj
            </Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
