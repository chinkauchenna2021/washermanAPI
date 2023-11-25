import { PrismaClient } from '@prisma/client'
import {Express , Response , Request , NextFunction} from 'express'
import { ZUserBooking } from '../lib/Zod'

export function SingleBooking(){
    return async function(prisma:PrismaClient , req:Request){
      try{
       const id = ZUserBooking.parse(req.body);
      const usersSingleBooking = await prisma.bookservice.findFirst({
        where:{
            id:String(id)
        }
      })

      if(usersSingleBooking){
        return usersSingleBooking ; 
      }

      } catch(error){
      }    
    
    }
    
}