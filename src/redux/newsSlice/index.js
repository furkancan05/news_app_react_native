import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import API from "../../config/apiKey"

const api = new API()

export const getNews = createAsyncThunk("getnews",
    async () => {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${api.getApiKey()}`).then(res => res.json())
        return response.articles
    }
)

export const newsSlice = createSlice({
    name: "news",
    initialState: {
        news: [],
        isLoading: true
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getNews.fulfilled, (state, action) => {
            state.news = action.payload
            state.isLoading = false
        })
    }

})

export default newsSlice.reducer