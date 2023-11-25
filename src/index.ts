
import express, { Express, Request, Response, NextFunction } from 'express';
import { UserAuth } from './middleware/UserAuth';
import { GetUserRoute, RegistrationRoute } from './routes'
import prisma from './lib/PrismaGlobalClient';
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/washermanApi', GetUserRoute);
app.use('/washermanApi', RegistrationRoute);





app.listen(3000 , ()=>console.log("running on port 3000"))