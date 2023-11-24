import {z , infer} from 'zod'

const ZRegistration = z.object({
     email: z.string().email({message:""})
    
})


export const regValidation = infer<typeof ZRegistration>
