import * as fs from 'fs';
import {fileTypeFromFile} from 'file-type';
import * as path from 'path';
import * as url from 'url';
// import * as process from 'process'

var compressedFiles = [];
var imageFiles = [];
var videoFiles = [];
var others = [];
var bookFiles = [];
var zipFiles = [];
var officeFiles = [];


const __dirname = url.fileURLToPath(new URL('.', import.meta.url));


async function chaosofFiles() {
    const getAllFiles = function (dirPath, arrayOfFiles) {
        const files = fs.readdirSync(dirPath)
        // console.log(files);
        // exit();


        // arrayOfFiles = arrayOfFiles || []

        files.forEach(function (file) {
            // console.log(file.charAt(0))
            try{
            if ((fs.statSync(dirPath + "/" + file).isDirectory())&&!(file.charAt(0)==".")) {
                // console.log("Inside of If statement")
                arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
            
            } else if (!(file.charAt(0)==".")) {
                arrayOfFiles.push(path.join(dirPath, "/", file))}
        }catch(err){
            // console.log(err)
        }
        })
        return arrayOfFiles
    }


    const myFiles = [];
    getAllFiles(process.argv.at(2), myFiles)

    const filesextensions = await Promise.all(myFiles.map(async (file,i) => {
        const type = await fileTypeFromFile(file);
        const name = file.split('\\').pop().split('/').pop();
        let array = [];
        if (type == undefined) {
            array = [name, file, "undefined", "undefined",i]
        } else {
            array = [name, file, type.ext, type.mime,i];
        }
        return array;

    })
    )

    compressedFiles = [];
    imageFiles = [];
    videoFiles = [];
    bookFiles = [];
    zipFiles = [];
    officeFiles = [];
    others = [];
    filesextensions.forEach(function (array) {
        const mime = array.at(3);
        const ext = array.at(2);
        if (ext.includes("zip")) {
            zipFiles.push(array)
        } else if (mime.includes("image")) {
            imageFiles.push(array)
        } else if (mime.includes("compressed")) {
            compressedFiles.push(array)
        } else if (mime.includes("video")) {
            videoFiles.push(array)
        } else if (mime == "undefined") {
            others.push(array)
        } else if (mime.includes("office")) {
            officeFiles.push(array)
        }
        else if (mime.includes("pdf")) {
            bookFiles.push(array)
        }else {
            others.push(array)
        }

    }
    )

    const arrayGroup = [
        { name: "compressedFiles", array: compressedFiles },
        { name: "imageFiles", array: imageFiles },
        { name: "videoFiles", array: videoFiles },
        { name: "zipFiles", array: zipFiles },
        { name: "officeFiles", array: officeFiles },
        { name: "bookFiles", array: bookFiles },
        { name: "others", array: others },
    ]


    arrayGroup.forEach(
        function (array) {
            fs.writeFile(__dirname+"/Arrays/" + array.name + ".json", '{"name":"'+array.name+'",'+'"array":' + JSON.stringify(array.array)+"}", function (err) {
                if (err) {
                    return console.log(err);
                }
            });
        }
    )
}

chaosofFiles()

async function waitUntil() {
    return await new Promise(resolve => {
        var i = 0;
        const interval = setInterval(() => {
            resolve('foo');
            chaosofFiles();
            console.log(i)
            i = i + 1;
        }, 30000);
    });
}
waitUntil()