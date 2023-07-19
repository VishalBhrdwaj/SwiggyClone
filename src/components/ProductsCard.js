
import { FOOD_IMG_URL } from "../utils/constants";

const ProductsCard = (props) => {
  const restaurantData=props.restaurantData;
  function changeBorder(e) {

  }
  function toggleBorder(e) {
  }
  return (
    <div
      onMouseEnter={changeBorder}
      onMouseLeave={toggleBorder}
      className="products-card overflow-hidden  "
    >
      <div className="product-img-div rounded-lg ">
        <img
          style={{ width: "100%", height: "100%" }}
          src={FOOD_IMG_URL + restaurantData?.data?.cloudinaryImageId}
          className="rounded-2xl"
        />
      </div>
      <div id="product-name" className="text-xl font-semibold">{restaurantData?.data?.name}</div>
      <div id="product-cuisines">
        {<>{restaurantData?.data?.cuisines.join(", ")}</>}
      </div>
      <div className="flex justify-between">
        <span className="">❇️{restaurantData?.data?.avgRating}</span>
        <span className="">{restaurantData?.data?.deliveryTime} MINS</span>
        <span className="">{restaurantData?.data?.costForTwoString}</span>
      </div>
    </div>
  );
};

export const withPromotedLabel=(ProductsCard)=>{

  return (props)=>{

    return (
      <>
        <label className="absolute bg-black text-white p-2 mt-10 ml-10 rounded-lg">Promoted</label>
        <ProductsCard restaurantData={props.restaurantData}/>
      </>
    )
  }

}

export default ProductsCard;
