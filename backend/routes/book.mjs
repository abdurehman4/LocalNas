import express from "express";
import * as fs from 'fs'
import * as url from 'url';

export const book = express.Router();
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
// import { bookFiles } from "../Arrays/bookFiles.mjs";

book.get("/",(req,res)=>{
    const data = JSON.parse(fs.readFileSync(__dirname+'../Arrays/bookFiles.json','utf-8'))
    res.json(data)
}
)