import {Request , Response , NextFunction} from 'express' 
import {z} from 'zod'
import { PrismaClient } from "@prisma/client";
import { IRegistration} from "../dto/IRegistration";
import { ZRegistration } from "../lib/Zod";
import { RegistrationModel } from '../model/Registration.model';
import prisma from '../lib/PrismaGlobalClient';

export function registration(){
    return async function(req:Request , res:Response ){
        try{
      const  registationControllers = await RegistrationModel();
      const registationStatus =  registationControllers(prisma , req)
      res.status(201).json(registationStatus)
    }catch(error){
        if(error instanceof z.ZodError){
            res.status(400).json({message:"input validation error " , error : error.errors} )
        }else{
          res.status(500).json({message:"server error "})
        }
    }
       
   }

}

