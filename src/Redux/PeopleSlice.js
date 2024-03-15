import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    list: [],
    isLoading: false,
    error: null
}

// **************** People Slice*******************

export const fetchPeopleList = createAsyncThunk('content/fetchPeopleList', async () => {
    const resp = await axios.get('https://api.tvmaze.com/people?page=1')
    const data = await resp.data
    return data
})

export const peopleSlice = createSlice({
    name: 'people',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPeopleList.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(fetchPeopleList.fulfilled, (state, action) => {
            state.isLoading = false
            state.list = action.payload
        })

        builder.addCase(fetchPeopleList.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    }
})

export default peopleSlice.reducer;