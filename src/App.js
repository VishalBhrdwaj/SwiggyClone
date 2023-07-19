import React, { Children, useState } from "react";
import ReactDOM  from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";

import Footer from "./components/Footer";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Body from "./components/Body";
import ShimmerUI from "./components/ShimmerUI/ShimmerUI";
import { RestaurantMenuPage } from "./components/RestaurantMenu/RestaurantMenuPage";
import CartComponent from "./components/Cart/CartComponent";
import { CartItemsContext } from "./utils/CartItemsContext";


const App=()=>{

    const [cartItems,setCartItems]=useState([])

  
    return(
        <>
        <CartItemsContext.Provider value={{cartItems:cartItems,setCartItems:setCartItems}}>
        <NavBar/>
           <Outlet/>
        <Footer/>
      </CartItemsContext.Provider>
        
        </>
        
    )
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },

            {
                path:"/about",
                element:<AboutUs/>
            },
            {
                path:"/contact",
                element:<ContactUs/>
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenuPage/>
            },
            {
                path:"/cart",
                element:<CartComponent/>

            }
           
        ],
        errorElement:<Error/>
    }
]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)