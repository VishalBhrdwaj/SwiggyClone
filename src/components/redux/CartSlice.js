import { createSlice } from "@reduxjs/toolkit";

const CartSlice=createSlice({
    name:"cart",
    initialState:{
        items:["Apple","Banana"]
    },
    reducers:{
        addItems:(state,action)=>{
            state.items.push(action.payload);
        },
        clearCart:(state)=>{
            state.items=[];
        },
        deleteItem:(state,action)=>{
            state.items.pop();
        }
    }
})

export const {addItems,clearCart,deleteItem}=CartSlice.actions;
export default CartSlice.reducer