import { useEffect, useState } from "react"

export const Tut54useEffectChallenge=()=>{
    const [count,setCount]=useState(0)
    const [input,setInput]=useState("")

    useEffect(()=>{
        document.title = `Count : ${count}`
    },[count])

    return(
        <div className="flex flex-col h-screen bg-blue-800 text-white justify-center items-center">
            <h1>useEffect Challenge</h1>
            <p>Count :{count} </p>
            <button onClick={(e)=>setCount((prev)=> prev + 1)} className="bg-green-500 rounded-md">Increment</button>
            <p>Name : {input}</p>
            <input onChange={(e)=>setInput(e.target.value)} className="text-black"></input>
        </div>
    )
}