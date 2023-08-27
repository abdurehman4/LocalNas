import Layout from "@/components/Layout"
import PageHeading from "@/components/pageHeading"
import { officeFiles } from "@/Data/Arrays/officeFiles"
import { bookFiles } from "@/Data/Arrays/bookFiles"
import Data from "@/components/DataGroups"

const groups = [
  { name: "Books", array: bookFiles },
  { name: "Office Files", array: officeFiles }
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