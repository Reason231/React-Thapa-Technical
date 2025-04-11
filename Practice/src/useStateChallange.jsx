import { useState } from "react"

export const UseStateChallenge=()=>{
    const [value,setValue]=useState(0)
    const [set,setSet]=useState(1)

    const handleSet=(value)=>{
        const values=Number(value)
        setSet(values)
    }

    return(
        <>
            <h1>{`Count: ${value}`}</h1>
            <p>Step : <input type="number" onChange={(e)=>handleSet(e.target.value)} className="bg-red-500 text-white"></input></p>

            <button onClick={()=>setValue(value+set)}>Increment</button>
        </>
    )
}