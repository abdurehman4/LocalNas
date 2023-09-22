import PageHeading from "@/app/components/pageHeading"
import Data from "@/app/components/DataGroups"
import getData from "@/app/components/getData"


async function Documents() {
  const bookFiles =await getData('http://192.168.10.22:5000/bookFiles')
const officeFiles =await getData('http://192.168.10.22:5000/officeFiles')
  // ... fetch other data ...
 
  const groups = [
    { name: "Books", array: bookFiles },
    { name: "Office Files", array: officeFiles }
  ]
  return (
        <div>
        <PageHeading heading="Documents"/>
        <Data arrayofGroups={groups}/></div>
  )
}

export default Documents