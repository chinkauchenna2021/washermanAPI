import { PrismaClient } from '@prisma/client'
import { Jwt } from 'jsonwebtoken'
import {Express , Request , Response , NextFunction} from 'express'
import { IUserLoginModel } from '../dto/UsersLogin'



export function UsersLoginModel(){
    return async function(prisma:PrismaClient , sanitizedInput:IUserLoginModel){
     try{
    const LoginDetails = await prisma.user.findFirst({
        where:{
               email:sanitizedInput.email
        }
    })    
      return LoginDetails;
     }catch(err){

        throw new Error("users Login Failed "+ err)
     }


    }
}