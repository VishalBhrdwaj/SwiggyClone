import { useContext, useEffect, useState } from "react";
import { RESTAURANT_ITEMS_IMG } from "../../utils/constants";
import { TotalBill } from "../../utils/BillOfItemsContext";

export default CartItems = ({ item }) => {
    const [itemCount,setItemCount]=useState(1);
    const {totalBill,setTotalBill}=useContext(TotalBill)

    function increaseItemCount(){
        setItemCount(itemCount+1)
        setTotalBill(totalBill+(item.price/100));
    }

    function decreaseItemCount(){
        if(itemCount>1)
        {
            setItemCount(itemCount-1)
            setTotalBill(totalBill-(item.price/100));
        }
            
    }
    function deleteItem(){
        
        setTotalBill(totalBill-(itemCount*(item.price/100)));
        setItemCount(1)
    }
    useEffect(()=>{
        setTotalBill(totalBill+(item.price/100))
    },[])
  return (
    <div className="h-2/5 w-full bg-red-300 rounded-xl mt-3 pt-3 pl-[20] flex">
     {/* Imgae div */}
      <div className="h-5/6 w-3/12 rounded">
        <img className="w-full h-full rounded"
        src={RESTAURANT_ITEMS_IMG+item.imageId}/>
      </div>
      {/* Content Div */}
      <div className="w-8/12 h-5/6 bg-white ml-2 p-3">
        <h3 className="font-semibold text-lg">{item.name}</h3>
        <h3 className="font-semibold text-lg">₹{item.price/100}</h3>
        {/* Button Div */}
        <div className="flex mt-10  justify-between">
            <div className="flex">
            <button onClick={decreaseItemCount} className="bg-blue-500 text-white hover:bg-blue-700 py-2 px-3  font-bold rounded">−</button>
            <div className="px-3 w-10 py-2 overflow-hidden">{itemCount}</div>
            <button onClick={increaseItemCount} className="bg-blue-500 text-white hover:bg-blue-700 py-2 px-3  font-bold rounded">+</button>

            </div>
            <div className="">
            <button onClick={deleteItem} class="bg-red-500 hover:bg-red-700  text-white font-bold py-2 px-4 rounded">
      Delete
    </button>
            </div>
        </div>
      </div>
      
    </div>
  );
};

// <div>
// <div className="h-5/6 w-36  bg-black mt-1 mr-2 rounded-lg flex justify-between">

//   <img
//     className="w-full h-full rounded-md"
//     src={RESTAURANT_ITEMS_IMG+item.imageId}
//   />
//    <div className="w-4/6 bg-black">
//    <div className="ml-10 text-lg font-semibold">{item.name}</div>
//    <div className="ml-10 text-lg font-semibold">{item.price}</div>

//    <div className=" h-10 w-20 flex justify-between mt-10 ml-5">
//     <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">
//        −
//     </button>
//     <div className="bg-white py-1 px-3">Hi</div>
//    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3  rounded">
//         +
//     </button>

//     <div className="ml-6">
    // <button class="bg-red-500 hover:bg-red-700 ml-32 text-white font-bold py-2 px-4 rounded">
    //   Delete
    // </button>
//   </div>

//    </div>
//    </div>
// </div>

// </div>
