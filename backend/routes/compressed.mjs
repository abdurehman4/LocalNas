import express from "express";
import * as fs from 'fs'
export const compressed = express.Router();
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

compressed.get("/",(req,res)=>{
    const data = JSON.parse(fs.readFileSync(__dirname+'../Arrays/compressedFiles.json','utf-8'))
    res.json(data)
}
)