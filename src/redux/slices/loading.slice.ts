import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
    name: 'isLoading',
    initialState: true,
    reducers: {
        setLoading: (_state, action) => { return action.payload }
    }
})

export const { setLoading } = loadingSlice.actions;
export default loadingSlice.reducer;