import { createSlice } from "@reduxjs/toolkit";

const productUrlSlice = createSlice({
    name: 'productUrl',
    initialState: '',
    reducers: {
        setProductUrl: (_state, action) => { return action.payload }
    }
})

export const { setProductUrl } = productUrlSlice.actions;
export default productUrlSlice.reducer;