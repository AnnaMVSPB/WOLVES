import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';


import authSlice from '../features/autch/authSlice';
import transportSlice from '../features/transport/transportSlice';


const store = configureStore({
 reducer: {
   auth: authSlice,
 transports:transportSlice
 }
});


export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;