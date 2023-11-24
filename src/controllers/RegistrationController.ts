import { PrismaClient } from "@prisma/client";
import { IRegistrationController } from "../dto/IRegistration";
import { ZRegistration } from "../lib/Zod";

export function registration({prisma , usersInputObject}:IRegistrationController){
    return async function(){
        try{
        const data = await ZRegistration.parseAsync(usersInputObject)

      await prisma?.user?.create({
             data:{
                email:data.email,
                password: data.password,
                fistname:data.fistname,
                lastname: data.lastname,
                address: data.address,
                pics: data.pics
             }
        })

    }catch(error){
      throw new Error("registration failed "+ error)
    }
       
   }

}

