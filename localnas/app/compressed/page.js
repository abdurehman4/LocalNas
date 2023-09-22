import PageHeading from "@/app/components/pageHeading"
import Data from "@/app/components/DataGroups"
import getData from "@/app/components/getData"



async function Documents() {
  const ziparray =await getData('http://192.168.10.22:5000/zipFiles')
const compressedarray =await getData('http://192.168.10.22:5000/compressedFiles')
  // ... fetch other data ...
 
  const groups = [
    { name: "Zip", array: ziparray },
    { name: "Others", array: compressedarray }
  ]
  return (
    <div>
        <PageHeading heading="Archives"/>
        <Data arrayofGroups={groups}/>
    </div>
  )
}

export default Documents