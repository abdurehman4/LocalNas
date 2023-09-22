import '@styles/globals.css'
import PageHeading from '@/app/components/pageHeading'
import Data from '@/app/components/DataGroups'
import getData from '@/app/components/getData'


export default async function Others() {
  const others =await getData('http://192.168.10.22:5000/others')
 
  const groups = [
    { name: "Others", array: others }
    // { name: "Images", array: imageFiles }
  ]
  return <div>
    <PageHeading heading="Others" />
    <Data arrayofGroups={groups} others={true}/>
  </div>
}