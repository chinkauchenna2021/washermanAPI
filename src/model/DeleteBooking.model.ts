import { PrismaClient } from '@prisma/client'
import {Request , Response , NextFunction} from 'express'



export function  DeleteSingleBookingModel(){
    return async function(prisma:PrismaClient , req:Request){
           const {id} = req.body;
       const deleteBooking =  await prisma.bookservice.delete({
                where:{
                     id:id
                }
            })
        return deleteBooking ;
    }
}