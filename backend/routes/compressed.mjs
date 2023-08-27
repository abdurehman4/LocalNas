import express from "express";
import * as fs from 'fs'
export const compressed = express.Router();

compressed.get("/",(req,res)=>{
    const data = JSON.parse(fs.readFileSync('/home/abdurehman/LocalNas/backend/Arrays/compressedFiles.json','utf-8'))
    res.json(data)
}
)