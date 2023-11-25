import { PrismaClient } from '@prisma/client'
import { Jwt } from 'jsonwebtoken'
import {Express , Request , Response , NextFunction} from 'express'
import { IUserLoginModel } from '../dto/UsersLogin'



export function AllUsersBooking(){
    return async function(prisma:PrismaClient){
     try{
    const allBookings = await prisma.bookservice.findMany();  
      return allBookings;
     }catch(err){

        throw new Error("fetching users booking failed  "+ err)
     }

    }
} 