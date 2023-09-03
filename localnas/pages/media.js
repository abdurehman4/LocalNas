import Layout from '../components/Layout'
import '@styles/globals.css'
import PageHeading from '@/components/pageHeading'
import Data from '@/components/DataGroups'
import getData from '@/app/getData'

export async function getServerSideProps() {
  const videoFiles =await getData('http://192.168.10.22:5000/videoFiles')
const imageFiles =await getData('http://192.168.10.22:5000/imageFiles')
 
  const groups = [
    { name: "Videos", array: videoFiles },
    { name: "Images", array: imageFiles }
  ]

  return {
    props: {
      groups
    }
  };
}

export default function Media({groups}) {
  return <Layout>
    <PageHeading heading="Media" />
    <Data arrayofGroups={groups}/>
  </Layout>
}