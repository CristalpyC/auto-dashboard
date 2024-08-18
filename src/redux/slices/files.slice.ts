import { ExtFile } from "@files-ui/react";
import { createSlice } from "@reduxjs/toolkit";

const init: ExtFile[] = [];

const fileSlice = createSlice({
    name: 'files',
    initialState: init,
    reducers: {
        setFiles: (_state, action) => { return action.payload }
    }
})

export const { setFiles } = fileSlice.actions;
export default fileSlice.reducer;