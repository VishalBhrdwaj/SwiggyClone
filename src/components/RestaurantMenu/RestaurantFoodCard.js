import { Button } from "react-bootstrap";
import { RESTAURANT_ITEMS_IMG } from "../../utils/constants";
import { useContext, useState } from "react";
import { CartItemsContext } from "../../utils/CartItemsContext";
export default function RestaurantFoodCard(props) {


const {name,description,price,imageId}=props.item.card.info;
const {cartItems,setCartItems}=useContext(CartItemsContext);


  return (
    
    <div className="w-100 h-40 mt-1 border-b-2 border-sky-500 flex justify-between">
      
      <div className="p-1 ml-5 ">
        <div className="text-xl">{name}</div>
        <div className=""> ₹{price/100}</div>
        {/* <div className="">{description}</div> */}
      </div>

      <div className="h-5/6 w-36  bg-black mt-1 mr-2 rounded-lg">
      <div className="absolute mt-[105] ml-6"><button onClick={()=>{

        let cartItem=cartItems;
        cartItem.push({
          name:name,
          description:description,
          price:price,
          imageId:imageId,
        })
        setCartItems(cartItem);
        console.log(cartItems);

      }} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Add +
</button></div>
        <img className="w-full h-full rounded-md" src={RESTAURANT_ITEMS_IMG+imageId} />
       
      </div>
      
    </div>
  );
}
