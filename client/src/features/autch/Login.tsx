import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, type RootState } from '../../store/store'
import * as api from './api'
import { loginThunk } from './authSlice'

function Login():JSX.Element {

const [email,setEmail]=useState('')
const [password,setPassword]=useState('')

const dispatch=useAppDispatch()
 const nav = useNavigate()
 const err = useSelector((store:RootState)=>store.auth.errUser)

 const login=(e:React.FormEvent<HTMLFormElement> ):void=>{
    e.preventDefault()
    dispatch(loginThunk({email,password}))
    
        }
  return (
    <div>
    <form onSubmit={login}>
        <input name='email' placeholder='email' type='email'value={email} onChange={(e)=>setEmail(e.target.value)} required/>
        <input name='password' type='password' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
        <button type='submit'>login</button>
    </form>
    <div>{err}</div>
</div>
  )
}

export default Login