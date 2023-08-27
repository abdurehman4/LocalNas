import Layout from '../components/Layout'
import '@styles/globals.css'
import PageHeading from '@/components/pageHeading'
// import { videoFiles } from '@/Data/Arrays/videoFiles'
// import { imageFiles } from '@/Data/Arrays/imageFiles'
import Data from '@/components/DataGroups'
import { useEffect, useState } from 'react'


export default function Media() {
  const [videoFiles, setVideoFiles]=  useState([])
  useEffect(()=>{
    fetch("http://192.168.10.22:5000/videoFiles",{ next: { revalidate: 10 } }).then(
      response => response.json()
    ).then(
      data=>{
        setVideoFiles(data.array)
      }
    )
  },[])
  const [imageFiles, setImageFiles]=  useState([])
  useEffect(()=>{
    fetch("http://192.168.10.22:5000/imageFiles",{ next: { revalidate: 10 } }).then(
      response => response.json()
    ).then(
      data=>{
        setImageFiles(data.array)
      }
    )
  },[])


  const groups = [
    { name: "Videos", array: videoFiles },
    { name: "Images", array: imageFiles }
  ]
  return <Layout>
    <PageHeading heading="Media" />
    <Data arrayofGroups={groups}/>
  </Layout>
}