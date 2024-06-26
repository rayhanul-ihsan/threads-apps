import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { IUser } from "../../interface/user"
import { API } from "../../libs/api"

export const fetchSearch = createAsyncThunk(
    'users/fetchSearch',
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
        builder.addCase(fetchSearch.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchSearch.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
            console.log(state.data)
          })
        builder.addCase(fetchSearch.rejected, (state) => {
            state.isLoading = false
            state.isError = true
        })
       
    }
})

export default userSlice.reducer