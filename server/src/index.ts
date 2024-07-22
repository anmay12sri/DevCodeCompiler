import express  from "express";
import cors from "cors";
import {config} from "dotenv";
import { dbConnect } from "./lib/dbConnect";
const app=express()

app.use(express.json())
app.use(cors())
config();
dbConnect();

// app.get("/",(req:Request,res:Response)=>{
//     return res.status(200).send("ok");
// })

app.listen(4000,()=>{
    console.log(process.env.TEST);
    
    console.log("http://localhost:4000");
})