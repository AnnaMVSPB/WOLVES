export type User={
    id:number;
    name:string;
    email:string;
    password:string;
    avatar:string;
}

 export type Login ={
   
    email:string;
    password:string;
 }
 export type State = {
   user:User | null;
   errUser:string | undefined
}

export type UserWithoutId = Omit<User, 'id'>