import express , {Express , Request , Response , NextFunction} from 'express'
import {z} from  'zod'
import { CreateBookingModel } from '../model/CreateBooking.model';
import prisma from '../lib/PrismaGlobalClient';



export function CreateBooking(req:Request , res:Response , next:NextFunction){
    return async function(){
       try{
        const  booking =  CreateBookingModel();
        const bookingResponse = booking(prisma , req) ;
        if(bookingResponse){
            res.status(201).json({response:bookingResponse})
        }
   
       }catch(error){
            res.status(400).json({message:"Server Encountered Error "});
       }  
    }

}