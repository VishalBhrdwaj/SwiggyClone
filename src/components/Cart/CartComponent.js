
import { useDispatch, useSelector } from "react-redux";
import CartItems from "./CartItems";
import Store from "../redux/Store";
import { useState } from "react";
import Emptycart from "./Emptycart";

export default CartComponent = () => {
  const totalBill=useSelector(Store=>Store.cart.totalBill);
 
  const cartItems=useSelector(Store=>Store.cart.items);
  console.log(cartItems);

  if(cartItems.length==0)
    return <EmptyCart/>
  return (
    
    <div className="w-full h-auto max-h-min p-10 bg-slate-200 flex justify-center">
      <div className="h-4/5 bg-white w-3/12 p-4">
        <div className="h-5/6 w-full pt-4 pl-4">
          <div className="font-semibold text-2xl border-b-2 border-sky-950 w-5/6">Price Details</div>
          <div className=" flex justify-between w-5/6 mt-4 text-xl">
            <span>Total Price</span>
            <span>₹{totalBill}</span>
          </div>
          <div className=" flex justify-between w-5/6 mt-4 text-xl">
            <span>Discount</span>
            <span>₹{totalBill}</span>
          </div>
          <div className=" flex justify-between w-5/6 mt-4 text-xl border-dotted border-b-2 border-sky-950 pb-5">
            <span>Delivery Charges</span>
            <span>{totalBill>500 ? "Free":"₹ 100"}</span>
          </div>
          <div className=" flex justify-between w-5/6 mt-4 font-semibold   text-xl border-dotted border-b-2 border-sky-950 pb-3">
            <span>Total Amount</span>
            <span>₹{totalBill}</span>
          </div>
          <div className=" flex justify-between w-5/6 mt-4 text-lg border-dotted border-b-2 border-sky-950 pb-3">
            <span>You will save ₹2,140 on this order</span>

          </div>

        </div>
      </div>
      <div className="w-6/12 p-10 pt-0">
        { cartItems.length==0 ?<TempCartItem/> :(
          cartItems.map((item,index)=>{
            const prevBill=totalBill;
            // setTotalBill(prevBill+(item.price/100))
            return <CartItems key={index} item={item}/>
          })
        )
           
        }
      </div>
    </div>
  );
};
