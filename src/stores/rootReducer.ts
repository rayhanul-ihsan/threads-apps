import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/authSlice";
import threadReducer from './slices/threadSlice'
import userReducer from "./slices/suggestSlice"
import { userSlice } from "./slices/userSlice";

export const { AUTH_CHECK, AUTH_LOGIN, AUTH_ERROR,AUTH_LOGOUT} = authSlice.actions
export const { GET_USERS} = userSlice.actions


export const authReducer = authSlice.reducer
export const searchReducer = userSlice.reducer

// export const threaReducer = threadSlice.reducer

const rootReducer = combineReducers({
    auth: authReducer,
    suggest: userReducer,
    thread: threadReducer,
    user: searchReducer

})


export default rootReducer