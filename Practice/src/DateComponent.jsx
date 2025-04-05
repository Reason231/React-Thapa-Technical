import { useEffect, useState } from "react"

export const DateComponent=()=>{
    const [datetime,setDateTime] = useState("")
    useEffect(()=>{

        // First one is the preload data, so the component won't have to wait 1sec to load the data.
        const dateData=new Date()
        const getFormatDate=dateData.toLocaleDateString()
        const getFormatTime=dateData.toLocaleTimeString()
        setDateTime(`${getFormatDate} - ${getFormatTime}`)

    
    const interval = setInterval(()=>{
        const dateData=new Date()
        const getFormatDate=dateData.toLocaleDateString()
        const getFormatTime=dateData.toLocaleTimeString()
        setDateTime(`${getFormatDate} - ${getFormatTime}`)
    },1000)
  
    return () => clearInterval(interval)
  },[])

  return(
    <>
    <p>{datetime}</p>
    </>
  )
}

