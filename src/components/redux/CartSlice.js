import { createSlice } from "@reduxjs/toolkit";

const CartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
        totalBill:0
    },
    reducers:{
        addItems:(state,action)=>{
            state.items.push(action.payload);
        },
        clearCart:(state)=>{
            state.items=[];
        },
        cartdelete:(state,action)=>{
            state.items=state.items.filter(item=>item.id!=action.payload)
        },
        increase:(state,action)=>{
            state.totalBill=state.totalBill+action.payload;
        },
        decrease:(state,action)=>{
            state.totalBill=state.totalBill-action.payload;
            console.log("decreaseed");
        },
    }
})

export const {addItems,clearCart,cartdelete,increase,decrease}=CartSlice.actions;
export default CartSlice.reducer