import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './slice/categorySlice';
import authReducer from "./slice/authSlice";

export const store = configureStore({
    reducer: {
        menu: categoryReducer,
        auth: authReducer
    },
});



export default store;