import { useContext } from "react";
import CartItems from "./CartItems";
import { CartItemsContext } from "../../utils/CartItemsContext";

export default CartComponent = () => {
    const cartItems=useContext(CartItemsContext);
    console.log(cartItems);
  return (
    
    <div className="w-full h-screen mt-10 bg-blue-200 flex justify-center">
      <div className="h-4/5 w-3/12 bg-slate-500"></div>
      <div className="h-4/5 w-6/12 bg-neutral-400 p-10">
        {
            cartItems.cartItems.map((cartItem)=>{
               return <CartItems item={cartItem}/>
            })
        }
      </div>
    </div>
  );
};
