import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { StateTransports, TransportId, UpdateTransport} from "./Type/transport";
import * as api from './api'

const initialState:StateTransports={transports:[],errorTransport:''}

export const initial = createAsyncThunk (
    'transports/init',()=> api.loadFetch()
)
export const addThunk = createAsyncThunk (
  'transports/add',(obj:FormData)=> api.addTransportFetch(obj)
)
export const deleteThunk = createAsyncThunk (
  'transports/delete',(id:TransportId)=> api.delTransportFetch(id)
)
export const updateThunk = createAsyncThunk (
  'transports/update',(obj:UpdateTransport)=> api.updateTransportFetch(obj)
)

const transportsSlice = createSlice({
    name: 'transports',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder

          .addCase(initial.fulfilled, (state, action) => {

            state.transports = action.payload
            state.errorTransport=''
          })
          .addCase(initial.rejected, (state, action) => {
     
            state.errorTransport = action.error.message
          })
          .addCase(addThunk.fulfilled, (state, action) => {

            state.transports.push( action.payload)
            state.errorTransport=''
          })
          .addCase(addThunk.rejected, (state, action) => {
     
            state.errorTransport = action.error.message;
          })
          .addCase(deleteThunk.fulfilled, (state, action) => {

            state.transports=state.transports.filter(transport=>transport.id !== action.payload.id)
            state.errorTransport=''
          })
          .addCase(deleteThunk.rejected, (state, action) => {
     
            state.errorTransport = action.error.message;
          })
          .addCase(updateThunk.fulfilled, (state, action) => {

            state.transports=state.transports.map(transport=>transport.id === action.payload.id ? action.payload : transport)
            state.errorTransport=''
          })
          .addCase(updateThunk.rejected, (state, action) => {
     
            state.errorTransport = action.error.message;
          })
      }
     });
     
   

export default transportsSlice.reducer;