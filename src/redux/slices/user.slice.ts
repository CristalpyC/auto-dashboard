import { createSlice } from "@reduxjs/toolkit";

const init: any = null;

const userSlice = createSlice({
    name: 'user',
    initialState: init,
    reducers: {
        setUser: (state, action) => { return action.payload }
    }
})

export const { setUser } = userSlice.actions;
export default userSlice.reducer;