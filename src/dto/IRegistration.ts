import { PrismaClient } from "@prisma/client"
import { IUsersLogin } from "./UsersLogin"

// global decleration for JWT

declare global{
    namespace Express{
      interface Request{
        user: IUsersLogin
      }
    }
}


export interface IRegistrationController{
   prisma:PrismaClient
   usersInputObject:{
    email:string 
    password:string 
    fistname:string
    lastname:string
    address:string 
    pics:string 
   }
   
}