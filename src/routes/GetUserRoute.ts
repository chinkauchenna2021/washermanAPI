import express, { Request, Response, NextFunction } from "express";
import prisma from '../lib/PrismaGlobalClient';
const router = express.Router();

 router.get('/', async(req, res) => {
         try {
                 const users = await prisma.user.findMany();
                 res.json(users);
         } catch (error) {
                 console.error('Error fetching users:', error);
                 res.status(500).json({ error: 'Internal Server Error' });
         }
        
});
export { router as GetUserRoute }




