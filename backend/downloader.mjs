import express from "express";
import * as fs from 'fs'


export const downloader = express.Router();
downloader.get("/", function (req, res) {
    console.dir(req.hostname)
    const book = JSON.parse(fs.readFileSync('/home/abdurehman/LocalNas/backend/Arrays/bookFiles.json','utf-8')).array
    const office = JSON.parse(fs.readFileSync('/home/abdurehman/LocalNas/backend/Arrays/officeFiles.json','utf-8')).array
    const video = JSON.parse(fs.readFileSync('/home/abdurehman/LocalNas/backend/Arrays/videoFiles.json','utf-8')).array
    const image = JSON.parse(fs.readFileSync('/home/abdurehman/LocalNas/backend/Arrays/imageFiles.json','utf-8')).array
    const zip = JSON.parse(fs.readFileSync('/home/abdurehman/LocalNas/backend/Arrays/zipFiles.json','utf-8')).array
    const compressed = JSON.parse(fs.readFileSync('/home/abdurehman/LocalNas/backend/Arrays/compressedFiles.json','utf-8')).array
    const all = book.concat(office.concat(video.concat(image.concat(zip.concat(compressed)))))
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