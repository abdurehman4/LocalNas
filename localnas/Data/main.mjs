import * as fs from 'fs';
import {fileTypeFromFile} from 'file-type';
import * as path from 'path';
import * as url from 'url';



// const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const getAllFiles = function(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath)

  arrayOfFiles = arrayOfFiles || []

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
    } else {
      arrayOfFiles.push(path.join( dirPath, "/", file))
    }
  })
//   console.log(arrayOfFiles)
  return arrayOfFiles
}


const myFiles= [];
getAllFiles("/mnt/Data",myFiles)
// const files_with_type = [];
// const type = await fileTypeFromFile(myFiles.at(0))
// console.log(type)
// // Determing the type of files



const filesextensions = await Promise.all( myFiles.map(async (file)=>{
  const type = await fileTypeFromFile(file);
  const name =  file.split('\\').pop().split('/').pop();
  let array= [];
  if (type==undefined){
    array = [name,file,"undefined","undefined"]
  }else{
    array = [name,file,type.ext,type.mime];
  }
  // const files_with_type
  return array;
  // console.log(filesextensions)

})
)
// console.log(files_with_type)
console.log("This it the final\n")
console.log(filesextensions);

const compressedFiles = [];
const imageFiles = [];
const videoFiles = [];
const undefinedFiles = [];
const bookFiles = [];
const zipFiles = [];
const officeFiles = [];

filesextensions.forEach(function (array){
  const mime = array.at(3);
  const ext = array.at(2);
  if (ext.includes("zip")) {
    zipFiles.push(array)
  }else if (mime.includes("image")){
    imageFiles.push(array)
  }else if (mime.includes("compressed")){
    compressedFiles.push(array)
  } else if (mime.includes("video")){
    videoFiles.push(array)
  }else if (mime=="undefined"){
    undefinedFiles.push(array)
  }else if (mime.includes("office")){
    officeFiles.push(array)
  }
  else if (mime.includes("pdf")){
    bookFiles.push(array)
  }
}
)
const arrayGroup = [
  {name:"compressedFiles",array: compressedFiles},
  {name:"imageFiles",array: imageFiles},
  {name:"videoFiles",array: videoFiles},
  {name:"zipFiles",array: zipFiles},
  {name:"officeFiles",array: officeFiles},
  {name:"bookFiles",array: bookFiles},
  {name:"undefinedFiles",array: undefinedFiles} 
]

console.log("Current dir is ",__dirname)

arrayGroup.forEach(
  function(array){
    fs.writeFile(__dirname+"Arrays/"+array.name+".js", "export const "+array.name+ "=" +JSON.stringify(array.array), function(err) {
      if(err) {
          return console.log(err);
      }
    }); 
  }
)

// fs.writeFile(__dirname+"/rawdata.js", "export const array = " +JSON.stringify(filesextensions), function(err) {
//   if(err) {
//       return console.log(err);
//   }

//   // console.log("The file was saved!");
// }); 
// //Compressed Files
// fs.writeFile(__dirname+"/compressed.js", "export const array = " +JSON.stringify(compressedFiles), function(err) {
//   if(err) {
//       return console.log(err);
//   }

//   // console.log("The file was saved!");
// }); 

// // Image Files

// fs.writeFile(__dirname+"/image.js", "export const array = " +JSON.stringify(imageFiles), function(err) {
//   if(err) {
//       return console.log(err);
//   }

//   // console.log("The file was saved!");
// }); 


// // Video Files
// fs.writeFile(__dirname+"/video.js", "export const array = " +JSON.stringify(videoFiles), function(err) {
//   if(err) {
//       return console.log(err);
//   }

//   // console.log("The file was saved!");
// }); 
// // Undefined Files
// fs.writeFile(__dirname+"/undefined.js", "export const array = " +JSON.stringify(undefinedFiles), function(err) {
//   if(err) {
//       return console.log(err);
//   }

//   // console.log("The file was saved!");
// }); 


