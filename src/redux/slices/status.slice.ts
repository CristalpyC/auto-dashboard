import { createSlice } from "@reduxjs/toolkit";

const statusSlice = createSlice({
    name: 'status',
    initialState: '',
    reducers: {
        setStatus: (_state, action) => { return action.payload }
    }
})

export const { setStatus } = statusSlice.actions;
export default statusSlice.reducer;