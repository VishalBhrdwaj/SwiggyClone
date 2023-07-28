import { useEffect, useState } from "react";
import { RESTAURANT_ITEMS_IMG } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { cartdelete, decrease, increase } from "../redux/CartSlice";

export default CartItems = (props) => {
  const {item}=props;
  const [itemCount,setItemCount]=useState(1);
  const [itemVisible,setItemVisible]=useState(false);

  const dispatch=useDispatch();

    function increaseItemCount(){
        setItemCount(itemCount+1)
        dispatch(increase(item.price/100))
    }

    function decreaseItemCount(){
        if(itemCount>1)
        {
            setItemCount(itemCount-1)
            dispatch(decrease(item.price/100))
        }
            
    }
    function deleteCartItem(){
      dispatch(decrease(itemCount*(item.price/100)))
      dispatch(cartdelete(item.id))
        
    }
    useEffect(()=>{
      
        dispatch(increase(item.price/100));
        setItemVisible(true);
       
    },[])
  return (
    <div className="h-[220] w-full bg-white rounded-xl mt-3 pt-3 pl-[20] flex">
     {/* Imgae div */}
      <div className="h-4/6 w-3/12 rounded">
        <img className="w-full h-full rounded"
        src={RESTAURANT_ITEMS_IMG+item.imageId}/>
      </div>
      {/* Content Div */}
      <div className="w-8/12 h-5/6 bg-white ml-2 p-3">
        <h3 className="font-semibold text-lg">{item.name}</h3>
        <h3 className="font-semibold text-lg">₹ {item.price/100}</h3>
        {/* Button Div */}
        <div className="flex mt-10  justify-between">
            <div className="flex">
            <button onClick={decreaseItemCount} className="bg-blue-500 text-white hover:bg-blue-700 py-2 px-3  font-bold rounded">−</button>
            <div className="px-3 w-10 py-2 overflow-hidden">{itemCount}</div>
            <button onClick={increaseItemCount} className="bg-blue-500 text-white hover:bg-blue-700 py-2 px-3  font-bold rounded">+</button>

            </div>
            <div className="">
            <button onClick={deleteCartItem} className="bg-red-500 hover:bg-red-700  text-white font-bold py-2 px-4 rounded">
      Delete
    </button>
            </div>
        </div>
      </div>
      
    </div>
  );
};

