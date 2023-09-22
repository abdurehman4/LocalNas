import '@styles/globals.css'
import PageHeading from '@/app/components/pageHeading'
import Data from '@/app/components/DataGroups'
import getData from '@/app/components/getData'

export default async function Media() {
  const videoFiles =await getData('http://192.168.10.22:5000/videoFiles')
const imageFiles =await getData('http://192.168.10.22:5000/imageFiles')
 
  const groups = [
    { name: "Videos", array: videoFiles },
    { name: "Images", array: imageFiles }
  ]
  return <div>
    <PageHeading heading="Media" />
    <Data arrayofGroups={groups}/>
  </div>
}