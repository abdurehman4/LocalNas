import Layout from "@/components/Layout"
import PageHeading from "@/components/pageHeading"
import Data from "@/components/DataGroups"
import getData from "@/app/getData"

export async function getServerSideProps() {
  const ziparray =await getData('http://192.168.10.22:5000/zipFiles')
const compressedarray =await getData('http://192.168.10.22:5000/compressedFiles')
  // ... fetch other data ...
 
  const groups = [
    { name: "Zip", array: ziparray },
    { name: "Others", array: compressedarray }
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
        <PageHeading heading="Archives"/>
        <Data arrayofGroups={groups}/>
    </Layout>
  )
}

export default Documents