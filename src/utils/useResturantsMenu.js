import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MENU_API } from "./constants";


export default function useRestaurantMenu(resId){
    const[resInfo,setResInfo]=useState(null);
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData=async()=>{

            const data=await fetch(MENU_API+resId);
            const jsonData= await data.json();
            setResInfo(jsonData)
            console.log(resInfo);

    }
    return resInfo;
}