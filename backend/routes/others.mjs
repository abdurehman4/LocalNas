import express from "express";
import * as fs from 'fs'
import * as url from 'url';
export const others = express.Router();
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));


others.get("/",(req,res)=>{
    const data = JSON.parse(fs.readFileSync(__dirname+'../Arrays/others.json','utf-8'))
    res.json(data)
}
)