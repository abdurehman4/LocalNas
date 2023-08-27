import Layout from "@/components/Layout"
// import Filecard from "@/components/Filecard"
// import { comic_Neue } from "@/components/fonts"
import PageHeading from "@/components/pageHeading"
import Data from "@/components/DataGroups"
import { compressedFiles } from "@/Data/Arrays/compressedFiles"
import { zipFiles } from "@/Data/Arrays/zipFiles"

const groups = [
  { name: "Zip", array: zipFiles },
  { name: "Others", array: compressedFiles }
]




function Documents() {
  return (
    <Layout>
        <PageHeading heading="Documents"/>
        <Data arrayofGroups={groups}/>
      {/* Media Card start */}
    </Layout>
  )
}

export default Documents