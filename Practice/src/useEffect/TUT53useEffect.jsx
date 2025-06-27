import { useEffect, useState } from "react"

export const Tut52useEffect=()=>{
    const [count,setCount]=useState(0)

    const useEffect1=()=>{
        console.log("Only run one time")
    }

    useEffect(()=>{
            useEffect1()
    },[])


    const useEffect2=()=>{
        console.log("Runs as the counter increases")
    }

    const handleCounter=()=>{
        setCount((prev)=>prev+1)
    }

    useEffect(()=>{
        useEffect2()
    },[count])


    const [timeData,setTimeData]=useState()

    useEffect(()=>{
        const interval=setInterval(()=>{
            const timeInfo=new Date()
            const time=timeInfo.toLocaleTimeString()
            setTimeData(time)

            return () => clearInterval(interval)
        },1000)
    },[])

    return(
        <>
        <p>Hello i am from useEffect</p>
        <p>{count}</p>
        <button onClick={handleCounter}>Counter Increaser</button>
        <p>{timeData}</p>
        </>
    )
}