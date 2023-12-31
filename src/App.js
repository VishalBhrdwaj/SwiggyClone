import React, { Children, useState } from "react";
import ReactDOM  from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";

import Footer from "./components/Footer";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Body from "./components/Body";
import { RestaurantMenuPage } from "./components/RestaurantMenu/RestaurantMenuPage";
import CartComponent from "./components/Cart/CartComponent";

import LoginForm from "./components/Login/LoginForm";
import Store from "./components/redux/Store";
import { Provider } from "react-redux";
import LoginPage from "./components/Auth/LoginPage";



const App=()=>{

    const [cartItems,setCartItems]=useState([{name:"Vishal",price:2000,imageId:"9db769ca3ff44bb6372e8a652663eb6e"}])
    const [totalBill,setTotalBill]=useState(0);
    
  
    return(
        <>
        <Provider store={Store}>
        <NavBar/>
        {/* <LoginForm/> */}
           <Outlet/>
        <Footer/>
      </Provider>
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

            },
            {
                path:"/signin",
                element:<LoginPage/>

            }
           
        ],
        errorElement:<Error/>
    }
]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)