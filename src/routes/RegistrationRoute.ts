import express, { Request, Response, NextFunction } from "express";
import prisma from '../lib/PrismaGlobalClient';
import { registration } from '../controllers/RegistrationController';
const router = express.Router();

router.get('/registeration', registration);
export { router as RegistrationRoute }








