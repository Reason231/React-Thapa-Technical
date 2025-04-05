import { useState } from "react"

export const Circuit=()=>{
    const [isLoggedIn,setIsLoggedIn] = useState(true)
    
    return(
        <>
            <div className="flex justify-center items-center h-screen flex-col gap-3">
            <h1 className="text-6xl">Welcome to the Circuit</h1>

            {isLoggedIn && <p>You are logged in</p>}
            
            <p>Please </p>

            <div className="flex gap-10">
            <button  className="border-2" onClick={()=>setIsLoggedIn(!isLoggedIn)}>Toggle Login State</button>
            <button className="border-2">Set User</button>
            <button className="border-2">Clear User</button>
            </div>
            </div>
        </>
    )
}