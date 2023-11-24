import express, { Express, Request, Response, NextFunction } from 'express';
import { UserAuth } from './middleware/UserAuth';
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.listen(3000 , ()=>console.log("running on port 3000"))