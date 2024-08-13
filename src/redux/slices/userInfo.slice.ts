import { createSlice } from "@reduxjs/toolkit";


const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState: '',
    reducers: {
        setUserInfo: (state, action) => { return action.payload }
    }
})

export const { setUserInfo } = userInfoSlice.actions;
export default userInfoSlice.reducer;