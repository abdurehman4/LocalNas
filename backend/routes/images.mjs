import express from "express";
import * as fs from 'fs'
export const image = express.Router();

image.get("/",(req,res)=>{
    const data = JSON.parse(fs.readFileSync('/home/abdurehman/LocalNas/backend/Arrays/imageFiles.json','utf-8'))
    res.json(data)
}
)