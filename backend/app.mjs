
import express from 'express';
import { zip } from './routes/zip.mjs';
import { office } from './routes/office.mjs';
import { compressed } from './routes/compressed.mjs';
import { image } from './routes/images.mjs';
import { book } from './routes/book.mjs';
import { videos } from './routes/videos.mjs';
import {downloader} from './downloader.mjs';
import cors from 'cors';



var app = express()
app.use(cors())
app.get("/",(req,res)=>{
  res.json(book)
})
app.use("/zipFiles",zip)
app.use("/officeFiles",office)
app.use("/videoFiles",videos)
app.use("/compressedFiles",compressed)
app.use("/bookFiles",book)
app.use("/imageFiles",image)
app.use("/downloads",downloader)



app.listen("5000")