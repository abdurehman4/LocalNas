export default async function getData(url) {
    const res = await fetch(url,{ cache:'no-store' })
   
    return res.json().then(
      data=>{
        return data.array
      }
    )
  }