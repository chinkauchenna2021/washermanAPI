import express, { Express, Request, Response, NextFunction } from "express";
import { UserBookingModel } from "../model/UserBooking.model";
import prisma from "../lib/PrismaGlobalClient";
import { z } from "zod";

export function userAllBooking(req: Request, res: Response, next: NextFunction) {
  return async function () {
    try {
       const booking = UserBookingModel(req);
        const userbookingresponse = await booking(prisma);
        if(userbookingresponse){
            res.json(userbookingresponse)
        }else{
            res.json({message:"users response failed"});
        }
   
    } catch (error) {
          if(error instanceof z.ZodError){
            res.json({message:"error occured "+ error.errors})
          }else{
            res.json({message:"error occured "+error})
          }
    }
  };
}
