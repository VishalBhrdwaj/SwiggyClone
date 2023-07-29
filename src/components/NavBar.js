import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./style.css";
import { useSelector } from "react-redux";
import Store from "./redux/Store";

const NavBar = () => {
  const items=useSelector(Store=>Store.cart.items);

  return (
    <div className="flex justify-between h-16 w-full mt">
      <div className="mt-3 ml-10 flex ">
        <span> <img
      src="https://miro.medium.com/v2/resize:fit:1000/1*TCc6vQVH-3EUiJea76pMbQ.png"
      width="40"
      height="40"
      className="d-inline-block align-top rounded"
      alt="React logo"
    /></span>
        <div className="ml-4 pt-1 font-semibold text-lg">Swiggy</div>
      </div>
      <div className="mr-10 w-2/6">
        <ul className="flex justify-between pl- pt-2 text-lg">
        <Link to="/"><li className="mt-2 hover:cursor-pointer hover:scale-125 transition ease-in-out hover:border-b-2 border-orange-400 hover:text-orange-500">Home</li></Link>
        <Link to="/about"><li className="mt-2 hover:cursor-pointer hover:scale-125 transition ease-in-out hover:border-b-2 border-orange-400 hover:text-orange-500">🔍Search</li></Link>
        <Link to="/about"><li className="mt-2 hover:cursor-pointer hover:scale-125 transition ease-in-out hover:border-b-2 border-orange-400 hover:text-orange-500">Offers</li></Link>
        <Link to="/signin"><li className="mt-2 hover:cursor-pointer hover:scale-125 transition ease-in-out hover:border-b-2 border-orange-400 hover:text-orange-500">Signin</li></Link>
        <Link to="/cart"><li className="mt-2 hover:cursor-pointer hover:scale-125 transition ease-in-out hover:border-b-2 border-orange-400 hover:text-orange-500">🛒Cart-{items.length}</li></Link>
        </ul>
      </div>
    </div>
   
  )
};

export default NavBar;


<Navbar className="bg-body-tertiary">
<Container>
  <Navbar.Brand href="#home">
   
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