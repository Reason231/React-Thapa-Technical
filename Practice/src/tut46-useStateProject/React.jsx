import { useState } from "react"

export const Tut46useState=()=>{
    const [count,setCount]=useState(0)
    const [data,setData]=useState(1)


    function handleInput(order){
        if(order == "increment"){
            setCount((prev) => prev +Number(data))
        }
        else if(order == "decrement"){
            setCount((prev) => prev-Number(data))
        }
        else{
            setCount(0)
        }
    }

    return(
        <>
        <div className="flex flex-col gap-12">
            <p>useState Challange</p>
            <p>Count: {count}</p>
            <p>Step: <input type="number" className="border-2 border-red-500" onChange={(e)=>setData(e.target.value)} value={data}></input></p>

            <div className="flex gap-2">
                <button className="border-2 bg-gray-500 text-white" onClick={()=>handleInput("increment")}>Increment</button>
                <button className="border-2 bg-gray-500 text-white" onClick={()=>handleInput("decrement")}>Decrement</button>
                <button className="border-2 bg-gray-500 text-white" onClick={()=>handleInput("reset")}>Reset</button>
            </div>
        </div>
        </>
    )
}