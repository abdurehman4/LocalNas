import HomeData from '@/app/components/HomeData';
import PageHeading from '@/app/components/pageHeading';
import getData from '@/app/components/getData';


export default async function Home(){
  const compressedFiles = await getData('http://192.168.10.22:5000/compressedFiles');
    const bookFiles =await getData('http://192.168.10.22:5000/bookFiles')
  const zipFiles =await getData('http://192.168.10.22:5000/zipFiles')
  const imageFiles =await getData('http://192.168.10.22:5000/imageFiles')
  const videoFiles =await getData('http://192.168.10.22:5000/videoFiles')
  const officeFiles =await getData('http://192.168.10.22:5000/officeFiles')
    // ... fetch other data ...
   
    const groups = [
        { name: "Documents", array: bookFiles.slice(0, 6).concat(officeFiles.slice(0, 6)) },
        { name: "Compressed", array: compressedFiles.slice(0, 3).concat(zipFiles.slice(0,3)) },
        { name: "Media", array: videoFiles.slice(0, 3).concat(imageFiles.slice(0,3)) },
      ]
  return (
    <div>
      {/* <Header/> */}
      <PageHeading heading="Share documents, media, and other files over the Local Wifi Network."/>
      <div>
      <HomeData Files={groups.at(0)}/><hr className='mx-10 mb-10 sm:mx-20 md:mx-40' />
      <HomeData Files={groups.at(1)}/><hr className='mx-10 mb-10 sm:mx-20 md:mx-40' />
      <HomeData Files={groups.at(2)}/>
      </div>  
    </div>
  )
}

//  Home;
