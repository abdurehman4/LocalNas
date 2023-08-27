import { bookFiles } from '@/Data/Arrays/bookFiles';
import { compressedFiles } from '@/Data/Arrays/compressedFiles';
import { imageFiles } from '@/Data/Arrays/imageFiles';
import { officeFiles } from '@/Data/Arrays/officeFiles';
import { videoFiles } from '@/Data/Arrays/videoFiles';
import { zipFiles } from '@/Data/Arrays/zipFiles';
import Filecard from '@/components/Filecard';
import HomeData from '@/components/HomeData';
import { comic_Neue } from '@/components/fonts';
import PageHeading from '@/components/pageHeading';
// import Data from '@/components/DataGroups';


const groups = [
  { name: "Documents", array: bookFiles.slice(0, 6).concat(officeFiles.slice(0, 6)) },
  { name: "Compressed", array: compressedFiles.slice(0, 3).concat(zipFiles.slice(0,3)) },
  { name: "Media", array: videoFiles.slice(0, 3).concat(imageFiles.slice(0,3)) },
]


export default function Home(){
  return (
    <div>
      <PageHeading heading="Share documents, media, and other files over the Local Wifi Network."/>
      <div>
      <HomeData Files={groups.at(0)}/><hr className='mx-10 mb-10 sm:mx-20 md:mx-40' />
      <HomeData Files={groups.at(1)}/><hr className='mx-10 mb-10 sm:mx-20 md:mx-40' />
      <HomeData Files={groups.at(2)}/>
        {/* Documents Start */}
      {/* <div className='w-min-full w-max-full my-2 sm:mx-15 md:mx-28 mx-10 flex flex-col justify-center'>
        <h2 className='text-4xl font-semibold w-fit w-max-fit border-solid border-b-1'>Documents</h2>
        <div className='flex flex-column w-full'>
          <div className='flex flex-wrap justify-center m-3 md:m-10 w-full'>
            <Filecard name='Document 1' type='pdf'/>
            <Filecard name='Document 3' type='pdf'/>
            <Filecard name='This is a example of a card with a very long file name and it becomes dots' type='doc'/>
            <Filecard name='Document 5' type='pdf'/>
            <Filecard name='Document 6' type='txt'/>
            <Filecard name='Document No 7 is an excel file.' type='excel'/>            
          </div>
        </div>
      </div>
      <hr className='mx-10 mb-10 sm:mx-20 md:mx-40' />
      <div className='w-min-full w-max-full my-2 sm:mx-15 md:mx-28 mx-10 flex flex-col justify-center'>
        <h2 className='text-4xl font-semibold w-fit w-max-fit border-solid border-b-1'>Videos</h2>
        <div className='flex flex-column w-full'>
          <div className='flex flex-wrap justify-center m-3 md:m-10 w-full'>
            <Filecard name='Video' type='video'/>
            <Filecard name='Video1' type='video'/>
            <Filecard name='Video12' type='video'/>
            <Filecard name='Video123' type='video'/>
            <Filecard name='Video1235' type='video'/>
            
          </div>
        </div>
  </div>*/}
      </div>
    </div>
  )
}

//  Home;
