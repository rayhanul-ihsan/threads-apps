import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/authSlice";
import threadReducer from './slices/threadSlice'
import userReducer from "./slices/suggestSlice"
import searchReducer from "./slices/searchSlice"

export const { AUTH_CHECK, AUTH_LOGIN, AUTH_ERROR,AUTH_LOGOUT} = authSlice.actions
// export const { SEND_THREAD} = threadSlice.actions


export const authReducer = authSlice.reducer

// export const threaReducer = threadSlice.reducer

const rootReducer = combineReducers({
    auth: authReducer,
    suggest: userReducer,
    thread: threadReducer,
    search: searchReducer

})


export default rootReducer