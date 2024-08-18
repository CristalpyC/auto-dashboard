import { createSlice } from "@reduxjs/toolkit";

const totalSellsSlice = createSlice({
    name: 'total',
    initialState: 0,
    reducers: {
        setTotal: (state, action) => { return action.payload }
    }
})

export const { setTotal } = totalSellsSlice.actions;
export default totalSellsSlice.reducer;