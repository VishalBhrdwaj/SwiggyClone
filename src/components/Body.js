import ControlledCarousel from "./ControlledCarousel";
import ProductsNavBar from "./ProductsNavBar";
import { Col, Container, Row } from "react-bootstrap";
import ProductsCard from "./ProductsCard";
import { useEffect, useState } from "react";
import { FOOD_DATA_URL } from "../utils/constants";
import ShimmerUI from "./ShimmerUI/ShimmerUI";

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
    return listOfRestaurants.length===0? <ShimmerUI/> : (
       <>
       <ControlledCarousel/>
        <ProductsNavBar listOfRestaurants={listOfRestaurants}/>
        <Container fluid>
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