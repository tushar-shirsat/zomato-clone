import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    cart: [],
    total: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        setCart: (state,action) =>{
            state.cart = [...state.cart,action.payload];
        },
        setIncQty: (state,action) =>{
            const index = state.cart.findIndex(item => item.id === action.payload.id);
            state.cart[index] = {...state.cart[index],qty: action.payload.qty+1};
        },
        setDecQty: (state,action) =>{
            const index = state.cart.findIndex(item => item.id === action.payload.id);
            state.cart[index] = {...state.cart[index],qty: action.payload.qty-1};
        },
        setRemoveCart: (state,action) =>{
            const item =state.cart.filter(cart => cart.id !== action.payload);
            state.cart = item;
        },
        setTotal: (state,action) =>{
            const total = action.payload.reduce((acc,item) => acc+(+item.price*item.qty),0);
            state.total = total;
        }
    }
})

export const { setCart,setIncQty,setDecQty,setRemoveCart,setTotal} = cartSlice.actions;
export const selectCart = (state) => state.cart.cart;
export const selectTotal = (state) => state.cart.total;
export default cartSlice.reducer;