// import React from 'react'
import Image from 'next/image';
import pdf from '@public/Icons/pdf.png'
import document from '@public/Icons/document.png';
import excel from '@public/Icons/excel.png';
import '@styles/globals.css'
import video from '@public/Icons/video.png'
import pic from '@public/Icons/pic.png'
import powerpoint from '@public/Icons/powerpoint.png'
import word from '@/public/Icons/word.png'
import compressed from '@/public/Icons/compressed.png'
import rar from '@/public/Icons/rar.png'
import zip from '@/public/Icons/zip.png'
import './filecard.module.css'
// import { useEffect } from 'react';
import Link from 'next/link';



// $('.card-text-wrapper').click(function() {
//   if ($(this).hasClass('expanded')) {
//     $(this).find('.card-text').hide('slow');
//     $(this).removeClass('expanded');
//   } else {
//      $(this).find('.card-text').show('slow');
//     $(this).addClass('expanded');
//   }
// });


const Filecard = ({ name,path, extension }) => {
  return (
    <div className='flex flex-col justify-center items-center ' >
      <div className='break-all truncate md:break-wrap h-28 w-280 md:w-fit md:max-w-fit flex-col max-h-30 flex max-w-xxs py-4 sm:py-6 px-2 sm:px-4 md:px-5 sm:mx-4 md:mx-6 mx-3 sm:my-3 my-2 flex-row justify-center sm:justify-evenly  items-center bg-white border border-gray-200 rounded-2xl hover:rounded-xl drop-shadow-md hover:drop-shadow-lg transition sm:flex-row'>
        <Image
          className='h-9 sm:h-14 w-9 sm:w-14 mr-5'
          src={(() => {
            switch (extension) {
              //Office Files
              case "xls": return excel;
              case "xlsx": return excel;
              case "ppt": return powerpoint;
              case "doc": return word;
              case "docx": return word;
              //Books
              case "pdf": return pdf;
              //MultiMedia
              case "video": return video;
              case "mkv": return video;
              case "mp4": return video;
              case "avi": return video;
              case "png": return pic;
              case "jpg": return pic;
              case "jpeg": return pic;
              // Compressed Files
              case "zip": return zip;
              case "rar": return rar;
              // case "blue":  return "#0000FF";
              default: return document;
            }
          })()}
          alt='doc'
        />
        <Link href={'http://192.168.10.22:5000/downloads?code=' + path} className='text-l p-2 sm:text-xl font-medium break-all truncate'>{name}</Link>
      </div>
      <div className='flex flex-row w-100'>

      </div>
    </div>
  )
}

export default Filecard