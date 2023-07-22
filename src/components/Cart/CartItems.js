import { useState } from "react";
import { RESTAURANT_ITEMS_IMG } from "../../utils/constants";

export default CartItems = () => {
    const [itemCount,setItemCount]=useState(1);

    function increaseItemCount(){
        setItemCount(itemCount+1)
    }

    function decreaseItemCount(){
        if(itemCount>1)
        {
            setItemCount(itemCount-1)
        }
            
    }
    function deleteItem(){
        
        // setTotalBill(totalBill-(itemCount*(item.price/100)));
        setItemCount(1);
    }
  return (
    <div className="h-2/5 w-full bg-red-300 rounded-xl mt-3 pt-3 pl-[20] flex">
     {/* Imgae div */}
      <div className="h-5/6 w-3/12 rounded">
        <img className="w-full h-full rounded"
        src={RESTAURANT_ITEMS_IMG+"ee5f8e06b300efc07c9fe3f4df40dfc4"}/>
      </div>
      {/* Content Div */}
      <div className="w-8/12 h-5/6 bg-white ml-2 p-3">
        <h3 className="font-semibold text-lg">Item Name</h3>
        <h3 className="font-semibold text-lg">₹ 200</h3>
        {/* Button Div */}
        <div className="flex mt-10  justify-between">
            <div className="flex">
            <button onClick={decreaseItemCount} className="bg-blue-500 text-white hover:bg-blue-700 py-2 px-3  font-bold rounded">−</button>
            <div className="px-3 w-10 py-2 overflow-hidden">{itemCount}</div>
            <button onClick={increaseItemCount} className="bg-blue-500 text-white hover:bg-blue-700 py-2 px-3  font-bold rounded">+</button>

            </div>
            <div className="">
            <button onClick={deleteItem} className="bg-red-500 hover:bg-red-700  text-white font-bold py-2 px-4 rounded">
      Delete
    </button>
            </div>
        </div>
      </div>
      
    </div>
  );
};