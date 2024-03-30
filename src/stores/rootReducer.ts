import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./slices/authSlice";
import threadReducer from './slices/threadSlice'
import userReducer from "./slices/suggestSlice"
import { userSlice } from "./slices/userSlice";
import {replySlicec} from "./slices/replySlice"

export const { AUTH_CHECK, AUTH_LOGIN} = authSlice.actions
export const { GET_USERS} = userSlice.actions
export const { GET_ONE_THREAD } = replySlicec.actions;


export const authReducer = authSlice.reducer
export const searchReducer = userSlice.reducer
export const replyReducer =  replySlicec.reducer

// export const threaReducer = threadSlice.reducer

const rootReducer = combineReducers({
    auth: authReducer,
    suggest: userReducer,
    thread: threadReducer,
    user: searchReducer,
    reply: replyReducer

})


export default rootReducer