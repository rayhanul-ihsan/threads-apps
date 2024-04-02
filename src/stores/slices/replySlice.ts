import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IThread } from "../../interface/thread";

export const fetchReplyThread = createAsyncThunk(
  "reply/fetchReplyThread",
  async (_, { rejectWithValue }) => {
    try {
      
    } catch (error) {
      return rejectWithValue(error);
    }
  }
)

const initialThreadsState: { threads: IThread } = {
    threads: {
      author: {
        full_name: "",
        profile_picture: "",
        user_name: "",
      },
      content: "",
      createdAt: "",
      image: "",
      isLiked: false,
      id: 0,
      likes: [],
      replies: [], 
      reply: 0
    },
  };
  

export const replySlice = createSlice({
    name: "reply",
    initialState: initialThreadsState,
    reducers: {
      GET_ONE_THREAD: (state, action) => {
        state.threads = action.payload;
      },
    },
  });
