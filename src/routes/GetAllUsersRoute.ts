import express, { Request, Response, NextFunction } from "express";
import { GetAllUsers } from '../controllers'
const router = express.Router();

router.get('/allusers', GetAllUsers);
export { router as GetUserRoute }




