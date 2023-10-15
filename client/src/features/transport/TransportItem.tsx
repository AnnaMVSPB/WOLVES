
import React, {   useState } from 'react';
import { Link } from 'react-router-dom';
import type { Transport } from './Type/transport';


import UpdateFormTransport from './UpdateFormTransport';
import './styles/transport.css';
import { useAppDispatch } from '../../store/store';
import { deleteThunk } from './transportSlice';


type TransportItemProps = {
  transport: Transport;

};

function TransportItem({ transport}: TransportItemProps): JSX.Element {
  const [state, setState] = useState(false);
  const dispatch =useAppDispatch()
 
  const delTransport = (): void => {
    dispatch(deleteThunk(transport.id))
 
  };
  const stateUpdate = (): void => {
    setState(false);
  };
  return (
    <div className='card'>
      {!state ? (
        <>
          <h3>{transport.name}</h3>
          <div className='imgCont'>
          <Link to={`/transport/${transport.id}`} >
            <img src={transport.Photos[0].url} alt="..." />
          </Link>
          </div>
          <p>цена: {transport.price} тугриков</p>
          <p>{transport.description}</p>
          <div>
          <button onClick={delTransport} type="button" ><img  style={{width:'50px',height:'50px'}} alt='delete' src='/img/delete.png' /> </button>
          <button type="button" onClick={() => setState(true)}>
          <img  style={{width:'50px',height:'50px'}} alt='delete' src='/img/update.png' />
          </button>
          </div>
        </>
      ) : (
        <UpdateFormTransport transport={transport} stateUpdate={stateUpdate} />
      )}
    </div>
  );
}

export default TransportItem;
