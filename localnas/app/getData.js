export default async function getData(url){
    const res = await fetch(url,{
      revalidate:10
    })
    // console.log(await res.json())
    const Files =  await res.json().then(
      data=>{
        // console.log("HEllo")
        // console.log(data.array)
        return data.array
      }
    )
    // console.log("files")
    // console.log(Files)
    return Files;
  }
  