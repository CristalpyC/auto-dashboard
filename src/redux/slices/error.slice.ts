import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
    name: 'errorData',
    initialState: '',
    reducers: {
        setError: (_state, action) => { return action.payload }
    }
})

export const { setError } = errorSlice.actions;
export default errorSlice.reducer;