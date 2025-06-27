import { useState } from "react"

export function UseState(){
    let [count,setCount]=useState(0)
    let [num,setNum]=useState({
        odd:5,
        even:10,
        prime:3,
        whole:0
    })

    function handleButtonClick(){
        setCount(()=> count+1)
    }

    function handleEvenClick(){
        setNum(prevState=>({
            ...prevState, // Keep existing same like odd,prime,and whole
            even:prevState.even + 2 // Update only "even"
        }))
    }

    
    return(
        <>
        <div class="flex flex-col justify-center">

        <h1 class="ml-6">{count}</h1>
        <button onClick={handleButtonClick} class="ml-6 border-r-8 bg-cyan-200" >Increment of normal Number</button>

        
        <button onClick={handleEvenClick} class="ml-6 border-r-8 bg-cyan-200 mt-5">Increment of even Number while other remain constant</button>
        <p>{num.even}</p>
        </div>

        </>
    )
}
