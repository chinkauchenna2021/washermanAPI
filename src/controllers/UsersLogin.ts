import express ,  {Express , Response ,Request } from 'express'
import Jwt  from 'jsonwebtoken'
import {z} from 'zod'
import { ZUsersLogin } from '../lib/Zod'
import { UsersLoginModel } from '../model/UsersLogin.model'
import prisma from '../lib/PrismaGlobalClient'
import { IUsersLogin } from '../dto/UsersLogin'




export async function UsersLogin(){
    return async function(req:Request , res:Response){
       try{
           const usersLogin  =  ZUsersLogin.parse(req.body) 
            // model here 
            const  login = UsersLoginModel();
            const userLoginResponse = await login(prisma , usersLogin)
              if(userLoginResponse){
                  req.users = userLoginResponse as IUsersLogin; 
                   
                    const usersLoginToken =  Jwt.sign(userLoginResponse , String(process.env.JWT_SECRET) , {expiresIn:"1d"})
                    res.status(201).json({user:userLoginResponse , userToken:usersLoginToken})
              }
              res.json({message:"User Login Failed"});
       }catch(error){
        if(error instanceof z.ZodError){
            res.status(400).json({message:"input validation error " , error : error.errors} )
        }else{
          res.status(500).json({message:"server error "})
        }
         
       }


    }
}