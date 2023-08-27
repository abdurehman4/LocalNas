import express from "express";
import * as fs from 'fs'
export const book = express.Router();
// import { bookFiles } from "../Arrays/bookFiles.mjs";

book.get("/",(req,res)=>{
    const data = JSON.parse(fs.readFileSync('/home/abdurehman/LocalNas/backend/Arrays/bookFiles.json','utf-8'))
    res.send(data.array)
}
)