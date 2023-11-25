import express, { Request, Response, NextFunction } from "express";
import prisma from '../lib/PrismaGlobalClient';
export const GetAllUsers = async (req: Request, res: Response) => {
         try {
                  const users = await prisma.user.findMany();
                  res.json(users);
         } catch (error) {
                  console.error('Error fetching users:', error);
                  res.status(500).json({ error: 'Internal Server Error' });
         }

}