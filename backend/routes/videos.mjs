import express from "express";
import * as fs from 'fs'
import * as url from 'url';
export const videos = express.Router();
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));


videos.get("/",(req,res)=>{
    const data = JSON.parse(fs.readFileSync(__dirname+'../Arrays/videoFiles.json','utf-8'))
    res.json(data)
}
)