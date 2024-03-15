import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    list: [],
    isLoading: false,
    error: null
}

// **************** Shows Slice*******************

export const fetchShowsList = createAsyncThunk('TvMaze/fetchShowsList', async () => {
    const resp = await axios.get('https://api.tvmaze.com/shows?page=1')
    const data = await resp.data;
    console.log(data)
    return data
})

export const ShowsSlice = createSlice({
    name: 'TvMaze',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchShowsList.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(fetchShowsList.fulfilled, (state, action) => {
            state.list = action.payload
            state.isLoading = false
        })

        builder.addCase(fetchShowsList.rejected, (state, action) => {
            state.error = action.error.message
            state.isLoading = false
        })
    }
})

export default ShowsSlice.reducer;