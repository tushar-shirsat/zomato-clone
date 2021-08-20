import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import cartRecucer from '../features/cart/cartSlice';
import userReducer from '../features/user/userSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartRecucer,
    user: userReducer
  },
});
