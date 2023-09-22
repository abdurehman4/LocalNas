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
import book from '@/public/Icons/book.png'
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
          className='mr-5'
          width={56}
          height={56}
          src={(() => {
            let file_ext = extension.toLowerCase();
            // switch () {
              //Office Files
              if (file_ext=="xls" ) return excel;
              if (file_ext=="xlsx")  return excel;
              if (file_ext=="ppt" ) return powerpoint;
              if (file_ext=="doc" ) return word;
              if (file_ext=="docx")  return word;
              //Books
              if (file_ext=="pdf" ) return pdf;
              if (file_ext=="tpz" ) return book;
              if (file_ext=="mart")  return book;
              if (file_ext=="apnx")  return book;
              if (file_ext=="lrf" ) return book;
              if (file_ext=="ea") return book;
              if (file_ext=="tk3") return book;
              if (file_ext=="jwpub") return book;
              if (file_ext=="lit" ) return book;
              if (file_ext=="epub")  return book;
              if (file_ext=="oeb" ) return book;
              //MultiMedia
              if (file_ext=="video")  return video;
              if (file_ext=="mkv" ) return video;
              if (file_ext=="mov" ) return video;
              if (file_ext=="wmv" ) return video;
              if (file_ext=="mp4" ) return video;
              if (file_ext=="avi" ) return video;
              // Pictures
              if (file_ext=="png" ) return pic;
              if (file_ext=="jpg" ) return pic;
              if (file_ext=="jpeg")  return pic;
              if (file_ext=="jfif")  return pic;
              if (file_ext=="pjpeg") return pic;
              if (file_ext=="pjp" ) return pic;
              // Compressed Files
              if (file_ext=="zip" ) return zip;
              if (file_ext=="rar" ) return rar;
              // if ("blue":)   return "#0000FF";
              else return document;
          // }
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