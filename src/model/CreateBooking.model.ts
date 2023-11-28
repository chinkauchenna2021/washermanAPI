import { PrismaClient  , Services} from '@prisma/client'
import {Request , Response , NextFunction } from 'express'


// id String @id @default(uuid())
// services Services 
// destination String
// numberofitems Int
// phonenumber String
// price Int
// isUrgent Boolean
// requestCall Boolean
// usersServices User @relation(fields: [bookingid] , references: [id])
// bookingid String
// isCompleted Boolean
// createdAt DateTime @default(now())
// updatedAt DateTime @updatedAt

export function CreateBookingModel() {
  return async function(prisma: PrismaClient, req: Request) {
    const {
      destination,
      numberofitems,
      phonenumber,
      price,
      isUrgent,
      requestCall,
      isCompleted,
    } = req.body;
    const { id } = req.users;
    const bookingModel = await prisma.bookservice.create({
      data: {
        services: Services.CARPET,
        destination: destination,
        numberofitems: numberofitems,
        phonenumber: phonenumber,
        price: price,
        usersServices: {
          connect: {
            id: id,
          },
        },
        isCompleted: isCompleted,
        isUrgent: isUrgent,
        requestCall: requestCall,
      },
    });
    return bookingModel ; 
  };
}