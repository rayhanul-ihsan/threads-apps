import { IUser } from "../../interface/user";
import { setAuthToken } from "../../libs/api";
import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

const initialAuthState: IUser = {
  id: 0,
  full_name: "",
  user_name: "",
  email: "",
  password: "",
  profile_picture: "",
  image_cover: "",
  bio: "",
  threads: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    AUTH_LOGIN: (state, action) => {
      const { token } = action.payload;
      localStorage.setItem("token", token);
      setAuthToken(token);


      const {
        id,
        email,
        full_name,
        user_name,
        profile_picture,
        image_cover,
        bio,
        threads,
      } = action.payload.user;


      state.id = id;
      state.email = email;
      state.full_name = full_name;
      state.user_name = user_name;
      state.profile_picture = profile_picture;
      state.image_cover = image_cover;
      state.bio = bio;
      state.threads = threads;
    },
    AUTH_CHECK: (state, action) => {
      // console.log(action);
      
      const {
        id,
        email,
        full_name,
        user_name,
        profile_picture,
        image_cover,
        bio,
        threads,
      } = action.payload.user;

      state.id = id;
      state.email = email;
      state.full_name = full_name;
      state.user_name = user_name;
      state.profile_picture = profile_picture;
      state.image_cover = image_cover;
      state.bio = bio;
      state.threads = threads;
    },
    // AUTH_ERROR: () => {
    //   localStorage.removeItem("token");
    // },
    // AUTH_LOGOUT: () => {
    //   localStorage.removeItem("token");
    // },
  },
});
