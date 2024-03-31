import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IFollow } from "../../interface/user";
import { API } from "../../libs/api";

export const fetchFollow = createAsyncThunk("follow/fetchFollow", async (_,{rejectWithValue}) => {
    try {
        const res = await API.get("/follow", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
        })
        return res.data
    } catch (error) {
        return rejectWithValue("Failed to fetch data form follow!!!")        
    }
})
interface followState {
    data: {
        followers: IFollow[]
        followings: IFollow[]
    };
    isLoading: Boolean;
    isError: Boolean;
    follower: IFollow[];
    following: IFollow[];
}
const initialState: followState = {
    data:{
        followers: [],
        followings: []
    },
    follower: [],
    following: [],
    isLoading: false,
    isError: false
}

const followSlice = createSlice({
    name: "follow",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchFollow.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchFollow.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
        })
        builder.addCase(fetchFollow.rejected, (state) => {
            state.isLoading = false
            state.isError = true

        })
    }
})

export default followSlice.reducer

// const initialState :{ follower: IFollow[]; following: IFollow[] } = {
//     follower: [],
//     following: []
// }
// console.log("follower",initialState.follower)
// console.log("following",initialState.following)
// export const followSlice = createSlice({
//     name: "follow",
//     initialState,
//     reducers: {
//      GET_FOLLOW: (state, action) => {
//         state.follower = action.payload.follower
//         state.following = action.payload.following
//      }   
//     }
// })

// export const {GET_FOLLOW} = followSlice.actions