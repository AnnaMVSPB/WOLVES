import React from 'react';
import { Link, Outlet} from 'react-router-dom';
import './nav.css'
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import Footer from '../footer/Footer';
import type { User } from '../autch/type';

function Navbar(): JSX.Element {

  const user:User | null = useSelector((store:RootState)=>store.auth.user)
  return (
    <div className='applicationContainer'>
      <div className='nav'>
      
          <li>
            <Link to="/">Transport</Link>
          </li>
          <li>
            <Link to="/addTransport">AddTransport</Link>
          </li>
          {
!user ?  <> <li>
<Link to="/registration">Registration</Link>
</li>
<li>
<Link to="/login">Login</Link>
</li>
</>
: 
<>
  <p>{`привет ${user.name}`}</p>
  <img alt='...' src={user.avatar} style={{width:'50px',height:'50px'}}/>
</>
          }
       
       
      </div>
      <Outlet />
      <Footer/>
    </div>
  );
}

export default Navbar;
