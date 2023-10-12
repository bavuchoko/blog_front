import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './slice/menuSlice';
import authReducer from "./slice/authSlice";

export const store = configureStore({
    reducer: {
        menu: menuReducer,
        auth: authReducer
    },
});



export default store;