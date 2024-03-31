import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IThread } from "../../interface/thread";
import { API } from "../../libs/api";

export const fetchThread = createAsyncThunk("thread/fetchThread", async () => {
  try {
    const response = await API.get("/thread");
    return response.data;
  } catch (error) {
    throw error;
  }
});

interface threadState {
  data: IThread[];
  isLoading: Boolean;
  isError: Boolean;
}

const initialState: threadState = { 
  data: [],
  isLoading: false,
  isError: false,
};

const threadSlice = createSlice({
  name: "thread",
  initialState, 
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchThread.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchThread.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchThread.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
      state.data = [];
    });
  },
});

export default threadSlice.reducer;

