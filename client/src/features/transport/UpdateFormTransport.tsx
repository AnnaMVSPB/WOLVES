import React, { useState } from 'react'

import type { Transport } from './Type/transport'
import { useAppDispatch } from '../../store/store'
import { updateThunk } from './transportSlice'



function UpdateFormTransport({transport,stateUpdate}:{transport:Transport,stateUpdate:()=>void}):JSX.Element {
    const [name,setName] = useState(transport.name)
    const [price,setPrice] = useState(transport.price)
    const [description,setDescription] = useState(transport.description)
    const dispatch =useAppDispatch()

    const updateTransport=():void=>{
      dispatch(updateThunk({name,price,description,id:transport.id}))
       stateUpdate()
    }
  return (
    <div>
        <form onSubmit={updateTransport}>
            <input type='text' name='name' value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type='text' name='description' value={description} onChange={(e)=>setDescription(e.target.value)}/>
            <input type='number' name='price' value={price} onChange={(e)=>setPrice(+e.target.value)}/>
            <button type='submit'>save</button>
        </form>
    </div>
  )
}

export default UpdateFormTransport