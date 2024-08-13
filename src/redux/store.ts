"use client"
import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "./slices/loading.slice";
import carsDataReducer from "./slices/data.slice";
import errorReducer from "./slices/error.slice";
import filesReducer from "./slices/files.slice";
import productUrlReducer from "./slices/productUrl.slice";
import rowsPageReducer from "./slices/rowsPage.slice";
import pageReducer from "./slices/tablePages.slice";
import userReducer from "./slices/user.slice";
import userInfoReducer from "./slices/userInfo.slice";

export const store = configureStore({
    reducer: {
        isLoading: loadingReducer,
        carsData: carsDataReducer,
        errorData: errorReducer,
        files: filesReducer,
        productUrl: productUrlReducer,
        rowsPerPage: rowsPageReducer,
        page: pageReducer,
        user: userReducer,
        userInfo: userInfoReducer
    }
});
