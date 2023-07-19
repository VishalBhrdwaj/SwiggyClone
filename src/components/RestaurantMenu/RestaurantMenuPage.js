import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useResturantsMenu";
import ShimmerUI from "../ShimmerUI/ShimmerUI";
import { Col, Container } from "react-bootstrap";
import RestaurantFoodCard from "./RestaurantFoodCard";
export function RestaurantMenuPage() {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) return <ShimmerUI />;

//   console.log(resInfo?.data?.cards);

  const { name, cuisines, costForTwoMessage } =   resInfo?.data?.cards[0]?.card?.card?.info;

  const { itemCards } =
  resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
  resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    
    console.log(categories);

  return (
    <>
      <div className="h-auto min-h-screen pb-10 flex-col grid w-screen justify-items-center">
        <div className="min-h-max  w-2/4 h-auto mt-5">
          <div className="flex  flex-row h-60 w-100">
            <div className="h-3/4 w-full mt-6 inline-block ml-1 border-b-2 border-sky-500 ">
              <div className="text-2xl font-bold pl-5 pt-3">
                <h4>{name}</h4>
              </div>
              <div className="text-md pl-5 pt-3">
                <h4>{cuisines}</h4>
              </div>
              <div className="text-md pl-5 pt-3">
                <h4>{costForTwoMessage}</h4>
              </div>
            </div>
            {/* <div className="h-3/4 w-1/4 mt-6 inline-block ml-7 "></div> */}
          </div>

          {/* <div className=""> */}
            
            {
                itemCards.map((item)=>{
                    return <RestaurantFoodCard key={item.card.info.id} item={item}/>
                })
            }
            
          {/* </div> */}
        </div>
      </div>
    </>
  );
}
