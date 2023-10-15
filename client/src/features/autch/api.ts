/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { Login, UserWithoutId, User } from "./type";

export const regaFetch = async (obj:UserWithoutId):Promise<{message:string,user:User}> => {
    const res = await fetch(`/api/auth/reg`,
    {method:'post',
body:JSON.stringify(obj),
headers:{'content-type':"application/json"}
})

if (!res.ok) {
  const { message } = await res.json();
  throw message;
}
const data = await res.json();
return data;
};




  export const loginFetch = async (obj:Login):Promise<{message:string,user:User}> => {
    const res = await fetch(`/api/auth/login`,
    {method:'post',
body:JSON.stringify(obj),
headers:{'content-type':"application/json"}
})
const data =  await res.json()
  return data
  };


  export const werifFetch = async ():Promise<User> => {
    const res = await fetch(`/api/auth/verification`)
    const data = await res.json();
  return data

  }





