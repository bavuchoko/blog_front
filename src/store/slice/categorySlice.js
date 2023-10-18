import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
    name: 'category',
    initialState: [],
    reducers: {
        setCategory: (state, action) => {
            return action.payload;
        },
        resetCategory: () => [],
    },
});

export const { setCategory,resetCategory } = categorySlice.actions;
export default categorySlice.reducer;