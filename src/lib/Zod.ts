import {z , infer} from 'zod'

const ZRegistration = z.object({



})


export const regValidation = z.infer<typeof ZRegistration>
