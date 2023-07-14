
import { FOOD_IMG_URL } from "../utils/constants";

const ProductsCard = ({ restaurantData }) => {
  function changeBorder(e) {
    e.target.style.border = "1px solid black";
    e.target.style.transition="border-width 0.6s linear";
  }
  function toggleBorder(e) {
    e.target.style.border = "";
  }
  return (
    <div
      onMouseEnter={changeBorder}
      onMouseLeave={toggleBorder}
      className="products-card"
    >
      <div className="product-img-div">
        <img
          style={{ width: "100%", height: "100%" }}
          src={FOOD_IMG_URL + restaurantData?.data?.cloudinaryImageId}
        />
      </div>
      <div id="product-name">{restaurantData?.data?.name}</div>
      <div id="product-cuisines">
        {<>{restaurantData?.data?.cuisines[0]}</>}
      </div>
      <div id="product-other-info-parent-div">
        <span className="product-other-info">{restaurantData?.data?.avgRating}</span>
        <span className="product-other-info">{restaurantData?.data?.deliveryTime} MINS</span>
        <span className="product-other-info">{restaurantData?.data?.costForTwoString}</span>
      </div>
    </div>
  );
};

export default ProductsCard;
