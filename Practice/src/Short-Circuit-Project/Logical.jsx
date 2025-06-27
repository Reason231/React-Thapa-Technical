import { useState } from "react"

export const LogicalOperator=()=>{
    const [isLoggedIn,setIsLoggedIn]=useState(false)
    const [user,setUser]=useState("")


    return(
        <>
        <div className="h-screen flex flex-col justify-center items-center gap-10">
            <h1>
                Welcome to the ShortCircuit Evaluation
                </h1>

            {isLoggedIn && <p>You are logged in</p>}
            {user ? `Hello ${user}` : "Please login"}

            <div>
                <button className="border-2 bg-slate-600 text-white" onClick={()=> setIsLoggedIn(!isLoggedIn)}>Toggle Login State</button>
                <button className="border-2 bg-slate-600 text-white" onClick={()=>setUser("Reason")}>Set User</button>
                <button className="border-2 bg-slate-600 text-white" onClick={()=>setUser("")}>Clear User</button>
            </div>
        </div>
        </>
    )
}