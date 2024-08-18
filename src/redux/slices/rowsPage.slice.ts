import { createSlice } from "@reduxjs/toolkit";

const rowsPerPage = createSlice({
    name: 'rowsPerPage',
    initialState: 10,
    reducers: {
        setRowsPerPage: (_state, action) => { return action.payload }
    }
})

export const { setRowsPerPage } = rowsPerPage.actions;
export default rowsPerPage.reducer;