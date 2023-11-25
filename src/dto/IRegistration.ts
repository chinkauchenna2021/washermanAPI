import {Request , Response , NextFunction} from 'express' 
import { PrismaClient } from "@prisma/client"
import { IUsersLogin } from "./UsersLogin"

// global decleration for JWT

declare global{
    namespace Express{
      interface Request{
        users: IUsersLogin
      }
    }
}


export interface IRegistration{
    id?: string;
    email: string;
    password: string;
    fistname: string;
    lastname: string;
    address: string;
    pics?: string;
    balance?: number | null;
   
}