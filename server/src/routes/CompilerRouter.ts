import  express  from "express";
import { saveCode } from "../controllers/compilerController";

export const CompilerRouter=express.Router();

CompilerRouter.post("/save",saveCode)



