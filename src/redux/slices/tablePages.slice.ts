import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
    name: 'page',
    initialState: 0,
    reducers: {
        setPage: (state, action) => { return action.payload }
    }
})

export const { setPage } = pageSlice.actions;
export default pageSlice.reducer;