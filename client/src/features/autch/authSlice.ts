import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { State , UserWithoutId, Login } from "./type";
import * as api from './api'

const initialState:State={user:null,errUser:''}

export const registgation = createAsyncThunk (
    'user/registration',(obj:UserWithoutId)=> api.regaFetch(obj)
)
export const verification = createAsyncThunk (
    'user/verification',()=> api.werifFetch()
)
export const loginThunk = createAsyncThunk (
  'user/login',(obj:Login)=> api.loginFetch(obj)
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder

          .addCase(registgation.fulfilled, (state, action) => {

            state.user = action.payload.user;
            state.errUser=''
          })
          .addCase(registgation.rejected, (state, action) => {
     
            state.errUser = action.error.message;
          })

          .addCase(verification.fulfilled, (state, action) => {

            state.user = action.payload;
            state.errUser=''
          })
          .addCase(verification.rejected, (state, action) => {
     
            state.errUser = action.error.message;
          })
          .addCase(loginThunk.fulfilled, (state, action) => {

            state.user = action.payload.user;
            state.errUser=''
          })
          .addCase(loginThunk.rejected, (state, action) => {
     
            state.errUser = action.error.message;
          });
      }
     });
     
   

export default authSlice.reducer;