import Layout from '../components/Layout'
import '@styles/globals.css'
import PageHeading from '@/components/pageHeading'
import Data from '@/components/DataGroups'
import getData from '@/app/getData'

export async function getServerSideProps() {
  const others =await getData('http://192.168.10.22:5000/others')
 
  const groups = [
    { name: "Others", array: others }
    // { name: "Images", array: imageFiles }
  ]

  return {
    props: {
      groups
    }
  };
}

export default function Others({groups}) {
  return <Layout>
    <PageHeading heading="Others" />
    <Data arrayofGroups={groups} others={true}/>
  </Layout>
}