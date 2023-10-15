import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import type { RootState } from '../../store/store';


function TransportCard(): JSX.Element {

  const { idTransport } = useParams();
  const navigate = useNavigate();
  const transports = useSelector((store:RootState)=>store.transportsState.transports)
  let transport;

  if (transports.length > 0) {
    transport = transports.find((transport1) => transport1.id === +idTransport);
  }

  return (
    <div>
      <h2>{transport?.name}</h2>
      {transport?.Photos.map((img) => <img src={img.url} alt="" />)}
      <p>{transport?.description}</p>
      <p>{transport?.price}</p>
      <button type='button' onClick={() => navigate(-1)}>ВЕРНУТЬСЯ В ПРОШЛОЕ НЕЛЬЗЯ НО МОЖНО</button>
    </div>
  );
}

export default TransportCard;
