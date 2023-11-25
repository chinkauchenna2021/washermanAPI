import { PrismaClient } from "@prisma/client";
import express, { Express, Request, Response, NextFunction } from "express";
import { AllUsersBooking } from "../model/AllUsersBooking.model";
import prisma from "../lib/PrismaGlobalClient";

export function GetUsersBooking() {
  return async function (req: Request, res: Response, next: NextFunction) {
    try {
const allBooking =  AllUsersBooking();
  const allBokkingResponse = await allBooking(prisma);
   if(allBokkingResponse){
    res.status(201).json(allBokkingResponse);
   }else{
    res.status(404).json({message:"all users booking is not available "})
   }
    } catch (error) {
      throw new Error("server error"); 
    }
  };
}
