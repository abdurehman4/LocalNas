import express from "express";
import * as fs from 'fs'
export const videos = express.Router();

videos.get("/",(req,res)=>{
    const data = JSON.parse(fs.readFileSync('/home/abdurehman/LocalNas/backend/Arrays/videoFiles.json','utf-8'))
    res.send(data.array)
}
)