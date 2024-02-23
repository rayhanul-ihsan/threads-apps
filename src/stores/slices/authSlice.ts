
import { IUser } from "../../interface/user";
import { setAuthToken } from "../../libs/api";
import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

const initialAuthState: IUser = {
    id: 0,
    full_name: '',
    user_name: '',
    email: '',
    password: '',
    profile_picture: '',
    image_cover: '',
    bio: ''    
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        AUTH_LOGIN: (state, action) => {
            console.log(action.payload)
            const data = jwtDecode(action.payload.token)
            console.log('token',data);
            // state.bio = data.
            

            const { 
                id,
                email,
                full_name,
                user_name,
                profile_picture,
                image_cover,
                bio
             } = data.obj

             const { token } = action.payload

             setAuthToken(token)
             localStorage.setItem('token', token)

             state.id = id
             state.email = email
             state.full_name = full_name
             state.user_name = user_name
             state.profile_picture = profile_picture
             state.image_cover = image_cover
             state.bio = bio
        },
        AUTH_CHECK:(state, action) =>{
            const { 
                id,
                email,
                full_name,
                user_name,
                profile_picture,
                image_cover,
                bio
             } = action.payload.user

             state.id = id
             state.email = email
             state.full_name = full_name
             state.user_name = user_name
             state.profile_picture = profile_picture
             state.image_cover = image_cover
             state.bio = bio
        },
        AUTH_ERROR: () => {
            localStorage.removeItem('token')
        },
        AUTH_LOGOUT: () => {
            localStorage.removeItem('token')
        }
    }
})