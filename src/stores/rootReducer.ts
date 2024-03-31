import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./slices/authSlice";
import threadReducer from './slices/threadSlice'
import userReducer from "./slices/suggestSlice"
import { userSlice } from "./slices/userSlice";
import {replySlice} from "./slices/replySlice"
import followReducer from "./slices/followSlice";

export const { AUTH_CHECK, AUTH_LOGIN} = authSlice.actions
export const { GET_USERS} = userSlice.actions
export const { GET_ONE_THREAD } = replySlice.actions;


export const authReducer = authSlice.reducer
export const searchReducer = userSlice.reducer
export const replyReducer =  replySlice.reducer

// export const threaReducer = threadSlice.reducer

const rootReducer = combineReducers({
    auth: authReducer,
    suggest: userReducer,
    thread: threadReducer,
    user: searchReducer,
    reply: replyReducer,
    follow: followReducer

})


export default rootReducer