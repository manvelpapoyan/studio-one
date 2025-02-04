import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchNews, addNews, deleteNews, NewsItem } from "../../services/newsService";

// Fetch all news (Thunk)
export const getNews = createAsyncThunk("news/getNews", async () => {
    return await fetchNews();
});

// Add news (Thunk)
export const createNews = createAsyncThunk("news/createNews", async (newsItem: Omit<NewsItem, "id">) => {
    return await addNews(newsItem);
});

// Delete news (Thunk)
export const removeNews = createAsyncThunk("news/deleteNews", async (id: number) => {
    await deleteNews(id);
    return id;
});

const newsSlice = createSlice({
    name: "news",
    initialState: {
        newsList: [] as NewsItem[],
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getNews.pending, (state) => {
                state.loading = true;
            })
            .addCase(getNews.fulfilled, (state, action) => {
                state.loading = false;
                state.newsList = action.payload;
            })
            .addCase(createNews.fulfilled, (state, action) => {
                state.newsList.push(action.payload);
            })
            .addCase(removeNews.fulfilled, (state, action) => {
                state.newsList = state.newsList.filter((news) => news.id !== action.payload);
            });
    },
});

export default newsSlice.reducer;
