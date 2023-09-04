import express from "express";
import * as fs from 'fs'
export const others = express.Router();

others.get("/",(req,res)=>{
    const data = JSON.parse(fs.readFileSync('/home/abdurehman/LocalNas/backend/Arrays/others.json','utf-8'))
    res.json(data)
}
)