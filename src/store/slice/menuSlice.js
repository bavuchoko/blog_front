import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
    name: 'menu',
    initialState: [],
    reducers: {
        setMenu: (state, action) => {
            return action.payload;
        },
        resetMenu: () => [],
    },
});

export const { setMenu,resetMenu } = menuSlice.actions;
export default menuSlice.reducer;