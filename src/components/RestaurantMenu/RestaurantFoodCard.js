import { useDispatch } from "react-redux";
import { RESTAURANT_ITEMS_IMG } from "../../utils/constants";
import { addItems, increase } from "../redux/CartSlice";
import { useState } from "react";
export default function RestaurantFoodCard(props) {
  const { name, description, price, imageId } = props.item.card.info;
  const [buttonText,setButtonText]=useState("Add +")

  const dispatch=useDispatch();

  return (
    <div className="w-100 h-40 mt-1 border-b-2 border-sky-500 flex justify-between">
      <div className="p-1 ml-5 ">
        <div className="text-xl">{name}</div>
        <div className=""> ₹{price / 100}</div>
        {/* <div className="">{description}</div> */}
      </div>

      <div className="h-5/6 w-36  bg-black mt-1 mr-2 rounded-lg">
        <div className="absolute mt-[105] ml-6">
          <button
          disabled={buttonText!="Add +"?true:false}
            onClick={() => {
              dispatch(addItems(props.item.card.info))
              console.log(props.item.card.info);
              dispatch(increase((props.item.card.info.price)/100));
              setButtonText("Added ☑️");
            }}
            className=" hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style={{backgroundColor:buttonText=="Added ☑️"?"#ff6348":"#1e90ff"}}
          >
            {buttonText}
          </button>
        </div>
        <img
          className="w-full h-full rounded-md"
          src={RESTAURANT_ITEMS_IMG + imageId}
        />
      </div>
    </div>
  );
}
