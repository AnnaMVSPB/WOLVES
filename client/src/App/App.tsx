
import React, { useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';

import TransportPage from '../features/transport/TransportPage';
import AddTransport from '../features/transport/AddTransport';

import Navbar from '../features/navbar/Navbar';
import TransportCard from '../features/transport/TransportCard';
import './App.css';
import Registration from '../features/autch/Registration';
import Login from '../features/autch/Login';
import { useAppDispatch } from '../store/store';
import { verification } from '../features/autch/authSlice';
import { initial } from '../features/transport/transportSlice';


function App(): JSX.Element {
const dispatch = useAppDispatch()

  useEffect(() => {
dispatch(initial())
dispatch(verification())
    return () => console.log('clear');
  }, []);

  return (
 
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<TransportPage />} />
           <Route path='/addTransport' element={<AddTransport />} />
          <Route path='/transport/:idTransport' element={<TransportCard />} /> 
          <Route path='/registration' element={<Registration/>} />
          <Route path='/login' element={<Login/>} />
        </Route>
      </Routes>
   
  );
}

export default App;
