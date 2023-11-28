import {Request , Response , NextFunction } from 'express'
import { DeleteSingleBookingModel } from '../model/DeleteBooking.model'
import prisma from '../lib/PrismaGlobalClient';



export  function DeleteBooking(req:Request , res:Response , next:NextFunction){
   return async function(){
       try{
        const deleteModel =  DeleteSingleBookingModel();
        const deleteResponse = await deleteModel(prisma , req)
        if(deleteResponse){
            res.status(201).json(deleteResponse)
        }
       }catch(error){
        res.json({message:"server Error occured "})

       }

   }

}