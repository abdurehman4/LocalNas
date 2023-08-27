import express from "express";
import * as fs from 'fs'
export const zip = express.Router();

zip.get("/",(req,res)=>{
    const data = JSON.parse(fs.readFileSync('/home/abdurehman/LocalNas/backend/Arrays/zipFiles.json','utf-8'))
    res.send(data.array)
}
)