import {Express , Request , Response , NextFunction} from 'express'
import { UsersValidator } from '../hooks/UserLoginValidation'


export function UserAuth(req:Request ,res:Response, next:NextFunction){
     const isLogedIn =  UsersValidator(req);
     if(isLogedIn){
        next();
     }       

}