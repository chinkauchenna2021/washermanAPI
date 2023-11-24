import { Response ,Request , NextFunction } from "express";
import Jwt from 'jsonwebtoken'
import { IUsersLogin } from "../dto/UsersLogin";




export function UsersValidator(req:Request){
  const tokenwithbearer =   req.get('Authorization') as string
  const validation = Jwt.verify(tokenwithbearer?.split(' ')[0] , String(process.env.JWT_SECRET)) as IUsersLogin
if(validation){
    req.users = validation 
    return true ;
}
}