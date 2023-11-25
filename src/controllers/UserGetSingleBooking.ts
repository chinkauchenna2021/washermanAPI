import { Express, Response, Request, NextFunction } from "express";
import z from "zod";
import { SingleBooking } from "../model/SingleBooking.model";
import prisma from "../lib/PrismaGlobalClient";

export function GetSingleBooking(
  req: Request,
  res: Response,
  next: NextFunction
) {
  return async function () {
    try {
      const getSingleBooking = SingleBooking();
      const singleBookingResponse = await getSingleBooking(prisma, req);
      if (singleBookingResponse) {
        res.status(201).json({ response: singleBookingResponse });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new Error("error while fetching users data " + error.errors);
      } else {
        throw new Error("Server Error " + error);
      }
    }
  };
}
