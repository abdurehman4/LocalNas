import express from "express";
import * as fs from 'fs'
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const downloader = express.Router();
downloader.get("/", function (req, res) {
    console.dir(req.hostname)
    const book = JSON.parse(fs.readFileSync(__dirname+'Arrays/bookFiles.json','utf-8')).array
    const office = JSON.parse(fs.readFileSync(__dirname+'Arrays/officeFiles.json','utf-8')).array
    const video = JSON.parse(fs.readFileSync(__dirname+'Arrays/videoFiles.json','utf-8')).array
    const image = JSON.parse(fs.readFileSync(__dirname+'Arrays/imageFiles.json','utf-8')).array
    const zip = JSON.parse(fs.readFileSync(__dirname+'Arrays/zipFiles.json','utf-8')).array
    const compressed = JSON.parse(fs.readFileSync(__dirname+'Arrays/compressedFiles.json','utf-8')).array
    const others = JSON.parse(fs.readFileSync(__dirname+'Arrays/others.json','utf-8')).array
    const all = book.concat(office.concat(video.concat(image.concat(zip.concat(compressed.concat(others))))))
    var path =  "";
    all.map(
        (array)=>{
            if (array.at(4)==req.query.code){
                path=array.at(1)
            }else{
            }
        }
    )
    res.download(path)
})