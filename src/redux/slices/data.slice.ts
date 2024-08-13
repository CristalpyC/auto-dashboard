import { createSlice } from "@reduxjs/toolkit";
import { Data } from "@/interfaces/data";

const init: Data[] = [];

const carsDataSlice = createSlice({
    name: 'carsData',
    initialState: init,
    reducers: {
        setData: (state, action) => { return action.payload }
    }
})

export const { setData } = carsDataSlice.actions;
export default carsDataSlice.reducer;