import ControlledCarousel from "./ControlledCarousel";
import ProductsNavBar from "./ProductsNavBar";
import { Col, Container, Row } from "react-bootstrap";
import ProductsCard from "./ProductsCard";

export default Body=()=>{
    return(
       <>
       <ControlledCarousel/>
        <ProductsNavBar/>
        <Container>
            <Row>
                <Col>
                 <ProductsCard/>
                 <ProductsCard/>
                 <ProductsCard/>
                 <ProductsCard/>
                </Col>
            </Row>
            
        </Container>
       </>
    )
}