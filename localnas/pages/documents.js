import Layout from "@/components/Layout"
import PageHeading from "@/components/pageHeading"
import Data from "@/components/DataGroups"
import getData from "@/app/getData"

export async function getServerSideProps() {
  const bookFiles =await getData('http://192.168.10.22:5000/bookFiles')
const officeFiles =await getData('http://192.168.10.22:5000/officeFiles')
  // ... fetch other data ...
 
  const groups = [
    { name: "Books", array: bookFiles },
    { name: "Office Files", array: officeFiles }
  ]

  return {
    props: {
      groups
    }
  };
}

function Documents({groups}) {
  return (
    <Layout>
        <PageHeading heading="Documents"/>
        <Data arrayofGroups={groups}/>
    </Layout>
  )
}

export default Documents