import express from "express";
import * as fs from 'fs'
export const office = express.Router();

office.get("/",(req,res)=>{
    const data = JSON.parse(fs.readFileSync('/home/abdurehman/LocalNas/backend/Arrays/officeFiles.json','utf-8'))
    res.send(data.array)
}
)