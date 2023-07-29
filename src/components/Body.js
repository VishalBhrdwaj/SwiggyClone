import ControlledCarousel from "./ControlledCarousel";
import ProductsNavBar from "./ProductsNavBar";
import { Col, Container, Row } from "react-bootstrap";
import ProductsCard from "./ProductsCard";
import { useEffect, useState } from "react";
import { FOOD_DATA_URL } from "../utils/constants";
import ShimmerUI from "./ShimmerUI/ShimmerUI";
import { Link } from "react-router-dom";
import { withPromotedLabel } from "./ProductsCard";
import LoginPage from "./Auth/LoginPage";

export default Body = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(FOOD_DATA_URL);
    const foodData = await data.json();
    // console.log(listOfRestaurants);
    // console.log(foodData?.data?.cards[5]?.card.card.gridElements.infoWithStyle.restaurants);
    // setListOfRestraunt(foodData?.data?.cards[5]?.card.card);
    setListOfRestraunt(foodData?.data?.cards[5]?.card.card.gridElements.infoWithStyle.restaurants);

  };

  const ProductsCardwithPromotedLabel = withPromotedLabel(ProductsCard);
  return listOfRestaurants.length ==0 ? (
    <ShimmerUI />
  ) : (
    
    <>
      <ControlledCarousel />
      <ProductsNavBar listOfRestaurants={listOfRestaurants} />
      <Container fluid>
        <Row>
          <Col>
            {listOfRestaurants.map((restaurant,index) => {
              // return restaurant.data.promoted ? (
              //   <Link
              //     style={{ color: "black" }}
              //     key={restaurant?.data?.uuid}
              //     to={"/restaurant/" + restaurant?.data?.id}
              //   >
              //     <ProductsCardwithPromotedLabel restaurantData={restaurant} />
              //   </Link>
              // ) : (
               return <Link
                  style={{ color: "black" }}
                  key={restaurant?.info.id}
                  to={"/restaurant/" + restaurant?.info?.id}
                >
                  <ProductsCard restaurantData={restaurant} />
                </Link>
              // );
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
};
