import { useContext } from "react";
import CartItems from "./CartItems";
import { CartItemsContext } from "../../utils/CartItemsContext";
import { TotalBill } from "../../utils/BillOfItemsContext";

export default CartComponent = () => {
    const cartItems=useContext(CartItemsContext);
    const {totalBill}=useContext(TotalBill)
  return (
    
    <div className="w-full h-screen mt-10 bg-blue-200 flex justify-center">
      <div className="h-4/5 w-3/12 bg-slate-500 p-4">
        <div className="h-5/6 w-full bg-yellow-200 pt-4 pl-4">
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
            <span>{totalBill>200 ? "Free":"₹ 100"}</span>
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
      <div className="h-4/5 max-h-full w-6/12 bg-neutral-400 p-10 overflow-hidden">
        {
            cartItems.cartItems.map((cartItem,index)=>{
               return <CartItems key={index} item={cartItem}/>
            })
        }
      </div>
    </div>
  );
};
