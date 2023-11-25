import { PrismaClient } from '@prisma/client'
import {Express , Response , Request , NextFunction} from 'express'
import { ZRegistration } from '../lib/Zod';
import { IRegistration } from '../dto/IRegistration';


export async  function RegistrationModel(){
   return async function(prisma:PrismaClient , req:Request):Promise<IRegistration>{
    const {email ,password, firstname , lastname , address , pics } = req.body ; 
    const data = ZRegistration.parse({email , password , firstname , lastname , address , pics})
    const registationStatus =   await prisma?.user?.create({
         data:{
            email:data.email,
            password: data.password,
            fistname:data.fistname,
            lastname: data.lastname,
            address: data.address,
            pics: data.pics
         }
    })

    return registationStatus ; 
   }
}