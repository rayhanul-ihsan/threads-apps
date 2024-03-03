import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import  {IThread}  from "../../interface/thread"
import { API } from "../../libs/api"
import { IUser } from "../../interface/user"

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        try {

            const response = await API.get('/users')
            return response.data
          } catch (error) {
            throw error
          }
    }, 
    )

     interface userState  {
        data: data,
        isLoading: Boolean,
        isError: Boolean
      } 

    interface data {
      message: string,
      data: IUser[]
    }

    const initialState: userState = {
        data: {
          message : '',
          data : []
        },
        isLoading: false,
        isError: false
      } 
  

 const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
            console.log(state.data)
          })
        builder.addCase(fetchUsers.rejected, (state) => {
            state.isLoading = false
            state.isError = true
        })
       
    }
})

export default userSlice.reducer