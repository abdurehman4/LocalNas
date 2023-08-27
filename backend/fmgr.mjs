import * as fs from 'fs';
import {fileTypeFromFile} from 'file-type';
import * as path from 'path';
import * as url from 'url';


var compressedFiles = [];
var imageFiles = [];
var videoFiles = [];
var undefinedFiles = [];
var bookFiles = [];
var zipFiles = [];
var officeFiles = [];


const __dirname = url.fileURLToPath(new URL('.', import.meta.url));


async function chaosofFiles() {
    const getAllFiles = function (dirPath, arrayOfFiles) {
        const files = fs.readdirSync(dirPath)

        arrayOfFiles = arrayOfFiles || []

        files.forEach(function (file) {
            if (fs.statSync(dirPath + "/" + file).isDirectory()) {
                arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
            } else {
                arrayOfFiles.push(path.join(dirPath, "/", file))
            }
        })
        //   console.log(arrayOfFiles)
        return arrayOfFiles
    }


    const myFiles = [];
    getAllFiles("/mnt/Data", myFiles)
    // const files_with_type = [];
    // const type = await fileTypeFromFile(myFiles.at(0))
    // console.log(type)
    // // Determing the type of files



    const filesextensions = await Promise.all(myFiles.map(async (file,i) => {
        const type = await fileTypeFromFile(file);
        const name = file.split('\\').pop().split('/').pop();
        let array = [];
        if (type == undefined) {
            array = [name, file, "undefined", "undefined",i]
        } else {
            array = [name, file, type.ext, type.mime,i];
        }
        // const files_with_type
        return array;
        // console.log(filesextensions)

    })
    )
    // console.log(files_with_type)
    console.log("This it the final\n")
    // console.log(filesextensions);

    compressedFiles = [];
    imageFiles = [];
    videoFiles = [];
    undefinedFiles = [];
    bookFiles = [];
    zipFiles = [];
    officeFiles = [];
    filesextensions.forEach(function (array) {
        const mime = array.at(3);
        // console.log('Cureent '+{mime})
        // console.log('Array \n '+{array})

        const ext = array.at(2);
        // console.log('Cureent '+{ext})
        if (ext.includes("zip")) {
            zipFiles.push(array)
        } else if (mime.includes("image")) {
            imageFiles.push(array)
        } else if (mime.includes("compressed")) {
            compressedFiles.push(array)
        } else if (mime.includes("video")) {
            videoFiles.push(array)
        } else if (mime == "undefined") {
            undefinedFiles.push(array)
        } else if (mime.includes("office")) {
            officeFiles.push(array)
        }
        else if (mime.includes("pdf")) {
            bookFiles.push(array)
        }

    }
    )
    // console.log({zipFiles})
    //   console.log({compressedFiles})
    //   console.log({officeFiles})
    //   console.log({videoFiles})
    const arrayGroup = [
        { name: "compressedFiles", array: compressedFiles },
        { name: "imageFiles", array: imageFiles },
        { name: "videoFiles", array: videoFiles },
        { name: "zipFiles", array: zipFiles },
        { name: "officeFiles", array: officeFiles },
        { name: "bookFiles", array: bookFiles },
        { name: "undefinedFiles", array: undefinedFiles }
    ]

    // console.log("Current dir is ",__dirname)

    arrayGroup.forEach(
        function (array) {
            console.log(array)
            fs.writeFile(__dirname + "Arrays/" + array.name + ".json", '{"name":"'+array.name+'",'+'"array":' + JSON.stringify(array.array)+"}", function (err) {
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
            chaosofFiles()
            i = i + 1;
        }, 10000);
    });
}
waitUntil()