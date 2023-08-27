import Layout from '../components/Layout'
import '@styles/globals.css'
import PageHeading from '@/components/pageHeading'
import { videoFiles } from '@/Data/Arrays/videoFiles'
import { imageFiles } from '@/Data/Arrays/imageFiles'
import Data from '@/components/DataGroups'

const groups = [
  { name: "Videos", array: videoFiles },
  { name: "Images", array: imageFiles }
]

export default function Media() {
  return <Layout>
    <PageHeading heading="Media" />
    <Data arrayofGroups={groups}/>
  </Layout>
}