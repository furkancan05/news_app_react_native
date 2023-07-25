import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./newsSlice"

export default store = configureStore({
    reducer: {
        newsState: newsSlice
    }
})