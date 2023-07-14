
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "./style.css"
const ProductsNavBar=(props)=>{

    return(
        <Navbar className="bg-body-tertiary">
          <Container>
          <Navbar.Brand href="#home">
                {/* <img
                  src="https://miro.medium.com/v2/resize:fit:1000/1*TCc6vQVH-3EUiJea76pMbQ.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top rounded"
                  alt="React Bootstrap logo"
                /> */}
                {
                  <h3>{props.listOfRestaurants.length}</h3>  
                }

              </Navbar.Brand>
            <Navbar.Brand href="#home"><h3>Restaurants</h3></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text className="nav-links-box">
                <Link className="nav-links" to="/">Relevance </Link>
              </Navbar.Text>
              <Navbar.Text className="nav-links-box">
              <Link className="nav-links" id="happy" to="/contact">Delivery Time</Link>
              </Navbar.Text>
              <Navbar.Text  className="nav-links-box">
              <Link className="nav-links" to="/about">Rating</Link>
              </Navbar.Text>
              <Navbar.Text className="nav-links-box" >
                 <Link className="nav-links" to="">Cost: Low To High</Link>
              </Navbar.Text>
              <Navbar.Text className="nav-links-box" >
                 <Link className="nav-links" to="">Cost: High To Low</Link>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );

}


export default ProductsNavBar;