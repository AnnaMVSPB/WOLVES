import React from 'react';
import { useSelector } from 'react-redux';
import TransportItem from './TransportItem';

import './styles/transport.css';

import type { RootState } from '../../store/store';


function TransportPage(): JSX.Element {

  const transports = useSelector((store:RootState)=>store.transports.transports)

 

  return (
    <div>
        <h3>Здесь все транспорты</h3>
        <div >
        {transports &&
         transports.map((transport) => (
            <TransportItem transport={transport} key={transport.id}  />
          ))}
          </div>
      </div>
  );
}

export default TransportPage;
