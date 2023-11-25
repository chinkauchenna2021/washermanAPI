import {number, z ,  } from 'zod'

 export const ZRegistration = z.object({
     email: z.string().email({message:" not a valid email "}),
     password: z.string().min(6 , {message:"password must not be less than 5"}),
     fistname: z.string(),
     lastname: z.string(),
     address: z.string().min(10 , {message:"address length too short"}),
     pics: z.string(),
     balance: z.number().optional()
})



export const ZUsersLogin = z.object({
     email : z.string().email(),
     password: z.string().min(5 , {message:"Password too short"})
})
 
