import Layout from "@/components/Layout"
import PageHeading from "@/components/pageHeading"
// import { officeFiles } from "@/Data/Arrays/officeFiles"
// import { bookFiles } from "@/Data/Arrays/bookFiles"
import Data from "@/components/DataGroups"
import { useEffect,useState } from "react"


function Documents() {
  const [bookFiles, setBookFiles]=  useState([])
  useEffect(()=>{
    fetch("http://192.168.10.22:5000/bookFiles",{ next: { revalidate: 10 } }).then(
      response => response.json()
    ).then(
      data=>{
        setBookFiles(data.array)
      }
    )
  },[])
  const [officeFiles, setOfficeFiles]=  useState([])
  useEffect(()=>{
    fetch("http://192.168.10.22:5000/officeFiles",{ next: { revalidate: 10 } }).then(
      response => response.json()
    ).then(
      data=>{
        setOfficeFiles(data.array)
      }
    )
  },[])

const groups = [
  { name: "Books", array: bookFiles },
  { name: "Office Files", array: officeFiles }
]
  return (
    <Layout>
        <PageHeading heading="Documents"/>
        <Data arrayofGroups={groups}/>
      {/* Media Card start */}
    </Layout>
  )
}

export default Documents