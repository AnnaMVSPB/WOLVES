/* eslint-disable @typescript-eslint/default-param-last */
import type { Action } from "./action"
import type { State } from "./type"

export const initState:State={transports:[]}

 export const transportReducer = (state:State = initState,action:Action):State=>{
switch (action.type) {

case 'transports/init':
    return {
...state,
transports:action.payload
    }
    case 'transports/deleTransport':
        return {
            ...state,
            transports:state.transports.filter(transport=>transport.id !== action.payload)
        }
  case 'transports/updateTransport':
    return {
        ...state,
        transports:state.transports.map(transport=>transport.id === action.payload.id ? action.payload : transport)
    }
    case 'transports/addTransport':
        return {
            ...state,
            transports:[...state.transports,action.payload]
        }
     default:
        return state
}
}