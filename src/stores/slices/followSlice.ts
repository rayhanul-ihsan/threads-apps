import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";
import { IFollow } from "../../interface/user";
import { API } from "../../libs/api";

export const fetchFollow = createAsyncThunk(
  "follow/fetchFollow",
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.get("/follow", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue("Failed to fetch data form follow!!!");
    }
  }
);
interface followState {
  data: { 
    followers: IFollow[];
    followings: IFollow[];
  };
  isLoading: Boolean;
  isError: Boolean;
}
const initialState: followState = {
  data: {
    followers: [],
    followings: [],
  },  
  isLoading: false,
  isError: false,
};

const followSlice = createSlice({
  name: "follow",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFollow.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchFollow.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchFollow.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

// Selector untuk menghitung jumlah pengikut
export const selectFollowersCount = createSelector(
  (state: { follow: followState }) => state.follow.data.followers,
  (followers) => followers.length
);

// Selector untuk menghitung jumlah yang diikuti
export const selectFollowingsCount = createSelector(
  (state: { follow: followState }) => state.follow.data.followings,
  (followings) => followings.length
);

export default followSlice.reducer;
