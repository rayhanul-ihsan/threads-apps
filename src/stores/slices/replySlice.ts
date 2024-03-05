import { createSlice } from "@reduxjs/toolkit";
import { IThread } from "../../interface/thread";

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
      likes: 0,
      replies: 0,
    },
  };
  

export const threadSlices = createSlice({
    name: "threads",
    initialState: initialThreadsState,
    reducers: {
      GET_ONE_THREAD: (state, action) => {
        state.threads = action.payload;
      },
    },
  });
