import Layout from "@/components/Layout"
// import Filecard from "@/components/Filecard"
// import { comic_Neue } from "@/components/fonts"
import PageHeading from "@/components/pageHeading"
import Data from "@/components/DataGroups"
import { compressedFiles } from "@/Data/Arrays/compressedFiles"
import { zipFiles } from "@/Data/Arrays/zipFiles"
import {useEffect,useState} from 'react'
// import { u } from "react"









function Documents() {
  const [ziparray, setZiparray]=  useState([])
  useEffect(()=>{
    fetch("http://192.168.10.22:5000/zipFiles",{ next: { revalidate: 10 } }).then(
      response => response.json()
    ).then(
      data=>{
        setZiparray(data.array)
      }
    )
  },[])
  const [compressedarray, setCompressedarray]=  useState([])
  useEffect(()=>{
    fetch("http://192.168.10.22:5000/compressedFiles",{ next: { revalidate: 10 } }).then(
      response => response.json()
    ).then(
      data=>{
        setCompressedarray(data.array)
      }
    )
  },[])
  const groups = [
    { name: "Zip", array: ziparray },
    { name: "Others", array: compressedarray }
  ]
  console.log(compressedarray)
  // const zipFilesa = await 
  // console.log(ziparray)
  return (
    <Layout>
        <PageHeading heading="Archives"/>
        <Data arrayofGroups={groups}/>
      {/* Media Card start */}
    </Layout>
  )
}

export default Documents