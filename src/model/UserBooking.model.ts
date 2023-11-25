import { PrismaClient } from "@prisma/client";
import { Express, Request, Response, NextFunction } from "express";
import { ZUserBooking } from "../lib/Zod";

export function UserBookingModel(req: Request) {
  return async function (prisma: PrismaClient) {
    try {
      const id = ZUserBooking.parse(req.body);

      const usersManyBooking = await prisma?.bookservice?.findMany({
        where: {
          id: String(id),
        },
      });
      if (usersManyBooking) {
        return usersManyBooking;
      }
    } catch (error) {
      throw new Error("Error fetching users Booking");
    }
  };
}
