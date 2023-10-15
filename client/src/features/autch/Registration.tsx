import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import type { RootState } from '../../store/store';
import { useAppDispatch } from '../../store/store'
import { registgation } from './authSlice'

function Registration():JSX.Element {
const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const dispatch=useAppDispatch()
 const nav = useNavigate()
 const {errUser,user} = useSelector((store:RootState)=>store.auth)
useEffect(()=>{
if (user){
  nav('/')
}
},[user])


    const rega=(e:React.FormEvent<HTMLFormElement> ):void=>{
      e.preventDefault()

      dispatch(registgation({name,email,password}))

    }
  return (
    <div>
        <form onSubmit={rega}>
            <input name='name' placeholder='name' value={name} onChange={(e)=>setName(e.target.value)} required/>
            <input name='email' placeholder='email' type='email'value={email} onChange={(e)=>setEmail(e.target.value)} required/>
            <input name='password' type='password' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
            <button type='submit'>rega</button>
        </form>
        <div>{errUser}</div>
    </div>
  )
}

export default Registration