import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import type { RootState } from '../../store/store';
import { Transport } from './Type/transport';


function TransportCard(): JSX.Element {

  const { idTransport } = useParams();
  const navigate = useNavigate();
  const transports = useSelector((store:RootState)=>store.transports.transports)
  let transport;

  if (transports.length > 0 && idTransport) {
    transport = transports.find((transport1:Transport) => transport1.id === +idTransport);
  }

  return (
    <div>
      <h2>{transport?.name}</h2>
      {transport?.Photos.map((img:{url:string}) => <img src={img.url} alt="" />)}
      <p>{transport?.description}</p>
      <p>{transport?.price}</p>
      <button type='button' onClick={() => navigate(-1)}>ВЕРНУТЬСЯ В ПРОШЛОЕ НЕЛЬЗЯ НО МОЖНО</button>
    </div>
  );
}

export default TransportCard;
