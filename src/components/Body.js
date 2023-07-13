import ControlledCarousel from "./ControlledCarousel";
import ProductsNavBar from "./ProductsNavBar";
import { Col, Container, Row } from "react-bootstrap";
import ProductsCard from "./ProductsCard";
import { useEffect, useState } from "react";
import { FOOD_DATA_URL } from "../utils/constants";

export default Body=()=>{
    const [listOfRestaurants, setListOfRestraunt] = useState([]);

    useEffect(()=>{
       fetchData();
        console.log("hello");
    },[])

    const fetchData=async()=>{
        const data=await fetch(FOOD_DATA_URL)
        const foodData=await data.json();
        setListOfRestraunt(foodData?.data?.cards[2]?.data?.data?.cards)
        console.log(foodData?.data?.cards[2]?.data?.data?.cards);
    }
    return(
       <>
       <ControlledCarousel/>
        <ProductsNavBar/>
        <Container>
            <Row>
                <Col>
                {
                    listOfRestaurants.map((restaurant)=>{
                        return <ProductsCard key={restaurant?.data?.uuid} restaurantData={restaurant}  />
                    })

                }
                </Col>
            </Row>
            
        </Container>
       </>
    )
}